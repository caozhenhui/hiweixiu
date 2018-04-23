import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import buyphone from './buyphone'
import login from './login'

const store = new Vuex.Store ({
	modules: {
		buyphone,login
	}
})

export default store