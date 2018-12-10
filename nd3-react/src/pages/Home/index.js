import React, { Component,Fragment } from "react";
import { connect } from 'react-redux'
import Admin from './components/Admin'
import Teach from './components/Teach'
class Home extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
    }
  }

  render() {
    return (
      <Fragment>
        {/* 行政班 */}
        <Admin></Admin>
        {/* 教学班 */}
        <Teach></Teach>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
  }
}
const mapDispatch = (dispatch) => {
  return {

  }
}
export default connect(mapState, mapDispatch)(Home)
