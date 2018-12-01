$(function () {
  var formData = {
    school: '福建师范大学',
    schoolSection: '',
    grade: '',
    className: '',
    type: '行政班',
    permission: '允许退出'
  }
  // 选择学段 选择年级
  $('.select__hd').on('click', function () {
    var type = $(this).data('name')
    getSelect($(this),type)
  })
  // 填写班级名字
  $('#className').on('blur', function (e) {
    var className = $(this).val()
    var bool = isMatches(className)
    if (bool) {
      formData.className = className
      if ($(this).hasClass('error')) {
        $(this).removeClass('error')
        $('.name__error').hide()
      }
    }else {
      $(this).addClass('error')
      $('.name__error').show()
    }
   })
  // 获取类型单选框选中的值
  $('input[type=radio][name=radio__type]').on('change', function () {
    var value = $(this).val()
    formData.type = value
   })

  // 提交表单信息
  $('.button-submit').on('click',function () {
    if (formData.schoolSection && formData.grade && formData.className) {
      var oldClass = JSON.parse(window.localStorage.getItem('formInfo')) || []
      if (oldClass.length) {
        oldClass.push(formData)
        window.localStorage.setItem('formInfo',JSON.stringify(oldClass));
      } else {
        oldClass.push(formData)
        window.localStorage.setItem('formInfo',JSON.stringify(oldClass));
      }
      window.location.href="/index.html"
    } else {
      alert('请完成所有必填项')
    }
  })


  // 封装模拟select
  function getSelect($ele, type) {
    console.log($ele);
    $ele.parent().find('.select_list').show()
    $ele.removeClass('down').addClass('up')
    $ele.parent().find('.select_list').on('click', function (e) {
      // 获取当前点击的对象的值
      var target = $(e.target).html()
      formData[type] = target
      $ele.html(target)
      $ele.parent().find('.select_list').hide()
      $ele.addClass('down').removeClass('up')
    })
    $ele.parent().find('.select_list').on('mouseleave', function () {
      $(this).hide()
      $ele.removeClass('up').addClass('down')
     })
  }

  // 匹配正则 不含 _ 和 %
  function isMatches(str) {
    var pattern = /^((?!_|%).)*$/
    return pattern.test(str);
  }
})
