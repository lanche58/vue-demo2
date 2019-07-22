<template>
    <ul class="cart-list">
        <li>
            <p class="c1">名称</p>
            <p class="c2">金额</p>
            <p class="c3">数量</p>
            <p class="c4">总金额</p>
            <p class="c5"></p>
        </li>
        <li v-for="item in list" :key="item.productId">
            <div class="c1">
                <i class="icon iconfont icon-check" :class="{checked: item.checked == '1'}" @click="editCart('checked', item)"></i>
                <div class="pic"><img :src="`img/${item.productImage}`" :alt="item.productName"></div>
                <p class="name">{{item.productName}}</p>
            </div>
            <p class="c2">¥ {{item.salePrice}}</p>
            <div class="c3">
                <div class="count-wrap">
                    <button type="button" class="btn-sub btn" :class="{disabled: item.productNum == 1}" @click="editCart('sub', item)"></button>
                    <p class="num">{{item.productNum}}</p>
                    <button type="button" class="btn-add btn" @click="editCart('add', item)"></button>
                </div>
            </div>
            <div class="c4 total-price">¥ {{item.productNum * item.salePrice}}</div>
            <div class="c5"><button type="button" @click="deleteHandle(item.productId)"><i class="icon iconfont icon-iconset0213"></i></button></div>
        </li>
        <li>
            <div class="select-all"><i class="icon iconfont icon-check" :class="{'checked': selectAll}" @click="toggleHandle"></i>全选</div>
            <p class="all-price">总计金额：<span class="price">{{total | currency('¥')}}</span></p>
            <button type="button" class="btn-settlement" @click="checkoutHandle" :class="{disabled: selectCount == 0}">去结算</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['list', 'selectAll', 'total', 'selectCount'],
    methods: {
        deleteHandle(id) {
            this.$emit('del', id)
        },
        editCart(flag, item) {
            this.$emit('edit', flag, item)
        },
        toggleHandle() {
            this.$emit('toggle')
        },
        checkoutHandle() {
            this.$emit('settle')
        }
    }
}
</script>
