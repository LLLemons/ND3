import React, { Component,Fragment } from 'react'
import { Provider } from "react-redux"
import { BrowserRouter,Route } from 'react-router-dom';

import store from './store/'
import Header from './common/header'
import SideBar from './common/sideBar'
import Home from './pages/Home'
import Create from './pages/Create'
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
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/create' exact component={Create}></Route>
              </div>
            </BrowserRouter>
          </Main>
        </Provider>
      </Fragment>

    );
  }
}

export default App;
