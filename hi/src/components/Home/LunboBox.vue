<template>
    <div class="lunbo-box">
        <div class="hotTitle">热门维修</div>
        <lunbo-item></lunbo-item>
    </div>
</template>

<script>
import LunboItem from './LunboItem'
export default {
    name: 'LuoboBox',
    components: {
        LunboItem
    }
}
</script>

<style scoped>
    .lunbo-box{
        margin-bottom: 0.1rem;
        background: #fff;   
    }
    .hotTitle{
        height: .4rem;
        line-height: .475rem;
        font-size: 0.15rem;
        margin-left: 0.2rem;
        color: #505050;
        font-weight: bold;
    }
</style>
