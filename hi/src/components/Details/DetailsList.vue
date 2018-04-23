<template>
    <div class="details-list">
        <div class="list-top">
            <span>故障表现：</span>
            <span>屏幕碎裂、屏幕不亮、触控失灵等</span>
        </div>
        <div class="nav">
            <i class="fa fa-check-square"></i>&nbsp;<span>免费上门</span>&nbsp;&nbsp;
            <i class="fa fa-check-square"></i>&nbsp;<span>20分钟快修</span>&nbsp;&nbsp;
            <i class="fa fa-check-square"></i>&nbsp;<span>修完后付款</span>
        </div>
        <div class="phoneName">
            <b>维修机型</b>&nbsp;&nbsp;
            <span>{{ message }}</span>
            <router-link class="amend"
                tag="div"
                :to="{name:'version',params:{'jsonurl':'/static/json/Hardware.json'}}"
            >
                <span>修改</span><i class="fa fa-angle-right angle" ></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailsList',
    props:['message']
}
</script>

<style scoped>
    .list-top{
        width: 100%;
        height: 0.44rem;
        background: #cccccc;
        padding: 0.12rem;
        color: #fff;
        background: #666;
    }
    .nav{
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        font-size: 0.12rem;
        color:#333;
        background: #fff;
    }
    .phoneName{
        width: 100%;
        height: 0.55rem;
        line-height: 0.55rem;
        padding: 0 15px;
        background: #fff;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        position: relative;
    }
    .phoneName b{
        font-weight: bold;
    }
    .amend{
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        right: 15px;
        color: #1b9efc;
    }
    .angle {
        font-size: 16px;
        text-indent: 4px;
    }
</style>
