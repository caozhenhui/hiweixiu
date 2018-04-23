import {
	CHANGE_USER_INFO
} from './const'

export default {
	
	
	login ({commit}, {username, password, callback}) {
		
		setTimeout(() => {
			if (username === '1726' && password === '123') {
				//登陆成功
				let userInfo = {userId: 666, username: '孙红雷'}
				
				
				commit(CHANGE_USER_INFO,userInfo)
				callback(1);
				return false;
			}
			callback(0)
		},1000)
		
	}
	
}
