import * as contants from './contants'
import { fromJS } from 'immutable'
import apiServices from './../../../services/api'

const actionList = (data) => {
	return {
		type: contants.LIST,
		data: fromJS(data)
	}
}

export const submitForm = (data) => {
	let url = ''
	switch (data.type) {
		case 0:
			url = 'detail/teacher/' + id
			break
		case 1:
			url = 'detail/student/' + id
			break
		case 2:
			url = 'detail/parent/' + id
			break
		default:
			break
	}
	return (dispatch) => {
		apiServices.getPosts(url).then(res => {
			const { data } = res
			console.log(data)
			dispatch(actionList(data))
		})
	}
} 