<template>
    <header class="header">
        <div class="container clearfix">
            <div class="logo fl">
                <router-link to="/"><img src="@/assets/img/logo.png" alt=""></router-link>
            </div>
            <div class="fr">
                <p class="name">任瑞</p>
                <button type="button" class="btn-login">登录</button>
                <button type="button" class="btn-logout">退出</button>
                <div class="btn-shopping-cart">
                    <router-link to="/cart"><i class="icon iconfont icon-gaiicon-"></i><span class="num">10</span></router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import './style.scss';
</style>