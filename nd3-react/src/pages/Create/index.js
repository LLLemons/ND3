import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Content, ContentTop, ContentTitle, SubContent } from './../../style'
import {
  FormWrapper,
  Title,
  Form,
  FormItem,
  Label,
  Input,
  Require,
  Select,
  SelectHead,
  SelectList,
  SelectItem,
  ErrorSpan,
  RadioList,
  RadioItem,
  Radio,
  RadioLabel
} from "./style";
import { from } from "rxjs";

class Create extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      school: '福建师范大学',
      schoolSection: '',
      grade: '',
      className: '',
      type: '',
      permission: '允许退出',
      isError: false,
      isShow: false
    }
  }

  handleChange(e) {
    const type = e.currentTarget.name
    let value = e.currentTarget.value
    this.setState({
      [type]: parseInt(value)
    })
  }

  handleBlurOnInputSchool(e) {
    const type = e.currentTarget.name
    const value = e.currentTarget.value
    this.setState({
      [type]: value
    })
    var bool = this.isMatches(value)
    console.log(bool)
    bool ? this.setState({ isError: false }) : this.setState({ isError: true })
  }

  handleBlurOnInputClass(e) {
    const type = e.currentTarget.name
    const value = e.currentTarget.value
    this.setState({
      [type]: value
    })
    var bool = this.isMatches(value)
    console.log(bool)
    bool ? this.setState({ isError: false }) : this.setState({ isError: true })
  }

  handleClickOnSelectHead() {
    this.setState({
      isShow: true
    })
  }

  handleClickOnSelectList(e) {
    const value = e.target.dataset.value
    console.log(e.target)
    console.log(value)
    this.setState({
      isShow: false,
      schoolSection: value
    })
  }

  // 匹配正则 不含 _ 和 %
  isMatches(str) {
    var pattern = /^((?!_|%).)*$/
    return pattern.test(str);
  }

  componentWillMount() {
  }

  render() {

    return (
      <Content className='font14px'>
        {/* 顶部 */}
        <ContentTop className='clearfix'>
          <ContentTitle className='fl'>我的班级</ContentTitle>
          <div className='btns fr'>
            <Link to='/'>
              <div className='button fl'>返回上一级</div>
            </Link>
          </div>
        </ContentTop>
        {/* 内容区 */}
        <SubContent>
          <FormWrapper>
            <Title>
              尊敬的<span className="col-3ba8f0">老师（刘老师）</span>,请填写班级信息
            </Title>
            <Form>
              {/* 学校的名字 */}
              <FormItem className='clearfix'>
                <Label className='fl' htmlFor='school'>学校</Label>
                <Input maxLength='80' id='school' name='school' type='text' placeholder='福建师范大学' onBlur={ this.handleBlurOnInputSchool.bind(this) }></Input>
              </FormItem>
              {/* 学段 */}
              <FormItem className='clearfix'>
                <Label className='fl'>
                  <Require>*</Require>学段
                </Label>
                <Select className='fl'>
                  <SelectHead className='down' onClick={this.handleClickOnSelectHead.bind(this)}>{this.state.schoolSection?this.state.schoolSection:'请选择学段'}</SelectHead>
                  <SelectList className={this.state.isShow && 'show'} onMouseLeave={()=>{this.setState({ isShow: false })}} onClick={this.handleClickOnSelectList.bind(this)}>
                    <SelectItem data-value='小学'>小学</SelectItem>
                  </SelectList>
                </Select>
              </FormItem>
              {/* 年级 */}
              <FormItem className='clearfix'>
                <Label className='fl'>
                  <Require>*</Require>年级
                </Label>
                <Select className='fl'>
                  <SelectHead className='down'>请选择年级</SelectHead>
                  <SelectList>
                    <SelectItem>小学</SelectItem>
                  </SelectList>
                </Select>
              </FormItem>
              {/* 班级名 */}
              <FormItem className='clearfix'>
                <Label className='fl'>
                  <Require>*</Require>班级名
                </Label>
                <Input className='fl' maxLength='20' id='className' type='text' placeholder='请输入班级名称，限20个字符，不支持输入_和%' onBlur={this.handleBlurOnInputClass.bind(this) }></Input>
                <ErrorSpan className={ this.state.isError?'fl show':'fl' }>不支持输入_和%</ErrorSpan>
              </FormItem>
              {/* 类型 */}
              <FormItem className='clearfix'>
                <Label className='fl'>类型</Label>
                <RadioList className='fl clearfix'>
                  <RadioItem className='fl'>
                    <Radio id="radio__admin" value="1" type="radio" name="radio__type"  onChange={this.handleChange.bind(this)}></Radio>
                    <RadioLabel  htmlFor="radio__admin">行政班</RadioLabel>
                  </RadioItem>
                  <RadioItem className='fl'>
                    <Radio id="radio__teach" value="0" type="radio" name="radio__type"  onChange={this.handleChange.bind(this)}></Radio>
                    <RadioLabel  htmlFor="radio__teach">教学班</RadioLabel>
                  </RadioItem>
                </RadioList>
              </FormItem>
              {/* 权限设置 */}
              <FormItem className='clearfix'>
                <Label className='fl'>退出权限设置</Label>
                <RadioList className='fl clearfix'>
                  <RadioItem className='fl'>
                    <Radio id="radio__allow" value="允许退出"  type="radio" name="radio__permission"  onChange={this.handleChange.bind(this)}></Radio>
                    <RadioLabel className='checked'  htmlFor="radio__allow">允许退出</RadioLabel>
                  </RadioItem>
                  <RadioItem className='fl'>
                    <Radio id="radio__review" value="通过班级管理员审核后退出" checked type="radio" name="radio__permission"  onChange={this.handleChange.bind(this)}></Radio>
                    <RadioLabel  htmlFor="radio__review">通过班级管理员审核后退出</RadioLabel>
                  </RadioItem>
                  <RadioItem className='fl'>
                    <Radio id="radio__forbidden" value="禁止退出"  type="radio" name="radio__permission"  onChange={this.handleChange.bind(this)}></Radio>
                    <RadioLabel  htmlFor="radio__forbidden">禁止退出</RadioLabel>
                  </RadioItem>
                </RadioList>
              </FormItem>
              {/* 提交 */}
              <FormItem>
                <Label className='fl'>&nbsp;</Label>
                <div className="button button-submit fl">提交</div>
              </FormItem>
            </Form>
          </FormWrapper>
        </SubContent>
      </Content>
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
