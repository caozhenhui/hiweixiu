<template>
    <div class="hardware-box">
        <hardware-item
            v-for="phone in phones"
            :key="phone.id"
            :phone="phone"
            :jsonurl="phone.jsonurl"
        >

        </hardware-item>
    </div>
</template>

<script>
import HardwareItem from './HardwareItem'
export default {
    name: 'HardwareBox',
    data () {
        return {
            phones: [
                {
                    id: '1', title:'屏幕', src:'//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_pingmu@3x.png?v=201804131350', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '2', title:'按键', src:'//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_aj@3x.png?v=201804131350',  jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '3', title:'外壳/边框', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_waike@3x.png?v=201804131350',  jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '4', title:'声音', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_shengyin@3x.png?v=201804131350',  jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '5', title:'摄像与拍照', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_shexiang@3x.png?v=201804131350', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '6', title:'电池或不开机', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_dianchi@3x.png?v=201804131350', jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '7', title:'其他', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_qita@3x.png?v=201804131350',  jsonurl:'/static/json/Hardware.json'
                },
                {
                    id: '8', title:'内存升级', src: '//pic.hiweixiu.com/images/userapi/mould-fault-2-4-2/icon_shengji@3x.png?v=201804131350', jsonurl:'/static/json/Hardware.json'
                }
            ]
        }
    },
    components: {
        HardwareItem
    }
}
</script>

<style scoped>
    .hardware-box{
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        margin-bottom: 0.1rem;
        background: #fff;
        height: 1.7rem;
    }
</style>
