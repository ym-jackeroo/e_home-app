<template>
 <div class="no-data-container" v-if="!this.$store.state.loading">
    <div class="bottom-prompt">
        没有更多数据了
    </div>
 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.bottom-prompt {
    padding: 0.2rem 0;
    font-size: 0.28rem;
    color: #666;
    line-height: 0.4rem;
    text-align: center;
}
</style>
