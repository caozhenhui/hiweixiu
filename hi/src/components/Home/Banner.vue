<template>
    <div class="swiper-container banner">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img :src="banner.src" width="100%" alt="">
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
export default {
    name: 'Banner',
    data () {
        return {
            banners:[
                {id:1,src:'//pic.hiweixiu.com/images/uploadImg/banner/201802/20180206131121_593.jpg?v=201804131350'},
                {id:2,src:'//pic.hiweixiu.com/images/uploadImg/banner/201802/20180206131140_524.jpg?v=201804131350'}
            ]
        }
    },
    mounted () {
        new Swiper('.banner', {
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: true
        })
    }
}
</script>

<style scoped>
    .banner{
        width: 100%;
        overflow: hidden;
    }
</style>