<template>
  <div class="version page">
     <version-head
        :lists = "lists"
     ></version-head>
  </div>
</template>

<script>
import VersionHead from './VersionHead';

export default {
    name: 'Version',
    props:['jsonurl'],
    data () {
        return {
            lists:[]
        }
    },
    created () {
        this.$http.get(this.jsonurl).then((res) => {
           this.lists = res.data
        })
    },
    components:{
        VersionHead
    }
}
</script >

<style scoped>

</style>
