import * as contants from './contants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  list: []
})

export default (state=defaultState,action) => {
  switch (action.type) {
    case contants.LIST:{
      return state.set('list',action.data)
    }
    default:
      return state
  }
}
