import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Admin from './components/Admin'
import Teach from './components/Teach'
import { Content, ContentTop, ContentTitle, SubContent } from './../../style'
class Home extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
    }
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
            <div className='button mgr-20 fl'>加入班级</div>
            <Link to='/create'>
              <div className='button fl'>创建班级</div>
            </Link>
          </div>
        </ContentTop>
        {/* 内容区 */}
        <SubContent>

          {/* 行政班 */}
          <Admin></Admin>
          {/* 教学班 */}
          <Teach></Teach>
          
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
export default connect(mapState, mapDispatch)(Home)
