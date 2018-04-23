<template>
    <div class="version-head">
        <div class="left">
            <router-link 
                to="/home"
                class="fa fa-angle-left"
            ></router-link>
            </div>
        <p class="title">选择机型</p>

        <div class="phoneList">
            <ul>
                <li 
                    v-for='list in lists'
                    :key='list.id'
                    :class="[isClass==list.type?'style':'']"
                    @click="isClass=list.type"
                >
                    {{ list.name }}
                </li>
            </ul>
            <version-list
                :type="isClass"
                :lists="lists"
            ></version-list>
        </div>
    </div>
</template>

<script>
import VersionList from './VersionList';

export default {
    name:'VersionHead',
    props:['lists'],
    data () {
        return {
            isClass:"iphone"
        }
    },
    components:{
        VersionList
    }
}
</script>

<style scoped>
   .version-head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 0.44rem;
        background-color: #f9f9f9;
   }
   .version-head p{
       height: 100%;
       line-height: 0.44rem;
   }
   .left{
       position: absolute;
       z-index: 2;
       width: 0.38rem;
       height: 0.44rem;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 24px;
   }
   .title{
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        font-size: 18px;
        color: #ff5000;
   }
   .phoneList{
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0.44rem;
        width: 0.92rem;
        height: 100%;
        background: #f5f5f5;
   }
   .phoneList ul li{
        text-align: center;
        height: .45rem;
        line-height: .45rem;
        font-size: 14px;
        overflow: hidden;
        border-bottom: 1px solid #e9e9e9;
   }
   .style{
       background: #fff;
       color:#ff5000;
       border-left: 2px solid #ff5000;
   }
</style>

