<template>
    <div class="home-wrap">
        <page-header></page-header>
        <div class="mTop"></div>
        <bread-crumb-nav>&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/"><span class="item">商品</span></router-link></bread-crumb-nav>
        <div class="home-main">
            <div class="container">
                <sort></sort>
                <div class="home-content clearfix">
                    <filter-nav></filter-nav>
                    <goods-list></goods-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/header/Header';
import BreadCrumbNav from '@/components/breadCrumbNav/BreadCrumbNav';
import Sort from './Sort';
import FilterNav from './Filter';
import GoodsList from './List';
export default {
    name: 'Home',
    components: {
        PageHeader,
        BreadCrumbNav,
        Sort,
        FilterNav,
        GoodsList
    }
}
</script>

<style lang="scss">
.home-main{
    padding: 60px 0 0;
}
.home-content{
    padding-top: 30px;
}
</style>