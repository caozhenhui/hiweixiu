<template>
    <div class="header">
        <nav class="indextop">
            <span  class="dingwei">北京</span>
            <span v-show="userInfo.username?true:false" class="welcome">{{userInfo.username}}</span>
            <router-link
                :to="{name: 'login'}"
            >
                <span v-if="userInfo.username?false:true" class="dengluword">登录</span>
                <span @click="EXIT" v-if="userInfo.username?true:false" class="dengluword">注销</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
import {EXIT} from '../../store/login/const'
import { mapState, mapMutations  } from 'vuex'
export default {
  name: "Header",
  computed: mapState({
  	userInfo: state => state.login.userInfo
  }),
  methods: {
			...mapMutations([EXIT])
		}
}
</script>
<style scoped>
.indextop {
    height: 44px;
    background: url("http://pic.hiweixiu.com/hiweixiu-mobile/img/logo.png") center center no-repeat #fff;
    background-size: 69px 21px;
}
.dingwei {
    float: left;
    height: 44px;
    line-height: 44px;
    color: #666;
    font-size: 15px;
    width: 80px;
    background: url("http://pic.hiweixiu.com/hiweixiu-mobile/img/add.png") 11px center no-repeat;
    background-size: 16px 16px;
    text-indent: 30px;
}
.dengluword {
    float: right;
    line-height: 44px;
    width: 49px;
    color: #888;
    font-size: 15px;
}   
.welcome{
    float: left;
    height: 44px;
    line-height: 44px;
    
}
</style>
