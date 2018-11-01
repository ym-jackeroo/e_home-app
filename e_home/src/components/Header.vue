<template>
    <div>
        <div class="header-wrap">
            <div class="back" @click=this.handleBack>
                <img src="../img/left.png" alt="">
            </div>
            <div class="title">
                {{title||this.$route.meta.title}}
            </div>
        </div>
        <div class="space">

        </div>
    </div>
</template>

<script>
export default {
props: {
    title: {
        type: String
    }
},
 data() {
 return {
    
 }
 },
 components: {

 },
 methods: {
     handleBack() {
         history.go(-1)
     }
 }
}
</script>

<style scoped lang="scss">
.header-wrap {
    position: relative;
    background-color: #c50206;
    height: 0.88rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 998;

    .back {
        
        img {
            position: absolute;
            left: 0;
            top: 0.12rem;
            bottom: 0.12rem;
            width: 0.64rem;
            height: 0.64rem;
        }
    }

    .title {
        font-size: 0.36rem;
        color: #ffffff;
        line-height: 0.88rem;
        text-align: center;
    }
}

.space {
    height: 0.88rem;
    width: 7.5rem;
}
</style>
