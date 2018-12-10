import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './../../pages/Home'
import Create from './../../pages/Create'
import Detail from './../../pages/Detail'
import HomeBtns from './components/HomeBtns'
import CreateBtns from './components/CreateBtns'
import DetailBtns from './components/DetailBtns'
import { Content as ConetntWrapper, ContentTop, ContentTitle, SubContent } from './../../style'
const Content = (props) => {
  return (
    <BrowserRouter>
      <ConetntWrapper className='font14px'>
        {/* 顶部 */}
        <ContentTop className='clearfix'>
          <ContentTitle className='fl'>我的班级</ContentTitle>
          <Route path='/' exact component={HomeBtns}></Route>
          <Route path='/create' exact component={CreateBtns}></Route>
          <Route path='/detail/:id' exact component={DetailBtns}></Route>
        </ContentTop>
        {/* 内容区 */}
        <SubContent>
          <Route path='/' exact component={Home}></Route>
          <Route path='/create' exact component={Create}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </SubContent>
      </ConetntWrapper>
    </BrowserRouter>)
}

export default Content