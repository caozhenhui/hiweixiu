<template>
    <div class="login-header">
        <div class="left">
            <router-link 
                to="/home"
                class="fa fa-angle-left"
            ></router-link>
            </div>
        <p class="title">登录</p>
    </div>
</template>

<script>
export default {
    name: 'LoginHeader'
}
</script>

<style scoped>
    .login-header {
        position: fixed;
        top: 0;
        z-index: 9;
        width: 100%;
        height: .44rem;
        background-color: #f9f9f9;
    }
    .wenti-head p{
        height: 100%;
       line-height: 0.44rem;
    }
   .left{
       position: absolute;
       z-index: 2;
       width: 0.38rem;
       height: 0.44rem;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 24px;
   }
   .title{
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        font-size: 18px;
        color: #ff5000;
   }
</style>
