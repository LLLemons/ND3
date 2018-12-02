$(function () {
  var BASE_URL = './../api/admin/1/',
    TEACHER = 'teacher', // 教师的标识
    STUDENT = 'student', // 学生的标识
    PARENT = 'parent', // 家长的标识
    FLAG = TEACHER, // 全局标识
    DEFAULT_URL = BASE_URL + 'data_teacher.json', // 默认的请求地址
    TEACHER_URL = DEFAULT_URL, // 教师地址
    STUDENT_URL = BASE_URL + 'data_student.json', // 学生地址
    PARENT_URL = BASE_URL + 'data_parent.json' // 家长地址

  init()
  getList(DEFAULT_URL, FLAG)

  /**
   * 初始化信息
   * @param {Object} search
   */
  function init(search) {
    if (!window.location.search) {
      return
    }
    // 格式化地址栏信息
    var formatObj = formatSearch(window.location.search)
    switch (decodeURI(formatObj.type)) {
      case '行政班':
        BASE_URL = './../api/admin/' + (parseInt(formatObj.id) + 1) + '/'
        break;
      case '教学班':
        BASE_URL = './../api/teach/' + (parseInt(formatObj.id) + 1) + '/'
        break;
      default:
    }
    // 修改默认地址
    DEFAULT_URL = BASE_URL + 'data_teacher.json'
    // 修改教师地址
    TEACHER_URL = DEFAULT_URL,
      // 修改学生地址
      STUDENT_URL = BASE_URL + 'data_student.json',
      // 修改家长地址
      PARENT_URL = BASE_URL + 'data_parent.json'
  }

  /**
   * 请求列表数据，并渲染列表
   * @param {String} url
   */
  function getList(url, type) {
    $.get(url, function (res) {
      currentData = res.data
      renderList(currentData, type)
    }, 'json')
  }

  /**
   * 渲染列表
   * @param {Array} data
   */
  function renderList(data, type) {
    var obj = {
      data: data,
      type: type
    }
    var list = template("class_content", obj)
    console.log($('.render')[0])
    $('.render').html(list)

    // 注册事件
    regEvent()
  }

  /**
   * 輸入框搜索
   */
  $('.search__input').on('input propertychange', function () {
    debounce.call(this,function (e) {
      var value = $(this).val()
      var final = fuzzySearch(value)
      renderList(final, FLAG)
    }, 500)()
  })
  $('.search__button').on('click', function () {
    var value = $('.search__input').val()
    var final = fuzzySearch(value)
    renderList(final, FLAG)
  })

  /**
   * 注册事件
   */
  function regEvent() {
    // 1.tab切换获取数据
    $('.kindTab').on('click', tabChange)
  }

  /**
   * tab切换
   * @param {Object} e 事件对象
   */
  function tabChange(e) {
    var target = e.target.dataset.flag
    FLAG = target
    if (!target) return
    switch (target) {
      case TEACHER:
        getList(TEACHER_URL, FLAG)
        break;
      case STUDENT:
        getList(STUDENT_URL, FLAG)
        break;
      case PARENT:
        getList(PARENT_URL, FLAG)
        break;
      default:
        break;
    }
  }

  /**
   * 函數防抖
   * @param {Function} fn
   * @param {Number} interval
   */
  function debounce(fn, interval) {
    var that = this
    let timeout = null;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(that, arguments)
      }, interval)
    }
  }

  /**
   * 格式化location的search的信息，转为对象
   * @param {String} search
   * @return {Object} 返回的结果
   */
  function formatSearch(search) {
    var search = window.location.search.substr(1)
    var splitStr = search.split('&')
    var obj = {}
    splitStr.forEach(function (item) {
      obj[item.split("=")[0]] = item.split("=")[1]
    });
    return obj
  }

  /**
   * 模糊搜索
   * @param {String} value
   * @return {Array} 返回搜索到的数组
   */
  function fuzzySearch(value) {
    // var data = {...currentData}
    var data = JSON.parse(JSON.stringify(currentData))
    data.list = data.list.reduce(function (total, currentValue) {
      var isFind = currentValue.name.some(function (ele) {
        return ele.match(value) !== null
      });
      if (isFind) {
        return [...total, currentValue]
      }
      return [...total]

    }, [])
    return data
  }
})
