import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Search from './components/Search'
import { actionCreators } from './store'
import {
  RenderTable, ClassTitle, ClassContent, KindTab, KindTabItem, KindList,
  KindCard,
  TagList,
  KindAvatar,
  MainTagList,
  MainTagItem,
  FunctionList,
  FunctionTag,
  NullImg
} from './style'
class Detail extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      index: 0
    }
    this.handleClickOnTab = this.handleClickOnTab.bind(this)
  }

  getCardList() {
    const list = this.props.list.toJS()
    const dataList = list.data.list
    if (!dataList.length) {
      return <li><NullImg></NullImg></li>
    }
    return dataList.map(item => (
      <KindCard className='card' key={item.id}>
        <TagList>
          <KindAvatar></KindAvatar>
          {this.getTagList(item.function)}
        </TagList>
        <div className="16px col-333 fw-bold ta-center lineheight35px">{item.name[0]}</div>
      </KindCard>))
  }

  getTagList(list) {
    if (list.length <= 1) {
      return (
        <MainTagList className="clearfix">
          {list.map( (item, index) => <MainTagItem key={index} className="font12px">{item}</MainTagItem> )}
          {list.head_teacher && <MainTagItem className="font12px bgc-fa4b5b">班主任</MainTagItem>}
          {list.manager && <MainTagItem className="font12px bgc-f96543">管理员</MainTagItem>}
        </MainTagList>
      )
    } else {
      return (
        <FunctionList className="clearfix">
          {list.head_teacher && <FunctionTag className="font12px bgc-fa4b5b fl">班主任</FunctionTag>}
          {list.manager && <FunctionTag className="font12px bgc-f96543 fl">管理员</FunctionTag>}
          {list.map( (item, index) => (<FunctionTag key={index} className="font12px fl">{item}</FunctionTag>))}
				</FunctionList>
      )
    }
  }

  getTableInfo() {
    const list = this.props.list.toJS()
    const { index } = this.state
    console.log(list)
    if (!Object.keys(list).length) {
      console.log(12121)
      return
    }
    return (
      <RenderTable>
        <ClassTitle className="class_title font20px col-333 fw-bold">{list.data.className}</ClassTitle>
        <ClassContent>
          <KindTab className='clearfix' onClick={this.handleClickOnTab}>
            <KindTabItem className={index === 0 ? 'kindTab__item--current fl' : 'fl'} data-index='0'>所有老师({list.data.teacher_count})</KindTabItem>
            <KindTabItem className={index === 1 ? 'kindTab__item--current fl' : 'fl'} data-index='1'>所有学生({list.data.student_count})</KindTabItem>
            <KindTabItem className={index === 2 ? 'kindTab__item--current fl' : 'fl'} data-index='2'>所有家长({list.data.parent_count})</KindTabItem>
          </KindTab>
          <KindList>
            {this.getCardList()}
          </KindList>
        </ClassContent>
      </RenderTable>
    )
  }

  handleClickOnTab(e) {
    const { index } = e.target.dataset
    const { id } = this.state
    if (e.target.nodeName.toLowerCase() !== 'li') {
      return 
    }
    this.setState({
      index: parseInt(index)
    })
    this.props.changeTab(id, parseInt(index))
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.setState({
      id
    })
    this.props.getList(id)
  }

  render() {
    return (
      <Fragment>
        <Search></Search>
        {/* tab表格信息 */}
        {this.getTableInfo()}
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['detail', 'currentList'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList(id) {
      dispatch(actionCreators.actionGetList(id))
    },
    changeTab(id, index) {
      dispatch(actionCreators.actionChangeTab(id, index))
    }
  }
}
export default connect(mapState, mapDispatch)(Detail)
