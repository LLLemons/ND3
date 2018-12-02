$(function () {
  var ADMIN_ID = 'administrative',
    TEACH_ID = 'teachClass',
    ADMIN_URL = './../api/adminClassList.json',
    TEACH_URL = './../api/teachClassList.json',
    DETAIL_URL = './../class.html',
    ADMIN = '1', // 1代表行政班
    TEACH = '2' // 2代表教学班

  // 获取行政班
  getList(ADMIN)
  // 获取教学班
  getList(TEACH)

  /**
   * 获取列表
   * @param {String} type
   */
  function getList(type) {
    // 1代表行政班，2表示教学班
    var url = '',
      that = this
    if( type === ADMIN ) {
      url = ADMIN_URL
    } else {
      url = TEACH_URL
    }
    $.get( url, function ( res ) {
      var data = res.data
      // 从缓存中读取数据
      var dataLocal = getDataFromStorage(type)
      // 将缓存中的数据和请求中的数据中结合
      var allData = data.concat(dataLocal)
      // 渲染列表
      renderList(allData, type)
     }, 'json' )
  }

  /**
   * 从localStorage中获取数据
   * @param {String} type
   * @return {Array} 返回一个数组
   */
  function getDataFromStorage(type) {
    if(type === ADMIN) {
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
  function renderList(data,type) {
    var parent = ''
    if (type === ADMIN) {
      parent = ADMIN_ID
    } else {
      parent = TEACH_ID
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
      toDetail(id, type)
    })
  }

  /**
   * 前往详情页
   * @param {Number} id
   * @param {String} type
   */
  function toDetail(id, type) {
    window.location.href = "./class.html?id=" + id +"&type=" + type
  }
})
