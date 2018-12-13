import * as contants from './contants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  list: {},
  currentList: []
})

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case contants.LIST:
      return state.set('list', action.data).set('currentList', action.data)
    case contants.CHANGE_LIST:
      return state.set('currentList', action.data)
    default:
      return state
  }
}
