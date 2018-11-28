$(function () {
  var ADMIN_ID = 'administrative',
    TEACH_ID = 'teachClass',
    ADMIN_URL = './../api/adminClassList.json',
    TEACH_URL = './../api/teachClassList.json',
    DETAIL_URL = './../class.html',
    ADMIN = '1',
    TEACH = '2'

  // 获取行政班
  getList(ADMIN)
  // 获取教学班
  getList(TEACH)

  // 前往详情页
  $('.classCard__list').on('click',function (e) {
    console.log(e);
    // window.location.href = DETAIL_URL + '?id'
   })

  /**
  * 获取列表
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
      var list = getListTemplate(allData)
      renderList(list, type)
     }, 'json' )
  }
  /**
   * 从localStorage中获取数据
   */
  function getDataFromStorage(type) {
    if(type === ADMIN) {
      type = '行政班'
    }else {
      type = '教学班'
    }
    var dataLocal = JSON.parse(window.localStorage.getItem('formInfo'))
    if (!dataLocal) {
      return []
    }
    // 有的话对数据格式进行转换
    var newData = []
    dataLocal.forEach(function (item) {
      if(item.type === type) {
        var obj = {
          id: 3,
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
   */
  function renderList(list,type) {
    var parent = ''
    if (type === ADMIN) {
      parent = ADMIN_ID
    } else {
      parent = TEACH_ID
    }
    $('#'+parent).html(list)
  }
  /**
   * 获取列表模板
   */
  function getListTemplate(data) {
    var list = data.map(function (item) {
      var template =
        `<li class="classCard__item card mgb-20 mgr-20 clearfix" data-id="${item.id}">
          <div class="sprite icon_hot card__hot ${item.isHot?'show':''}"></div>
          <div class="classCover sprite icon_cover mgr-20 fl"></div>
          <dl class="classInfo lineheight24px col-333">
            <dt class="fw-bold">${item.grade}</dt>
            <dd class="classInfo__item">
              <span class="col-999">班级：</span>
              <span>${item.class}</span>
            </dd>
            <dd class="classInfo__item">
              <span class="col-999">班主任：</span>
              <span class="fw-bold">${item.head_teacher}</span>
            </dd>
            <dd class="classInfo__item">
              <span class="col-999">学生：</span>
              <span>${item.count}人</span>
            </dd>
          </dl>
          <!-- 标签 -->
          <span class="classCard__tag">${item.type}</span>
        </li>`
      return template
    })
    return list
  }
})
