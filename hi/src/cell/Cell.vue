<template>
    <div class="cell">
        <div class="img">
            <img :src="img" alt="">
        </div>
       <div class="left">
           <h4>{{ title }}</h4>
           <p>{{ label }}</p>
       </div>
       <div class="right">
           <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
    name:'Cell',
    props:{
        title:String,
        label:String,
        img:String
    }
}
</script>
<style scoped>
    .cell {
        background: #fff;
        margin: 0.05rem 0;
        padding: 0.05rem 0.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .img{
        width: 10%;
        height: 100%;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .left{
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    h4 {
        color: #333;
        font-weight: bold;
    }
    p {
        font-size: 12px;
        color: #888;
    }
    .right{
        display: flex;
        flex-direction:row-reverse;
        justify-content: space-around;
    }
</style>
