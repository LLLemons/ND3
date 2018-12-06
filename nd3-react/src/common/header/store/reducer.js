import * as contants from './contants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  mainNavList: []
})

export default (state=defaultState,action) => {
  switch (action.type) {
    case contants.MainNavList:{
      return state.set('mainNavList',action.data)
    }
    default:
      return state
  }
}
