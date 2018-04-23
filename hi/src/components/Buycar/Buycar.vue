<template>
    <div class="goods page">
        <buycar-head></buycar-head>
        <div class="has-shoping" v-if='phones.length !== 0'>
            <cell
                v-for = "good in phones"
                :key = "good.id" 
                :title = "good.model"
                :label = '"￥"+ good.price + "  *  "+good.num '
                :img = 'good.imgUrl'
            >
                <mz-button class="btn" 
                    @click="addGoodInCar(good)"
                >+</mz-button>
                <mz-button class="btn" 
                    @click="removeIncar(good)"
                >-</mz-button>
            </cell>
        </div>
        <div class="no-shoping" v-if='phones.length == 0'>
            <div class="buy-img">
                <img src="/static/images/buycar.png" alt="">
            </div>
            <p>
                您的购物车还是空的，点击
                <a href="#/goods" class="backgoods">返回商城</a>
                去购购物吧
            </p>
        </div>
         <total></total>
    </div>
</template>

<script>
import BuycarHead from './BuycarHead';
import {mapState,mapActions} from 'vuex';

export default {
    name:"Buycar",
    components:{
       BuycarHead
    },
    computed:{
        ...mapState({
            phones:(state) => {
                return state.buyphone.phones
            }
        })
    },
    methods:{
        ...mapActions(['addGoodInCar']),
        ...mapActions(['removeIncar'])
    }
}
</script>

<style scoped>
    .btn {
        background: #ff5000;
        color: #fff;
        width: 0.25rem;
        height: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
    }
    .buy-img {
        width: 202px;
        height: 188px;
        margin: 20px auto;
    }
    .no-shoping p{
        width: 100%;
        text-align: center;
    }
    .backgoods{
        color: #ff5000;
    }
</style>
