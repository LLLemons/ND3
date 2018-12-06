import * as contants from './contants'
import { fromJS } from 'immutable'
import axios from 'axios'

const actionList = (data) => {
	return {
		type:contants.MainNavList,
		data: fromJS(data)
	}
}

export const actionGetList = () => {
	return (dispatch) => {
		axios.get('/api/mainNavList.json')
			.then( res => {
				const { data } = res.data
				dispatch(actionList(data))
			} )
			.catch()
	}
}