<template>
    <div class="wenti page">
        <wenti-head></wenti-head>
        <wenti-list
            v-for="list in lists"
            :key="list.id"
            :details="list"
        ></wenti-list>
    </div>
</template>

<script>
import WentiHead from './WentiHead';
import WentiList from './WentiList';

export default {
    name: 'Wenti',
    props:['details'],
    data () {
        return {
            lists:[]
        }
    },
    created () {
        //获取数据页面相关数据
        this.$http.get(this.details).then((res) => {
            this.lists = res.data;
        })
    },
    components:{
        WentiHead, WentiList
    }
}
</script >

<style scoped>

</style>
