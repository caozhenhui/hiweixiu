<template>
    <div class="goods-head">
        <div class="left">
            <router-link 
                to="/home"
                class="fa fa-angle-left"
            ></router-link>
            </div>
        <p class="title">选择购物</p>
    </div>
</template>

<script>
export default {
    name:'GoodsHead'
}
</script>

<style scoped>
   .goods-head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 0.44rem;
        background-color: #fff;
    }
    .goods-head p{
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
        line-height:0.44rem;
        text-align: center;
        font-size: 18px;
        color: #ff5000;
   }
</style>

