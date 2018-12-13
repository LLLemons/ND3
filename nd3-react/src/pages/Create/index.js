import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import Select from './components/select'
import apiServices from './../../services/api'
import {
  FormWrapper,
  Title,
  Form,
  FormItem,
  Label,
  Input,
  Require,
  ErrorSpan,
  RadioList,
  RadioItem,
  Radio,
  RadioLabel
} from "./style";

class Create extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      formData: {
        school: '福建师范大学',
        schoolSection: '',
        grade: '',
        className: '',
        type: 0,
        permission: 0
      },
      isError: false,
      isShow: false,
      schoolSectionList: [
        {
          id: 0,
          value: '小学'
        },
        {
          id: 1,
          value: '初中'
        },
        {
          id: 2,
          value: '高中'
        },
        {
          id: 3,
          value: '大学'
        }
      ],
      gradeSelect: [
        {
          id: 0,
          value: '一年级'
        },
        {
          id: 1,
          value: '二年级'
        },
        {
          id: 2,
          value: '三年级'
        }
      ],
      schoolSectiontTip: '请选择学段',
      gradeTip: '请选择年级'
    }
    this.handleBlurOnInputSchool = this.handleBlurOnInputSchool.bind(this)
    this.handleBlurOnInputClass = this.handleBlurOnInputClass.bind(this)
    this.schoolSectionSelect = this.schoolSectionSelect.bind(this)
    this.gradeSelect = this.gradeSelect.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange  (e) {
    const type = e.currentTarget.name
    let value = e.currentTarget.value
    this.setState({
      [type]: parseInt(value)
    })
  }

  handleBlurOnInputSchool(e) {
    const type = e.currentTarget.name
    const value = e.currentTarget.value
    const { formData } = this.state
    formData[type] = value
    this.setState({
      formData
    })
  }

  handleBlurOnInputClass(e) {
    const type = e.currentTarget.name
    const value = e.currentTarget.value
    const { formData } = this.state
    formData[type] = value
    this.setState({
      formData
    })
    var bool = this.isMatches(value)
    bool ? this.setState({ isError: false }) : this.setState({ isError: true })
  }

  // 匹配正则 不含 _ 和 %
  isMatches(str) {
    var pattern = /^((?!_|%).)*$/
    return pattern.test(str);
  }

  schoolSectionSelect(value) {
    const { formData } = this.state
    formData.schoolSection = value
    this.setState({
      formData
    })
  }

  gradeSelect(value) {
    const { formData } = this.state
    formData.grade = value
    this.setState({
      formData
    })
  }

  /**
   * 提交表单
   */
  submitForm() {
    const { formData } = this.state
    if (!formData.schoolSection || !formData.grade || !formData.className) {
      alert('请完成所有必填项')
      return
    }
    let url = ''
    switch (formData.type) {
      case 0:
        url = 'home/admin'
        break
      case 1:
        url = 'home/teach'
        break
      default:
        break
    }
    apiServices.postPosts(url,{
      id: 10,
      grade: formData.schoolSection+'2015级',
      class: formData.grade,
      header_teacher: '刘汇',
      count: 300,
      isHot: false
    }).then(res => {
      console.log(res);
    })
  }

  render() {
    const { schoolSectionList, schoolSectiontTip, gradeSelect, gradeTip } = this.state
    return (
      <Fragment>
        <FormWrapper>
          <Title>
            尊敬的<span className="col-3ba8f0">老师（刘老师）</span>,请填写班级信息
            </Title>
          <Form>
            {/* 学校的名字 */}
            <FormItem className='clearfix'>
              <Label className='fl' htmlFor='school'>学校</Label>
              <Input maxLength='80' id='school' name='school' type='text' placeholder='福建师范大学' onBlur={this.handleBlurOnInputSchool}></Input>
            </FormItem>
            {/* 学段 */}
            <FormItem className='clearfix'>
              <Label className='fl'>
                <Require>*</Require>学段
              </Label>
              <Select selectList={schoolSectionList} tipText={schoolSectiontTip} changeValue={this.schoolSectionSelect}></Select>
            </FormItem>
            {/* 年级 */}
            <FormItem className='clearfix'>
              <Label className='fl'>
                <Require>*</Require>年级
              </Label>
              <Select selectList={gradeSelect} tipText={gradeTip} changeValue={this.gradeSelect}></Select>
            </FormItem>
            {/* 班级名 */}
            <FormItem className='clearfix'>
              <Label className='fl'>
                <Require>*</Require>班级名
              </Label>
              <Input className='fl' maxLength='20' name='className' id='className' type='text' placeholder='请输入班级名称，限20个字符，不支持输入_和%' onBlur={this.handleBlurOnInputClass}></Input>
              <ErrorSpan className={this.state.isError ? 'fl show' : 'fl'}>不支持输入_和%</ErrorSpan>
            </FormItem>
            {/* 类型 */}
            <FormItem className='clearfix'>
              <Label className='fl'>类型</Label>
              <RadioList className='fl clearfix'>
                <RadioItem className='fl'>
                  <Radio id="radio__admin" value="0" type="radio" name="radio__type" checked onChange={this.handleChange.bind(this)}></Radio>
                  <RadioLabel htmlFor="radio__admin">行政班</RadioLabel>
                </RadioItem>
                <RadioItem className='fl'>
                  <Radio id="radio__teach" value="1" type="radio" name="radio__type" onChange={this.handleChange.bind(this)}></Radio>
                  <RadioLabel htmlFor="radio__teach">教学班</RadioLabel>
                </RadioItem>
              </RadioList>
            </FormItem>
            {/* 权限设置 */}
            <FormItem className='clearfix'>
              <Label className='fl'>退出权限设置</Label>
              <RadioList className='fl clearfix'>
                <RadioItem className='fl'>
                  <Radio id="radio__allow" value="0" checked type="radio" name="radio__permission" onChange={this.handleChange.bind(this)}></Radio>
                  <RadioLabel className='checked' htmlFor="radio__allow">允许退出</RadioLabel>
                </RadioItem>
                <RadioItem className='fl'>
                  <Radio id="radio__review" value="1" type="radio" name="radio__permission" onChange={this.handleChange.bind(this)}></Radio>
                  <RadioLabel htmlFor="radio__review">通过班级管理员审核后退出</RadioLabel>
                </RadioItem>
                <RadioItem className='fl'>
                  <Radio id="radio__forbidden" value="2" type="radio" name="radio__permission" onChange={this.handleChange.bind(this)}></Radio>
                  <RadioLabel htmlFor="radio__forbidden">禁止退出</RadioLabel>
                </RadioItem>
              </RadioList>
            </FormItem>
            {/* 提交 */}
            <FormItem>
              <Label className='fl'>&nbsp;</Label>
              <div className="button button-submit fl" onClick={this.submitForm}>提交</div>
            </FormItem>
          </Form>
        </FormWrapper>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
  }
}
const mapDispatch = (dispatch) => {
  return {
  }
}
export default connect(mapState, mapDispatch)(Create)
