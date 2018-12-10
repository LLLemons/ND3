import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  Search, Input, SearchButton, SearchIcon, RenderTable, ClassTitle, ClassContent, KindTab, KindTabItem, KindList,
  KindCard,
  KindAvatar,
  MainTagList,
  MainTagItem
} from './style'
class Detail extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
    }
  }

  getTableInfo() {
    const { list } = this.props
    console.log(this.props.list)
    return <RenderTable>
      <ClassTitle className="class_title font20px col-333 fw-bold">212121</ClassTitle>
      <ClassContent>
        <KindTab className='clearfix'>
          <KindTabItem className='kindTab__item--current fl' data-flag='tearch'>所有老师({list.getIn(['data','teacher_count'])})</KindTabItem>
          <KindTabItem className='fl' data-flag='tearch'>所有学生({list.getIn(['data','student_count'])})</KindTabItem>
          <KindTabItem className='fl' data-flag='tearch'>所有家长({list.getIn(['data','parent_count'])})</KindTabItem>
        </KindTab>
        <KindList>
          <KindCard className='card'>
            <KindAvatar src='./images/bg.png' alt='头像'></KindAvatar>
            <MainTagList className='clearfix'>
              <MainTagItem className='font12px'>12121212</MainTagItem>
            </MainTagList>
          </KindCard>
        </KindList>
      </ClassContent>
    </RenderTable>
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getList(id)
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Search className='clearfix mgt-30'>
          <Input className='fl'></Input>
          <SearchButton className="fr">
            <SearchIcon className="sprite icon_search_white fl"></SearchIcon>
          </SearchButton>
        </Search>
        {/* tab表格信息 */}
        {this.getTableInfo()}
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['detail', 'list'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList(id) {
      dispatch(actionCreators.actionGetList(id))
    }
  }
}
export default connect(mapState, mapDispatch)(Detail)
