$(function () {
  var BASE_URL = './../api/admin/1/',
    TEACHER = 'teacher', // 教师的标识
    STUDENT = 'student', // 学生的标识
    PARENT = 'parent', // 家长的标识
    DEFAULT_URL = BASE_URL + 'teacher.json', // 默认的请求地址
    TEACHER_URL = DEFAULT_URL, // 教师地址
    STUDENT_URL = BASE_URL + 'student.json', // 学生地址
    PARENT_URL = BASE_URL + 'parent.json' // 家长地址

  init()
  getList(DEFAULT_URL)

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
      case '行政班':
        BASE_URL = './../api/teach/' + formatObj.id + '/'
        break;
      default:
    }
    // 修改默认地址
    DEFAULT_URL = BASE_URL + 'teacher.json'
    // 修改教师地址
    TEACHER_URL = DEFAULT_URL,
      // 修改学生地址
      STUDENT_URL = BASE_URL + 'student.json',
      // 修改家长地址
      PARENT_URL = BASE_URL + 'parent.json'
  }
  /**
   * tab获取数据
   */
  $('.kindTab').on('click', function (e) {
    var target = e.target.dataset.flag
    if (!target) return
    $(e.target).addClass('kindTab__item--current').siblings().removeClass('kindTab__item--current')
    switch (target) {
      case TEACHER:
        getList(TEACHER_URL)
        break;
      case STUDENT:
        getList(STUDENT_URL)
        break;
      case PARENT:
        getList(PARENT_URL)
        break;
      default:
        break;
    }
  })

  /**
   * 请求列表数据，并渲染列表
   * @param {String} url
   */
  function getList(url) {
    $.get(url, function (res) {
      currentData = res
      renderList(res)
    }, 'json')
  }

  /**
   * 渲染列表
   * @param {Array} data
   */
  function renderList(data) {
    var obj = {
      data: data
    }
    var list = template("card", obj)
    console.log($('.kind__list')[0])
    $('.kind__list').html(list)
  }

  /**
   * 輸入框搜索
   */
  $('.search__input').on('input propertychange', debounce(
    function (e) {
      var value = $(this).val()
      var final = fuzzySearch(value)
      renderList(final)
    }, 300))
  $('.search__button').on('click', function () {
    var value = $('.search__input').val()
    var final = fuzzySearch(value)
    renderList(final)
  })

  /**
   * 函數防抖
   * @param {Function} fn
   * @param {Number} interval
   */
  function debounce(fn, interval) {
    let timeout = null;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(this, arguments)
      }, interval)
    }
  }

  /**
   * 格式化search的信息，转为对象
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
    var final = currentData.reduce(function (total, currentValue) {
      console.log(currentValue.name);
      if (currentValue.name.match(value) === null) {
        return [...total]
      }
      return [...total, currentValue]
    }, [])
    return final
  }
})
