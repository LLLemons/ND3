import * as contants from './contants'
import { fromJS } from 'immutable'
import apiServices from './../../../services/api'

const actionList = (data) => {
	return {
		type:contants.LIST,
		data: fromJS(data)
	}
}

export const actionGetList = (type) => {
	return (dispatch) => {
		const url = type?'home/admin':'home/teach'
		apiServices.getPosts(url).then(res => {
			const { data } = res
			dispatch(actionList(data))
		})
	}
}