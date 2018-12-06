import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from './../common/header/store/'
import { reducer as sideBarReducer } from './../common/sideBar/store/'

export default combineReducers({
  header: headerReducer,
  sideBar: sideBarReducer
})