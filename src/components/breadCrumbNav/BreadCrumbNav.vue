<template>
    <nav class="bread-crumb-nav">
        <div class="container">
            <router-link to="/"><span class="item">首页</span></router-link>
            <slot></slot>
        </div>
    </nav>
</template>

<style lang="scss">
.bread-crumb-nav{
    background: $gray-f2;
    padding: (46px - 24px) / 2 0;
    line-height: 24px;
    .item{
        color: $gray-66;
        &:hover, &.act{
            color: $green-41;
        }
    }
}
</style>
