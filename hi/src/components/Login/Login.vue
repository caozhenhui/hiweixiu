<template>
    <div class="login">
        <login-header></login-header>
        <div class="haha">
            <div class="wrapper" style="padding:44px 0 73px 0;">
                <div class="logo">
                    <img src="//pic.hiweixiu.com/hiweixiu-mobile/img/logo1.png?v=201804131350">
                </div>
                <form class="loginForm" @submit.prevent = "login">
                    <ul class="xinxi" style="padding:0 15px;">
                        <li>
                            <input type="tel" placeholder="请输入账号" v-model="username">
                        </li>
                        <li class="yzm">
                            <input type="tel" placeholder="请输入密码" class="userinfoYzm" v-model="password">
                        </li>
                    </ul>
                    <div class="login">
                        <button type="submit" class="chaxun">登陆</button>
                        <p>验证即登录，未注册将自动创建Hi维修账号</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginHeader from './LoginHeader'
import {Toast} from 'mint-ui'
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        LoginHeader
    },
    methods: {
        login () {
            let {username, password} = this
            
            let params = {username, password, callback: (result) => {
                if(result === 1) {
                    Toast({
                        message: '登陆成功',duration: 1000,
                    })
                    this.$router.replace({name: 'home'})
                    this.username = ''	
                    this.password = ''
                } else {
                    Toast({
                        message: '登陆失败',duration: 1000
                    })
                    this.username = ''	
                    this.password = ''
                }
            }}
            //调用actions的方法
            this.$store.dispatch('login', params)
            
        }
    }
}
</script>

<style scoped>
    .logo {
        padding: 20px 0;
        text-align: center;
        display: flex;
        justify-content:center;
    }
    .logo img {
        width: 64px;
        height: 64px;
    }
    form{
        vertical-align: middle;
    }
    .xinxi {
        position: relative;
    }
    .xinxi li {
        position: relative;
        font-size: 14px;
        padding-bottom: 10px;
    }
    .xinxi li input {
        color: #333;
        width: 100%;
        border: 0;
        height: 45px;
        font-size: 14px;
        text-indent: 15px;
        border-radius: 3px;
        -webkit-border-radius: 3px;
    }
    .haha {
        padding: 15px 15px 0;
    }
    .chaxun {
        display: block;
        margin-top: 20px;
        background-color: #ff5000;
        color: #fff;
        font-size: 16px;
        width: 100%;
        text-align: center;
        height: 43px;
        line-height: 43px;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -o-border-radius: 3px;
        -ms-border-radius: 3px;
    }
    .login p {
        font-size: 13px;
        color: #999;
        text-align: center;
        width: 290px;
        padding: 50px 0;
        background: url("http://pic.hiweixiu.com/hiweixiu-mobile/img/tishi1.png") left center no-repeat;
        background-size: 14px 14px;
        margin: 0 auto;
    }
    .wrapper{
        width: 100%;
    }
</style>
