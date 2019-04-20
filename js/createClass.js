$(function () {

  function FormWidget(options) {
    var defaults = {
      formData: {
        school: '福建师范大学',
        schoolSection: '',
        grade: '',
        className: '',
        type: '行政班',
        permission: '允许退出'
      }
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
   * 注册事件
   */
  FormWidget.prototype.registered = function () {
    var FormObj = this
    // 1.下拉框选择年级和学段
    $('.select__hd').on('click', function () {
      var selectObj = this
      FormObj.selectChange.call(FormObj,selectObj)
     })
    // 2.检查输入的班级名是否合法
    $('#className').on('blur', function () {
      var inputObj = this
      FormObj.checkName(inputObj)
    })
    // 3.获取单选框选中的值
    $('input[type=radio][name=radio__type]').on('change', function () {
      var radioObj = this
      FormObj.ridoChange(radioObj)
    })
    // 4.提交表单
    $('.button-submit').on('click',this.submitForm.bind(this))
  }

  /**
   * 下拉框改变事件
   * @param {Object} selectObj 当前下拉框对象
   */
  FormWidget.prototype.selectChange = function (selectObj) {
    console.log(selectObj);
    var type = $(selectObj).data('name')
    this.getSelect($(selectObj),type)
  }

  /**
   * 模拟select
   * @param {Objcet} $ele 当前下拉对象的jq对象
   * @param {String} type 当前是哪个下拉框施 grade 还是 schoolSection
   */
  FormWidget.prototype.getSelect = function ($ele, type) {
    var that = this
    // 显示下拉列表
    $ele.parent().find('.select_list').show()
    // 改变三角形样式
    $ele.removeClass('down').addClass('up')
    $ele.parent().find('.select_list').on('click', function (e) {
      // 获取当前点击的对象的值
      var target = $(e.target).html()
      that.state.formData[type] = target
      $ele.html(target)
      // 隐藏下拉列表
      $ele.parent().find('.select_list').hide()
      // 改变三角形样式
      $ele.addClass('down').removeClass('up')
    })
    // 当鼠标移出隐藏下拉列表
    $ele.parent().find('.select_list').on('mouseleave', function () {
      $(this).hide()
      $ele.removeClass('up').addClass('down')
    })
  }

  /**
   * 检查输入的名称是否合法
   * @param {Object} inputObj 当前输入框对象
   */
  FormWidget.prototype.checkName = function (inputObj) {
    var className = $(inputObj).val()
    var bool = this.isMatches(className)
    if (bool) {
      this.state.formData.className = className
      if ($(inputObj).hasClass('error')) {
        $(inputObj).removeClass('error')
        $('.name__error').hide()
      }
      return 
    }
	  $(inputObj).addClass('error')
	  $('.name__error').show()
  }

  /**
   * radio事件
   * @param {Object} radioObj 当前radio对象
   */
  FormWidget.prototype.ridoChange = function (radioObj) {
    var value = $(radioObj).val()
    this.state.formData.type = value
  }

  /**
   * 表单提交事件
   */
  FormWidget.prototype.submitForm = function () {
    var formData = this.state.formData
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
  }

  /**
   * 正则匹配不包含_和%
   * @{String} str 要检查的字符串
   */
  FormWidget.prototype.isMatches = function (str) {
    var pattern = /^((?!_|%).)*$/
    return pattern.test(str);
  }

  // 实例化对象
  var form = new FormWidget()
  form.registered()
})
