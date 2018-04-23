<template>
    <div class="warranty-server">
        <router-link
            tag="div"
            class="item"
            v-for = "nav in navs"
            :key = "nav.id"
            :to="{name:nav.src}"
        >
            <img :src = "nav.imgUrl">
            <p>{{ nav.title }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'WarrantyServer',
    data () {
        return {
            navs:[
                {id:1, imgUrl:'//pic.hiweixiu.com/hiweixiu-mobile/img/wxzl.png', title:'Hi维修保障',src:''},
                {id:2, imgUrl:'//pic.hiweixiu.com/hiweixiu-mobile/img/jsyz.png', title:'极速优质服务',src:''},
                {id:3, imgUrl:'////pic.hiweixiu.com/hiweixiu-mobile/img/jgtm.png', title:'Hi优购',src:'goods'}
            ]
        }
    }
}
</script>

<style scoped>
    .warranty-server {
        width: 100%;
        height: 0.82rem;
        padding-bottom: 0.20rem;
        background: #fff;
        display: flex;
    }
     .warranty-server .item{
        flex: 1;  
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: center;
        border-right: 1px solid #efeff4;
     }
     .warranty-server .item:nth-last-child(1){
         border-right: none;
     }
     .warranty-server .item img{
        width: 0.3rem;
        height: 0.35rem;
     }
</style>
