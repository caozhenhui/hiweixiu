<template>
    <div class="wenti-list">
        <router-link class="list"
            tag="div"
            :to="{name:'version',params:{'jsonurl':'/static/json/Hardware.json',}}"
        >
           <div class="left">
               <img :src="details.imgUrl" alt="">
           </div>
           <div class="right">
               <p class="name">{{ details.name }}</p>
               <p class="describe">{{ details.describe }}</p>
           </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'WentiList',
    props:['details']
}
</script>
<style scoped>
    .list {
        margin: 0.1048rem;
        border: 1px solid #ffe6db;
        border-radius: 10px;
        background: #fff;
        height: 0.8059rem;
        padding-top: 0.15rem;
        padding-bottom: 0.15rem;
        padding-left: 0rem;
        padding-right: 0rem;
    }
    .left{
        float: left;
        width: 0.4716rem;
        height: 0.4716rem;
        margin-left: 0.1572rem;
    }
    .left img{
        width: 100%;
        height: 100%;
    }
    .right{
        float: left;
        margin-left: 0.15rem;
        width: 2.70509rem;
        height: 0.42234rem;
    }
    .name{
        font-size: 0.15rem;
        font-weight: bold;
        color: #333;
    }
    .describe {
        font-size: 0.12rem;
        color: #999;
        margin-top: 0.05rem;
    }
</style>

