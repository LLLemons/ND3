
import React,{ Component } from 'react'
import { CardItem , CardHot, CardTag } from '../style'
import { actionCreators } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Admin extends Component {
  getList() {
    const { list } = this.props
    return list.map(item=>{
      return (
        <CardItem className='card mgb-20 mgr-20 clearfix' key={item.get('id')}>
          <Link to={`/detail/${item.get('id')}`}>
            <CardHot className={item.get('isHot')?'sprite icon_hot':'sprite icon_hot show'}></CardHot>
            <div className='sprite icon_cover mgr-20 fl'></div>
            <dl className='lineheight24px col-333'>
              <dt className="fw-bold">{item.get('grade')}</dt>
              <dd>
                <span className="col-999">班级：</span>
                <span>{item.get('class')}</span>
              </dd>
              <dd>
                <span className="col-999">班主任：</span>
                <span className="fw-bold">{item.get('header_teacher')}</span>
              </dd>
              <dd>
                <span className="col-999">学生：</span>
                <span>{item.get('count')}人</span>
            </dd>
            </dl>
            <CardTag>行政班</CardTag>
          </Link>
        </CardItem>
      )
    })
  }

  componentWillMount() {
    this.props.getList(1)
  }

  render() {
    return (
      <div>
        <div className="col-666 lineheight53px">行政班是为学生管理和教学管理而设置的班级</div>
        <ul className='mgb-11'>
          { this.getList() }
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home','list'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList(type) {
      dispatch(actionCreators.actionGetList(type))
    }
  }
}
export default connect(mapState, mapDispatch)(Admin)