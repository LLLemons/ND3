import React, { Component } from "react";
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  SideBarWrapper,
  SideBarContainer,
  SideBarTop,
  TabList,
  TabItem,
  TabLink,
  TabIcon
} from "./style";

class SideBar extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      index: 2
    }
  }

  getTabItems() {
    const {
      list
    } = this.props
    const {
      index
    } = this.state
    return (
      list.map(item => (
        <TabItem key={item.get('id')} className={index === item.get('id') && 'sideTab__item--current'}>
          <TabLink title={item.get('title')}>
            <TabIcon className={ this.changeIconName(item.get('id'))+' sprite' }></TabIcon>
            <span>{item.get('title')}</span>
          </TabLink>
        </TabItem>
      ))
    )
  }

  changeIconName(id) {
    switch (id) {
      case 0:
        return 'icon_content'
      case 1:
        return 'icon_home'
      case 2:
        return 'icon_class'
      case 3:
        return 'icon_statistics'
      default:
    }
  }

  componentWillMount() {
    this.props.getList()
  }

  render() {

    return (
      <SideBarWrapper>
        <SideBarContainer>
          {/* 个人中心 */}
          <SideBarTop className="clearfix">
            <div className='cur-p fl'>
              <span className='sprite icon_back mgr-14 fl'></span>
              <a href='javascript:;' target='_blank' title='个人中心' className='fl font20px col-999 lineheight30px'>个人中心</a>
            </div>
            <span className="fr sprite icon_menu mgr-14 mgt-7"></span>
          </SideBarTop>
          {/* 侧栏tab */}
          <TabList>
            {this.getTabItems()}
          </TabList>
        </SideBarContainer>
      </SideBarWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['sideBar', 'list'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreators.actionGetList())
    }
  }
}
export default connect(mapState, mapDispatch)(SideBar)
