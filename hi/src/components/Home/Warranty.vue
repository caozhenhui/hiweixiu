<template>
    <div>
        <div class="warranty-img">
            <img src="//pic.hiweixiu.com/hiweixiu-mobile/img/shouquan.png" alt="">
        </div>
        <div class="warranty-nav">
           hi维修实力
        </div>
        
        <warranty-server></warranty-server>
        
        <div class="telephone">
            <img src="//pic.hiweixiu.com/hiweixiu-mobile/img/kfrx.jpg?v=201804131350" alt="">
        </div>
    </div>
</template>

<script>
import WarrantyServer from './WarrantyServer'
export default {
    name:'Warranty',
    components:{
        WarrantyServer
    }
}
</script>

<style scoped>
    .warranty-img {
        width: 100%;
        height: 1.50rem;
    }
    .warranty-img img {
        width: 100%;
        height: 100%;
    }
    .warranty-nav {
        font-size: 0.14rem;
        color: #444;
        font-weight: bold;
        padding-top: 0.15rem;
        padding-bottom: 0.15rem;
        text-align: center;
        background: #fff;
    }
    .telephone {
        width: 100%;
        height: 0.8rem;
    }
     .telephone img{
         width: 100%;
         height: 100%;
     }
</style>

