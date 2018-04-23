<template>
    <div class="page">
        <div class="details-head">
            <div class="left">
                <router-link 
                    :to="{name:'version',params:{'jsonurl':'/static/json/Hardware.json'}}"
                    class="fa fa-angle-left"
                ></router-link>
                </div>
            <p class="title">故障详情</p>
        </div>
        <div class="head-img">
            <img src="/static/images/message-img.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailsHead'
}
</script>

<style scoped>
    .details-head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 44px;
        background-color: #fff;
    }
    .details-head p{
       height: 100%;
       line-height: 44px;
    }
   .left{
       position: absolute;
       z-index: 2;
       width: 0.38rem;
       height: 44px;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 24px;
   }
   .title{
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 18px;
        color: #ff5000;
   }
   .head-img {
       width: 100%;
       height: 2.70rem;
   }
   .head-img img{
       width: 100%;
       height: 100%;
   }
</style>

