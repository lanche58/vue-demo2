<template>
    <div class="goods-wrap">
        <ul class="goods-list clearfix">
            <li v-for="item in list" :key="item.id"><goods-item :data="item"></goods-item></li>
        </ul>
    </div>
</template>

<script>
import GoodsItem from '@/components/goodsItem/Item';
import axios from 'axios';
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        GoodsItem
    },
    mounted() {  
        axios.get('/api/goodsList.json').then(res => {
            this.list = res.data.data;
        })
    }
}
</script>

<style lang="scss">
    .goods-wrap{
        margin-left: 230px;
    }
    .goods-list{
        li{
            width: 25%;
            float: left;
            margin-bottom: 20px;
            padding-left: 20px;
        }
    }
</style>
