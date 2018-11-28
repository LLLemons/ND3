$(function () {
  // 获取头部
  $.get('./../common/header/index.html',
    function (res) {
      $('#content').before(res)
    },
    "html"
  )
  // 获取侧栏
  $.get('./../common/siderBar/index.html',
    function (res) {
      $('#subContent').before(res)
    }
  )
 })
