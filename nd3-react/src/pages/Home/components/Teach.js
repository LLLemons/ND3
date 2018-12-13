
import React, { Component } from 'react'
import { CardItem, CardHot, CardTag } from '../style'
import { actionCreators } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Teach extends Component {
  getList() {
    const { list } = this.props
    if (!list.length) {
      return
    }
    return list.map(item => {
      return (
        <CardItem className='card mgb-20 mgr-20 clearfix' key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <CardHot className={item.isHot ? 'sprite icon_hot' : 'sprite icon_hot show'}></CardHot>
            <div className='sprite icon_cover mgr-20 fl'></div>
            <dl className='lineheight24px col-333'>
              <dt className="fw-bold">{item.grade}</dt>
              <dd>
                <span className="col-999">班级：</span>
                <span>{item.class}</span>
              </dd>
              <dd>
                <span className="col-999">班主任：</span>
                <span className="fw-bold">{item.header_teacher}</span>
              </dd>
              <dd>
                <span className="col-999">学生：</span>
                <span>{item.count}人</span>
              </dd>
            </dl>
            <CardTag>教学班</CardTag>
          </Link>
        </CardItem >
      )
    })
  }

  componentWillMount() {
    this.props.getList(2)
  }

  render() {
    return (
      <div>
        <div className="col-666 lineheight53px">教学班是为学生管理和教学管理而设置的班级</div>
        <ul className='mgb-11'>
          {this.getList()}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']).toJS()
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList(type) {
      dispatch(actionCreators.actionGetList(type))
    }
  }
}
export default connect(mapState, mapDispatch)(Teach)