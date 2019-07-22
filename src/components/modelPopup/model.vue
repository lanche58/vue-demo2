<template>
    <div class="popup-wrap">
        <div class="popup-main">
            <button type="button" @click="closePopup" class="btn-close"><i class="icon iconfont icon-guanbi"></i></button>
            <slot></slot>
        </div>
        <div @click="closePopup" class="mask-layer"></div>
    </div>
</template>

<script>
export default {
    methods: {
        closePopup() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>