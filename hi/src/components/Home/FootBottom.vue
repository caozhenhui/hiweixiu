<template>
    <footer>
        <ul>
            <li 
                v-for="nav in navs"
                :key="nav.id"
            >
                <a href="">{{ nav.title }}</a>
            </li>
        </ul>
        <p>Hi维修 沪ICP备 15045815号-1</p>
        <div class="bottom-img">
            <img src="https://static.anquan.org/static/outer/image/hy_83x30.png" alt="">
        </div>
    </footer>
</template>

<script>
export default {
    name:'FootBottom',
    data () {
        return {
            navs:[
                {id:1, title:'关于我们'},
                {id:2, title:'服务流程'},
                {id:3, title:'用户协议'},
                {id:4, title:'APP下载'}
            ]
        }
    }
}
</script>

<style scoped>
    footer {
        width: 100%;
        height: 0.710rem;
        padding-bottom: 0.10rem;
    }
    footer ul li{
        width: 25%;
        height: 0.35rem;
        float: left;
        color: #999;
        text-align: center;
        line-height: 0.35rem;
    }
    footer p{
        clear: both;
        font-size: 11px;
        color: #ccc;
        height: 26px;
        line-height: 26px;
        text-align: center;
    }
    .bottom-img {
        width: 100%;
        height: 0.3rem;;
    }
    .bottom-img img{
        display: block;
        width: 0.83rem;
        height: 0.3rem;
        margin: 0 auto;
    }
</style>

