<template>
    <div class='loading'>
        <img src="../img/Eclipse-1s-200px.gif" alt="">
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
.loading {
    width: 7.5rem;
    height: 12.46rem;
    position: relative;
    z-index: 999;

    img {
        width: 2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
