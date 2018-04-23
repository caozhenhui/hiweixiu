<template>
    <router-link
        :to="{name:'version',params:{'jsonurl':jsonurl}}"
        tag="div"
        class="homeFaultItem"
    >
        <img :src="phone.src"><span>{{phone.title}}</span>
    </router-link>
</template>

<script>
export default {
    name: 'HardwareItem',
    props: ['phone','jsonurl']
}
</script>

<style>
    .homeFaultItem{
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: .75rem;
        font-size: 0.13rem;
    }
    .homeFaultItem img{
        width: .3rem;
        height: .3rem;
    }
    .homeFaultItem span{
        margin-top: .075rem;
        color: #444;
    }
</style>
