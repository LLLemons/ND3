import React, { Component }  from "react";
import { connect } from 'react-redux'
import { actionCreators } from './store'
import userImg from './../../statics/images/avatar.png'
import { 
  HeaderWrapper,
  Logo,
  MainNav,
  MainNavItem,
  MainNavLink,
  NewFunction,
  Search,
  User,
  Avatar,
  UserName
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1
    }
    this.handleClickOnNav = this.handleClickOnNav.bind(this)
  }

  handleClickOnNav(e) {
    const { id } = e.target.dataset 
    if (!id) {
      return false
    }
    this.setState({
      index: parseInt(id)
    })
    return false
  }

  getNavItems() {
    const {
      index
    } = this.state
    const {
      mainNavList
    } = this.props
    return (
      mainNavList.map(item => (
        <MainNavItem key={item.get('id')} title={item.get('title')}>
          <MainNavLink className={index === item.get('id') && 'mainNav__link--current'} data-id={item.get('id')}>{item.get('title')}</MainNavLink>
        </MainNavItem>
      ))
    )
  }

  componentWillMount () {
    this.props.getList()
  }

  render() {
    return (
      <HeaderWrapper className='clearfix'>
        <div className='container'>
          {/* logo */}
          <Logo className='sprite icon_logo fl'></Logo>
          {/* 导航 */}
          <MainNav className='font16px fl clearfix' onClick={this.handleClickOnNav}>
            { this.getNavItems() }
          </MainNav>
          {/* 新功能 */}
          <NewFunction className='fl'>新功能</NewFunction>
          {/* 搜索 */}
          <Search className='sprite icon_search_blue fl'></Search>
          {/* 用户 */}
          <User className='clearfix fl'>
            <Avatar className='fl'>
              <img src={userImg} alt="用户头像"/>
            </Avatar>
            <UserName className='font12px col-333 fl'>232323</UserName>
          </User>
        </div>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    mainNavList: state.getIn(['header','mainNavList'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreators.actionGetList())
    }
  }
}
export default connect(mapState, mapDispatch)(Header)
