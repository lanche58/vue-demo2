<template>
    <ul class="goods-list clearfix">
        <li v-for="item in listData" :key="item.productId"><goods-item :data="item"></goods-item></li>
    </ul>
</template>

<script>
import GoodsItem from '@/components/goodsItem/Item';
export default {
    props: ['listData'],
    components: {
        GoodsItem
    }
}
</script>

<style lang="scss">
    .goods-list{
        li{
            width: 25%;
            float: left;
            margin-bottom: 20px;
            padding-left: 20px;
        }
    }
</style>
