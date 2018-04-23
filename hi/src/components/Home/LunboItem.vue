<template>
    <div ref="container" class="swiper-container lunbo-item">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper hotScroll">
            <!-- Slides -->
            <div class="swiper-slide"
                v-for="nav in navs"
                :key="nav.id"
            >
                <router-link
                    :to='{name:"details", params:{"message":nav.title}}'
                    tag="div"
                    class="hotScrollItem"
                >
                    <span class="mould">{{nav.title}}</span>
                    <span class="fault">{{nav.content}}</span>
                    <div class="lineDiv"><span></span>
                    </div><span class="money">{{nav.price}}</span>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
export default {
    name: 'LunboItem',
    props: ['nav'],
    data () {
        return {
            navs: [
                {
                    id: 1, title: 'iphone6', content:'外屏碎（显示正常）', price: '￥159', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 2, title: 'iphone6Puls', content:'外屏碎（显示正常）', price: '￥159', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 3, title: 'iphone6S', content:'外屏碎（显示正常）', price: '￥159', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 4, title: 'iphone6SPlus', content:'外屏碎（显示正常）', price: '￥179', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 5, title: 'iphone7', content:'外屏碎（显示正常）', price: '￥249', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 6, title: 'iphone7Plus', content:'外屏碎（显示正常）', price: '￥269', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 7, title: '华为 P9', content:'屏幕碎', price: '￥320', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: 8, title: '魅族PRO 6', content:'屏幕碎', price: '￥580', jsonurl:'/static/json/Hardware.json'
                },
            ]
        }
    },
    mounted () {
        new Swiper(this.$refs.container, {
            slidesPerView: 2.6,
            spaceBetween: 30,
            freeMode: true
        })
    }
}
</script>

<style scoped>
    .lunbo-item{
        padding-right: 0.075rem;
        padding-left: 0.075rem;
        padding-bottom: 0.075rem;
        box-sizing: border-box;
    }
    .hotScroll{
        display: -webkit-flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: nowrap;
        box-sizing: border-box;
        /* overflow-x: scroll; */
    }
    .hotScrollItem{
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 1.4rem;
        min-width: 120px;
        margin: 0.05rem;
        padding-top: 0.15rem;
        padding-bottom: 0.1rem;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 #e3e3e3;
    }
    .mould {
        font-size: 0.14rem;
        color: #444;
        font-weight: bold;
    }
    .fault {
        font-size: 0.09rem;
        padding-top: 0.05rem;
        padding-bottom: 0.05rem;
        color: #444;
    }
    .lineDiv{
        width: 100%;
        height: 0.125rem;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .lineDiv span {
        display: inline-block;
        height: 1px;
        width: 50%;
        background: #f5f5f5;
    }
    .money {
        font-size: 0.13rem;
        color: #ff5000;
    }
    .swiper-container {
        width: 3.6rem;
    }
</style>
