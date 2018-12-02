$(function () {

  function Widget(options) {
    var baseUrl = './../api/admin/1/',
      defaultUrl = baseUrl + 'data_teacher.json' // 默认的请求地址
    var defaults = {
      TEACHER: 'teacher', // 教师的标识
      STUDENT: 'student', // 学生的标识
      PARENT: 'parent', // 家长的标识
      flag: 'teacher', // 全局标识
      baseUrl: baseUrl,
      defaultUrl: defaultUrl, // 默认的请求地址
      teacherUrl: defaultUrl, // 教师地址
      studentUrl: baseUrl + 'data_student.json', // 学生地址
      parentUrl: baseUrl + 'data_parent.json', // 家长地址
      currentData: {} // 当前对象
    }
    this.state = extend(defaults, options)

    function extend(options) {
      for (var key in options) {
        defaults[key] = options[key]
      }
      return defaults
    }
  }

  /**
   * 初始化界面
   */
  Widget.prototype.initLayout = function () {
    var that = this
    // 1.初始化数据
    this.initInfo()
    // 2.注册事件
    $('.search__input').on('input propertychange', function () {
      var value = $(this).val()
      that.debounce(that.search.bind(that, value), 500)()
    })
    $('.search__button').on('click', function () {
      var value = $('.search__input').val()
      that.search(value)
    })
  }

  /**
   * 初始化信息
   * @param {Object} search
   */
  Widget.prototype.initInfo = function (search) {
    var baseUrl = this.state.baseUrl,
      defaultUrl = this.state.defaultUrl,
      flag = this.state.flag
    if (!window.location.search) {
      return
    }
    // 格式化地址栏信息
    var formatObj = this.formatSearch(window.location.search)
    switch (decodeURI(formatObj.type)) {
      case '行政班':
        baseUrl = './../api/admin/' + (parseInt(formatObj.id) + 1) + '/'
        break;
      case '教学班':
        baseUrl = './../api/teach/' + (parseInt(formatObj.id) + 1) + '/'
        break;
      default:
    }
    // 修改默认地址
    defaultUrl = baseUrl + 'data_teacher.json'
    this.state.defaultUrl = defaultUrl
    // 修改教师地址
    this.state.teacherUrl = defaultUrl
    // 修改学生地址
    this.state.studentUrl = baseUrl + 'data_student.json'
    // 修改家长地址
    this.state.parentUrl = baseUrl + 'data_parent.json'

    // 获取列表
    this.getList(defaultUrl, flag)
  }

  /**
   * 请求列表数据，并渲染列表
   * @param {String} url 请求路径
   * @param {String} type 渲染的是教师，学生还是家长的信息
   */
  Widget.prototype.getList = function (url, type) {
    var that = this
    $.get(url, function (res) {
      console.log(res.data);
      that.state.currentData = res.data
      that.renderList(that.state.currentData, type)
    }, 'json')
  }

  /**
   * 渲染列表
   * @param {Array} data
   * @param {String} type
   */
  Widget.prototype.renderList = function (data, type) {
    var obj = {
      data: data,
      type: type
    }
    var list = template("class_content", obj)
    $('.render').html(list)
    // 注册事件
    $('.kindTab').on('click', this.tabChange.bind(this))
  }

  /**
   * 搜索事件
   * @param {String} value 输入框输入的值
   */
  Widget.prototype.search = function (value) {
    var final = this.fuzzySearch(value)
    this.renderList(final, this.state.flag)
  }

  /**
   * tab切换
   * @param {Object} e 事件对象
   */
  Widget.prototype.tabChange = function (e) {
    var target = e.target.dataset.flag,
      teacherUrl = this.state.teacherUrl,
      studentUrl = this.state.studentUrl,
      parentUrl = this.state.parentUrl,
      TEACHER = this.state.TEACHER,
      STUDENT = this.state.STUDENT,
      PARENT = this.state.PARENT
    this.state.flag = target
    var flag = this.state.flag
    if (!target) return
    switch (target) {
      case TEACHER:
        this.getList(teacherUrl, flag)
        break;
      case STUDENT:
        this.getList(studentUrl, flag)
        break;
      case PARENT:
        this.getList(parentUrl, flag)
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
  Widget.prototype.debounce = function (fn, interval) {
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
  Widget.prototype.formatSearch = function (search) {
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
  Widget.prototype.fuzzySearch = function (value) {
    var currentData = this.state.currentData
    // var data = {...currentData}
    var data = JSON.parse(JSON.stringify(currentData))
    console.log(currentData);
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

  // 实例化
  var widget = new Widget()
  widget.initLayout()
})
