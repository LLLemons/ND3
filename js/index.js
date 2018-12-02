$(function () {

  function Widget(options) {
    var defaults = {
      AMIN_ID: 'administrative',
      TEACH_ID: 'teachClass',
      ADMIN_URL: './../api/adminClassList.json',
      TEACH_URL: './../api/teachClassList.json',
      DEFAULT_URL: './../class.html',
      ADMIN: 'admin',
      TEACH: 'teach'
    }
    this.state =extend(defaults, options)
    function extend(options) {
      for(var key in options) {
        defaults[key] = options[key]
      }
      return defaults
    }
  }

  /**
   * 初始化界面
   * @param {String} type admin代表行政班，teach表示教学班
   */
  Widget.prototype.initLayout = function (type) {
    this.getList(type)
  }

  /**
   * 获取列表
   * @param {String} type admin代表行政班，teach表示教学班
   */
  Widget.prototype.getList = function (type) {
    var url = ''
    var that = this
    if( type === this.state.ADMIN ) {
      url = this.state.ADMIN_URL
    } else {
      url = this.state.TEACH_URL
    }
    $.get( url, function ( res ) {
      var data = res.data
      // 从缓存中读取数据
      var dataLocal = that.getDataFromStorage(type)
      // 将缓存中的数据和请求中的数据中结合
      var allData = data.concat(dataLocal)
      // 渲染列表
      that.renderList(allData, type)
     }, 'json' )
  }

  /**
   * 从localStorage中获取数据
   * @param {String} type
   * @return {Array} 返回一个数组
   */
  Widget.prototype.getDataFromStorage = function (type) {
    if(type === this.state.ADMIN) {
      type = '行政班'
    }else {
      type = '教学班'
    }
    var dataLocal = JSON.parse(window.localStorage.getItem('formInfo'))
    // 如果localStorage里面没有数据，返回一个空数组
    if (!dataLocal) {
      return []
    }
    // 有的话对数据格式进行转换
    var newData = []
    dataLocal.forEach(function (item) {
      if(item.type === type) {
        var obj = {
          id: 2,
          grade: item.schoolSection,
          class: item.grade,
          head_teacher: '刘汇',
          count: '40',
          type: item.type,
          isHot: false
        }
        newData.push(obj)
      }
    })
    return newData
  }

  /**
   * 渲染列表
   * @param {Array} data
   * @param {String} type
   */
  Widget.prototype.renderList = function (data, type) {
    var parent = '',
     that = this
    if (type === this.state.ADMIN) {
      parent = this.state.AMIN_ID
    } else {
      parent = this.state.TEACH_ID
    }
    var obj = {
      data: data
    }
    var list = template("card",obj)
    $('#'+parent).html(list)

    // 注册事件 为item添加点击事件，前往详情页
    $('.classCard__item').on('click', function () {
      var id = $(this).data('id')
      var type = $(this).data('type')
      that.toDetail(id, type)
    })
  }

  /**
   * 前往详情页
   * @param {String} id
   * @param {String} type 行政班还是教学班
   */
  Widget.prototype.toDetail = function (id, type) {
    var DEFAULT_URL = this.state.DEFAULT_URL
    window.location.href = DEFAULT_URL+'?id=' + id +'&type=' + encodeURI(type)
  }

  // 实例化行政班
  var admin = new Widget()
  admin.initLayout('admin')

  // 实例化教学班
  var teach = new Widget()
  teach.initLayout('teach')

})
