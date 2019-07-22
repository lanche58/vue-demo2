<template>
    <div class="goods-item">
        <div class="pic"><img v-lazy="`img/${data.productImage}`" alt=""></div>
        <div class="desc">
            <p class="title">{{data.productName}}</p>
            <p class="price">¥ {{data.salePrice}}</p>
            <button type="button" class="btn-add-cart" @click="addCart(data.productId)">加入购物车</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        addCart(id) {
            this.bus.$emit('add', id)
        }
    },
}
</script>

<style lang="scss">
.goods-item{
    border: 2px solid $gray-cc;
    transition: .3s;
    &:hover{
        box-shadow: 0 0 5px rgba(0,0,0,.2);
        transform: translateY(-10px);
        border-color: $green-41;
    }
    .pic{
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .desc{
        padding: 10px 15px;
    }
    .title{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: $gray-33;
        line-height: 1.4;
        font-size: 16px;
        font-weight: bold;
    }
    .price{
        margin-top: 20px;
        color: $green-41;
        font-size: 18px;
    }
    .btn-add-cart{
        margin-top: 5px;
        width: 100%;
        height: 40px;
        border: 1px solid $green-41;
        color: $green-41;
        letter-spacing: 3.5px;
        transition: .3s;
        &:hover{
            background: $green-41;
            color: white;
        }
    }
}
</style>
