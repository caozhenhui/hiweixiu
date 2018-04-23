<template>
    <div class="details">
        <details-head></details-head>
        <details-list
            :message='message'
        ></details-list>
        <details-foot></details-foot>
    </div>
</template>

<script>
import DetailsHead from './DetailsHead';
import DetailsList from './DetailsList';
import DetailsFoot from './DetailsFoot';

export default {
    name:'Details',
    props:['message'], //接收到机器详细信息
    components:{
        DetailsHead, DetailsList, DetailsFoot
    }
}
</script>

<style scoped>

</style>

