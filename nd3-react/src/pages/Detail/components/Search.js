import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './../store'
import {
  Search as SearchWrapper, Input, SearchButton, SearchIcon
} from './../style'
import debounce from './../../../utils/debounce'
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount() {
  }

  handleChangeOnInput(e) {
    const { value } = e.target
    this.setState({
      inputValue: value
    })
    debounce((value) => {
      let list = this.props.list.toJS()
      list.data.list = list.data.list.reduce( (total, currentValue) => {
        const isFind = currentValue.name.some( ele => {
          return ele.match(value) !== null
        });
        if (isFind) {
          return [...total, currentValue]
        }
        return [...total]
      }, [])
      console.log(list)
      this.props.changeList(list)
    }, 3000)(value)
  }

  render() {
    return (
      <Fragment>
        <SearchWrapper className='clearfix mgt-30'>
          <Input value={this.state.inputValue} onChange={this.handleChangeOnInput.bind(this)} className='fl'></Input>
          <SearchButton className="fr">
            <SearchIcon className="sprite icon_search_white fl"></SearchIcon>
          </SearchButton>
        </SearchWrapper>
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
    },
    changeList(data) {
      dispatch(actionCreators.changeList(data))
    }
  }
}
export default connect(mapState, mapDispatch)(Search)
