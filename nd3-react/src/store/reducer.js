import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from './../common/header/store/'
import { reducer as sideBarReducer } from './../common/sideBar/store/'
import { reducer as HomeReducer } from './../pages/Home/store/'
import { reducer as DetailReducer } from './../pages/Home/store/'

export default combineReducers({
  header: headerReducer,
  sideBar: sideBarReducer,
  home: HomeReducer,
  detail: DetailReducer
})