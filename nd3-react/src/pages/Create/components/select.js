import React, { Component } from 'react'
import {
  Select as SelectWrapper,
  SelectHead,
  SelectList,
  SelectItem
} from "./../style"
class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      selectValue: ''
    }
    this.handleClickOnSelectItem = this.handleClickOnSelectItem.bind(this)
    this.handleClickOnSelectHead = this.handleClickOnSelectHead.bind(this)
  }
  getSelectList() {
    const { selectList } = this.props
    return selectList.map(item => (
      <SelectItem key={item.id} data-value={item.value} onClick={this.handleClickOnSelectItem}>{item.value}</SelectItem>
    ))
  }
  handleClickOnSelectHead() {
    this.setState({
      isShow: true
    })
  }

  handleClickOnSelectItem(e) {
    const value = e.currentTarget.dataset.value
    this.setState({
      isShow: false,
      selectValue: value
    })
    this.props.changeValue(value)
  }
  render () {
    const { isShow, selectValue,  } = this.state
    const { tipText } = this.props
    return (
      <SelectWrapper className='fl'>
        <SelectHead className='down' onClick={this.handleClickOnSelectHead}>{selectValue ? selectValue : tipText}</SelectHead>
        <SelectList className={isShow && 'show'} onMouseLeave={() => { this.setState({ isShow: false }) }}>
          {this.getSelectList()}
        </SelectList>
      </SelectWrapper>
    )
  }
}

export default Select
