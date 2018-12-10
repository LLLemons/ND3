import React, { Component,Fragment } from 'react'
import { Provider } from "react-redux"
import { Link } from 'react-router-dom'

import store from './store/'
import Header from './common/header'
import SideBar from './common/sideBar'
import Content from './common/content'
import {  ResetStyle, BaseStyle, SpriteStyle } from './globalStyle'
import {  Main } from './style'

class App extends Component {
  render() {
    const btn = (
      <div className='btns fr'>
        <div className='button mgr-20 fl'>加入班级</div>
        <Link to='/create'>
          <div className='button fl'>创建班级</div>
        </Link>
      </div>
    )
    return (
      <Fragment>
        <ResetStyle/>
        <BaseStyle/>
        <SpriteStyle/>
        <Provider store={store}>
          <Header></Header>
          <Main className='container clearfix'>
            <SideBar></SideBar>
            <Content btnGroup={btn}></Content>
          </Main>
        </Provider>
      </Fragment>

    );
  }
}

export default App;
