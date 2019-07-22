<template>
    <div class="cart-wrap">
        <page-header></page-header>
        <div class="mTop"></div>
        <bread-crumb-nav>&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/cart"><span class="item">购物车</span></router-link></bread-crumb-nav>
        <div class="cart-bg"></div>
        <div class="container">
            <div class="cart-main">
                <div class="no-product-add-tips" v-if="noCart">
                    <span class="icon iconfont icon-ku-"></span>
                    <p class="msg">购物车空空如也</p>
                </div>
                <cart-list :list="cartList" v-if="!noCart" @del="deleteGood" @edit="editGood" :selectAll="selectAll" @toggle="toggleSelectAll" :total="totalPriceCount" :selectCount="selectCount" @settle="goSettleAccounts"></cart-list>
            </div>
        </div>
        <model-popup class="no-login-tips" @close="delGoodTips = false" v-if="delGoodTips">
            <p class="msg">你确定要删除该商品么？</p>
            <div class="btn-wrap">
                <button type="button" class="btn-model-popup" @click="deleteConfirm">确认</button>
                <button type="button" class="btn-model-popup btn-model-special" @click="delGoodTips = false">取消</button>
            </div>
        </model-popup>
    </div>
</template>

<script>
import PageHeader from '@/components/header/Header';
import BreadCrumbNav from '@/components/breadCrumbNav/BreadCrumbNav';
import ModelPopup from '@/components/modelPopup/model';
import CartList from './List';
import axios from 'axios';
export default {
    data() {
        return {
            cartList: [],
            noCart: false,
            delGoodTips: false,
            currentProductId: ''
        }
    },
    components: {
        PageHeader,
        BreadCrumbNav,
        CartList,
        ModelPopup
    },
    mounted() {
        this.getCartList();
    },
    computed: {
        selectAll() {
            return this.selectCount == this.cartList.length ? true : false;
        },
        selectCount() {
            let i = 0;
            this.cartList.forEach(item => {
                if (item.checked == '1') {
                    i++;
                }
            });
            return i;
        },
        totalPriceCount() {
            let total = 0;
            this.cartList.forEach(item => {
                if (item.checked == '1') {
                    total += parseFloat(item.salePrice) * parseInt(item.productNum);
                }
            });
            return total;
        }
    },
    methods: {
        getCartList() {
            axios.get('/users/cart').then(res => {
                const data = res.data;
                if (data.status == 10001) {
                    this.noCart = true;
                } else if (!data.status) {
                    this.cartList = data.result;
                }
            })
        },
        deleteGood(id) {
            this.currentProductId = id;
            this.delGoodTips = true;
        },
        deleteConfirm() {
            axios.post('/users/cart/del', {productId: this.currentProductId})
            .then(res => {
                if (!res.data.status) {
                    this.delGoodTips = false;
                    this.getCartList();
                }
            })
        },
        editGood(flag, item) {
            if (flag == 'checked') {
                item.checked = item.checked == '1' ? '0' : '1';
            } else if(flag == 'add') {
                item.productNum++;
            } else {
                if (item.productNum <= 1) { return; }
                item.productNum--;
            }
            axios.post('/users/cart/edit', {
                productId: item.productId,
                productNum: item.productNum,
                checked: item.checked
            });
        },
        toggleSelectAll() {
            const selectAllFlag = !this.selectAll;

            this.cartList.forEach(item => {
                item.checked = selectAllFlag ? '1' : '0';
            });
            axios.post('/users/cart/selectAll', {selectAll: selectAllFlag});
        },
        goSettleAccounts() {
            this.$router.push('/address');
        }
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

