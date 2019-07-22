<template>
    <div class="home-wrap">
        <page-header></page-header>
        <div class="mTop"></div>
        <bread-crumb-nav>&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/"><span class="item">商品</span></router-link></bread-crumb-nav>
        <div class="home-main">
            <div class="container">
                <sort :sortDefaultFn="sortDefaultHandle" :sortFn="sortHandle" :sort="sort"></sort>
                <div class="home-content clearfix">
                    <filter-nav @change="filterHandle"></filter-nav>
                    <div class="goods-wrap">
                        <goods-list :listData="list"></goods-list>
                        <div class="loading-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                            <span v-show="loading"><img src="../../assets/img/loading-spinning-bubbles.svg" alt=""></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <model-popup class="no-login-tips" @close="noLoginTips = false" v-if="noLoginTips">
            <p class="msg">你尚未登录！</p>
            <button type="button" @click="noLoginTips = false" class="btn-model-popup">关闭</button>
        </model-popup>
        <model-popup class="no-login-tips" @close="addedSuccessTips = false" v-if="addedSuccessTips">
            <p class="msg"><i class="icon iconfont icon-check"></i>加入购物车成功</p>
            <div class="btn-wrap">
                <button type="button" class="btn-model-popup" @click="addedSuccessTips = false">继续购物</button>
                <router-link to="/cart"><button type="button" class="btn-model-popup btn-model-special">查看购物车</button></router-link>
            </div>
        </model-popup>
    </div>
</template>

<script>
import PageHeader from '@/components/header/Header';
import BreadCrumbNav from '@/components/breadCrumbNav/BreadCrumbNav';
import Sort from './Sort';
import FilterNav from './Filter';
import GoodsList from './List';
import axios from 'axios';
import { setTimeout } from 'timers';
import ModelPopup from '@/components/modelPopup/model';
export default {
    name: 'Home',
    components: {
        PageHeader,
        BreadCrumbNav,
        Sort,
        FilterNav,
        GoodsList,
        ModelPopup
    },
    data() {
        return {
            list: [],
            page: 1,
            pageSize: 8,
            sort: false,
            // true, 禁止滚动触发
            busy: false,
            miPrice: -1,
            maPrice: -1,
            // 不出现加载动画
            loading: false,
            noLoginTips: false,
            addedSuccessTips: false
        }
    },
    mounted() {  
        this.getGoodsList();
        this.bus.$on('add', id => {
            axios.post('/goods/addCart', {productId: id})
            .then(res => {
                const data = res.data;
                // 尚未登录
                if (data.status == 10001) {
                    this.noLoginTips = true
                } else if (data.status == 0) {
                    this.addedSuccessTips = true;
                }
            })
        });
    },
    methods: {
        getGoodsList(flag) {
            const params = {
                page: this.page,
                pageSize: this.pageSize,
                sort: this.sort ? -1 : 1,
            }
            if (this.minPrice !== -1) {
                params.minPrice = this.minPrice;
                params.maxPrice = this.maxPrice;
            }
            axios.get('/goods', {params}).then(res => {
                if (!res.data.status) {
                    this.loading = false;
                    if (flag) {
                        // 数据累加
                        this.list = this.list.concat(res.data.result.list);
                    } else {
                        this.list = res.data.result.list;
                    }
                    if (res.data.result.count < this.pageSize) {
                        this.busy = true; 
                    } else {
                        this.busy = false;
                    }
                }
            })
        },
        sortHandle() {
            this.sort = !this.sort;
            this.page = 1;
            this.getGoodsList();
        },
        sortDefaultHandle() {
            if (!this.sort) { return; }
            this.sort = false;
            this.page = 1;
            this.getGoodsList();
        },
        loadMore() {
            // 禁止滚动触发
            this.busy = true;
            this.loading = true;
            setTimeout(() => {
                this.page++;
                this.getGoodsList(true);
            }, 500);
        },
        filterHandle(limits) {
            this.page = 1;
            this.sort = false;
            if (limits.maxPrice) {
                this.minPrice = limits.minPrice;
                this.maxPrice = limits.maxPrice;
            } else {
                this.minPrice = -1;
                this.maxPrice = -1;
            }
            this.getGoodsList();
        },
        // closeHandle() {
        //     this.noLoginTips = false
        // }
    }
}
</script>

<style lang="scss">
.goods-wrap{
    margin-left: 230px;
}
.home-main{
    padding: 60px 0 0;
}
.home-content{
    padding-top: 30px;
}
.loading-wrap{
    padding-left: 20px;
    text-align: center;
}
</style>