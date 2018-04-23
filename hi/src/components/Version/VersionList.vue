<template>
    <div class="version-list">
        <div class="list-top">
            <div class="left"
                @click="rouderClass='telephone'"
            >
                <p
                    :class="[options[0].model==rouderClass?'bottom-solid':'']"
                >{{ options[0].title }}</p>
                <i></i>
            </div>
            <div class="right"
                 @click="rouderClass='ipad'"
            >
                <p
                    :class="[options[1].model==rouderClass?'bottom-solid':'']"
                >{{ options[1].title }}</p>
            </div>
        </div>
        <div class="phoneImg">
            <ul>
                <router-link
                    class="shoping" 
                    v-for="nav in navs"
                    :key="nav.id"
                    tag="li"
                    :to='{name:"details", params:{"message":nav.model}}'
                >
                    <img :src="nav.imgUrl" alt="" class="imgSize">
                    <p class="details">{{ nav.model }}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'VersionList',
    props:['type'],
    data () {
        return {
            navs:[],
            options:[
                {id:1,title:'手机',model:'telephone'},
                {id:2,title:'平板',model:'ipad'},
            ],
            rouderClass:"telephone"
        }
    },
    watch:{
        type:{
            immediate:true,
            handler () {
                let typeShow = this.rouderClass;
                this.$http.get('/static/json/'+this.type+'.json').then((res) => {
                    this.navs = res.data[typeShow]
                 })
            }
        },
        rouderClass:{
            immediate:true,
            handler () {
                let  typeShow = this.rouderClass;
                this.$http.get('/static/json/'+this.type+'.json').then((res) => {
                    this.navs = res.data[typeShow]
                })
            }
        }
    }
}
</script>

<style scoped>
    .version-list{
        position: fixed;
        right: 0;
        top: 0.44rem;
        width: 2.85rem;
        height: 100%;
        background: #fff;
        z-index: 9;
    }
    .list-top{
        width: 100%;
        height: 0.45rem;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left{
        flex: 1;
        position: relative;
        text-align: center;
    }
    .right {
        flex: 1;
        text-align: center;
    }
    .left i{
        width: 1px;
        height: 15px;
        background: #e9e9e9;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0,-50%);
    }
    .left p, .right p{
        color: #666;
        font-size: 13px;
        width: 30px;
        height: 0.45rem;
        line-height: 0.45rem;
        margin: 0 auto;
    }
    .shoping{
        border-bottom: 1px solid #e9e9e9;
        border-left: 1px solid #e9e9e9;
        width: 50%;
        height: 1.58rem;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .imgSize {
        width: 90px;
        height: 90px;
    }
    .bottom-solid{
        border-bottom: 2px solid #ff5000;
    }
    .details {
        color: #333;
        font-size: 13px;
        width: 70%;
        margin: 0 auto;
        text-align: center;
    }
</style>

