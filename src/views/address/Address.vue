<template>
    <div class="address-wrap">
        <page-header></page-header>
        <div class="mTop"></div>
        <bread-crumb-nav>&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/address"><span class="item">地址</span></router-link></bread-crumb-nav>
        <div class="container">
            <process></process>
            <p class="address-title">送货地址</p>
            <ul class="address-list clearfix">
                <li>
                    <div class="address-item">
                        <p class="name">JackBean</p>
                        <p class="addr">100001北京市朝阳区朝阳公园</p>
                        <p class="tel">12345678901</p>
                        <p class="default">Default address</p>
                        <i class="icon iconfont icon-iconset0213"></i>
                    </div>
                </li>
                <li class="add-new-address">
                    <div class="address-item">
                        <i class="add-icon"></i>
                        <p class="title">新增地址</p>
                    </div>
                </li>
            </ul>
            <p class="address-title">送货方式</p>
        </div>
        
    </div>
</template>

<script>
import PageHeader from '@/components/header/Header';
import BreadCrumbNav from '@/components/breadCrumbNav/BreadCrumbNav';
import Process from './Process';
import axios from 'axios';
export default {
    components: {
        PageHeader,
        BreadCrumbNav,
        Process
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
