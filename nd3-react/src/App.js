import React, { Component,Fragment } from 'react'
import { Provider } from "react-redux"
import store from './store/'
import Header from './common/header'
import SideBar from './common/sideBar'
import {  ResetStyle, BaseStyle, SpriteStyle } from './globalStyle'
import {  Main } from './style'

class App extends Component {
  render() {
    return (
      <Fragment>
        <ResetStyle/>
        <BaseStyle/>
        <SpriteStyle/>
        <Provider store={store}>
          <Header></Header>
          <Main className='container clearfix'>
            <SideBar></SideBar>
          </Main>
        </Provider>
      </Fragment>

    );
  }
}

export default App;
