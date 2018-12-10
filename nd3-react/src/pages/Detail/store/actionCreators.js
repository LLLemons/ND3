import * as contants from './contants'
import { fromJS } from 'immutable'
import apiServices from './../../../services/api'

const actionList = (data) => {
	return {
		type:contants.LIST,
		data: fromJS(data)
	}
}

export const actionGetList = (id) => {
	return (dispatch) => {
		const url = 'detail/'+id
		apiServices.getPosts(url).then(res => {
			const { data } = res
			dispatch(actionList(data))
		})
	}
}