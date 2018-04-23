<template>
    <div class="weixiu-box">
        <weixiu-item
            v-for="phone in phones"
            :key="phone.id"
            :phone="phone"
            :details="phone.details"
        ></weixiu-item>
    </div>
</template>

<script>
import WeixiuItem from './WeixiuItem'
export default {
    name: 'WeixiuBox',
    data () {
        return  {
            phones:[
                {
                    id: 1, src: '//pic.hiweixiu.com/hiweixiu-app/fault_ico/shoujiweixiu.png', title: '手机维修', details:'/static/json/WeixiuDetails.json'
                },
                {
                    id: 2, src: '//pic.hiweixiu.com/hiweixiu-app/fault_ico/pingbanweixiu.png', title:'平板维修', details:'/static/json/WeixiuDetails.json'
                },
                {
                    id: 3, src: '//pic.hiweixiu.com/hiweixiu-app/fault_ico/huishoufuwu.png', title: '回收服务', details:'/static/json/WeixiuDetails.json'
                },
                {
                    id: 4, src: '//pic.hiweixiu.com/hiweixiu-app/fault_ico/quanguowangdian.png', title: '全国地址', details:'/static/json/WeixiuDetails.json'
                }
            ]
        }
    },
    components: {
        WeixiuItem
    }
}
</script>

<style scoped>
    .weixiu-box{
        margin-bottom: .1rem;
        padding-top: .15rem;
        padding-bottom: .15rem;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: #fff;
    }
</style>
