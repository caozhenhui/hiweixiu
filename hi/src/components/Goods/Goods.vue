<template>
    <div class="goods page">
        <goods-head></goods-head>
        <cell
            v-for = "good in goods"
            :key = "good.id" 
            :title = "good.model"
            :label = '"￥"+ good.price'
            :img = 'good.imgUrl'
        >
            <mz-button class="btnbg" size='small'
                @click="addGoodInCar(good)"
            >加入购物车</mz-button>
        </cell>
        <router-link class="foot"
            tag="div"
            to="/buycar"
        >
            我的购物车
        </router-link>
    </div>
</template>

<script>
import GoodsHead from './GoodsHead';
import {mapActions} from 'vuex';

export default {
    name:"Goods",
    data () {
        return {
            goods:[]
        }
    },
    methods: {
        getGoods () {
           this.$http.get('/static/json/goodslist.json').then((res) => {
               this.goods = res.data;
           })
        },
        ...mapActions(['addGoodInCar'])
    },
    created () {
        this.getGoods();
    },
    components:{
       GoodsHead
    }
}
</script>

<style scoped>
    .btnbg {
        background: #ff5000;
        color: #fff;
    }
    .foot{
        width: 100%;
        height: 0.44rem;
        position: fixed;
        bottom: 0;
        color: #fff;
        background: #ff5000;
        text-align: center;
        line-height: 0.44rem;
    }
</style>
