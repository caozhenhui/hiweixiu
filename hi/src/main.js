import Vue from 'vue';
import App from './App';
import router from './router';
//vuex
import store from './store';
import './stylesheels/main.css';
import './modules/rem';
//mint-ui
import {  Button, Tabbar  } from 'mint-ui';
Vue.component('mz-button',Button);
Vue.component('mz-tab-bar',Tabbar);

//引入自定义组件cell
import CELL from './cell';
Vue.use(CELL)

//处理axios，让组件通过this.$http来使用
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
