import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from './../common/header/store/'
import { reducer as SideBarReducer } from './../common/sideBar/store/'
import { reducer as HomeReducer } from './../pages/Home/store/'
import { reducer as DetailReducer } from './../pages/Detail/store/'

export default combineReducers({
  header: HeaderReducer,
  sideBar: SideBarReducer,
  home: HomeReducer,
  detail: DetailReducer
})