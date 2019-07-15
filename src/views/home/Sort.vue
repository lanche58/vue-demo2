<template>
    <div class="sort-wrap clearfix">
        <div class="fr">
            <span class="name">排序：</span>
            <span class="item">默认</span>
            <span class="item">价格<i class="icon iconfont icon-jiantou21"></i></span>
            <button type="button" class="btn-filter">筛选</button>
        </div>
    </div>
</template>

<style lang="scss">
.sort-wrap{
    background: $gray-f2;
    padding: (56px - 24px) / 2 20px;
    line-height: 24px;
    .item{
        color: $gray-66;
        &:hover{
            .icon{
                color: $green-41;
            }
        }
        + .item{
            margin-left: 20px;
        }
    }
    .name{
        margin-right: 10px;
    }
    .icon{
        display: inline-block;
        vertical-align: bottom;
        font-size: 18px;
        color: $gray-33;
        transition: .3s;
    }
    .btn-filter{
        display: none;
    }
    .item, .btn-filter{
        transition: .3s;
        &:hover{
            color: $green-41;
        }
    }
}
</style>
