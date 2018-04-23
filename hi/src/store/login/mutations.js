
import {
	CHANGE_USER_INFO,
	EXIT
} from './const'
import {Toast} from 'mint-ui'

export default {
	
	[CHANGE_USER_INFO] (state, userInfo) {
		state.userInfo = userInfo
		
		localStorage.userInfo = JSON.stringify(userInfo)
	},
	[EXIT] (state) {
		state.userInfo = {
			userId: null,
			username: ''
		}
		localStorage.userInfo = JSON.stringify(state.userInfo)
		Toast({
			message: '注销成功',duration: 1000,
		})
	}
	
}
