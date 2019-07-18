<template>
    <dl class="filter-nav">
        <dt>price:</dt>
        <dd :class="{act: current === -1}" @click="handleClick(-1)"><span>All</span></dd>
        <dd v-for="(item, index) of list" :key="item.id" :class="{act: current === index}" @click="handleClick(index)"><span>{{`${item.firstPrice} - ${item.lastPrice}`}}</span></dd>
    </dl>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: "1",
                    firstPrice: "0.00",
                    lastPrice: "100.00"
                },
                {
                    id: "2",
                    firstPrice: "100.00",
                    lastPrice: "500.00"
                },
                {
                    id: "3",
                    firstPrice: "500.00",
                    lastPrice: "1000.00"
                },
                {
                    id: "4",
                    firstPrice: "1000.00",
                    lastPrice: "2000.00"
                }
            ],
            current: -1
        }
    },
    methods: {
        handleClick(index) {
            let limits = {};
            if (index === -1) {
                this.current = -1;
            } else {
                this.current = index;
                limits.minPrice = parseInt(this.list[index].firstPrice);
                limits.maxPrice = parseInt(this.list[index].lastPrice); 
            }
            this.$emit('change', limits);
        }
    }
}
</script>

<style lang="scss">
.filter-nav{
    float: left;
    width: 230px;
    padding: 0 20px;
    dt{
        margin-bottom: 20px;
        letter-spacing: 3.5px;
        text-transform: uppercase;
    }
    dd{
        padding: 5px 0;
        line-height: 1.4;
        transition: padding .3s;
        cursor: pointer;
        span{
            color: $gray-66;
        }
        &:hover, &.act{
            border-left: 3px solid $green-41;
            padding-left: 15px;
            span{
                color: $green-41;
            }
        }
        + dd{
            margin-top: 10px;
        }
    }
}
</style>