import * as contants from './contants'
import { fromJS } from 'immutable'
import apiServices from './../../../services/api'

const actionList = (data) => {
	return {
		type: contants.LIST,
		data: fromJS(data)
	}
}

export const actionGetList = (id) => {
	return (dispatch) => {
		const url = 'detail/' + id
		apiServices.getPosts(url).then(res => {
			const { data } = res
			dispatch(actionList(data))
		})
	}
}

export const changeList = (data) => {
	return {
		type: contants.CHANGE_LIST,
		data: fromJS(data)
	}
}

export const actionChangeTab = (id, index) => {
	let url = ''
	switch (index) {
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