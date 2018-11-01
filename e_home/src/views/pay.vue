<template>
 <div class="pay-container">
    <Header></Header>
    <div class="choice-wrap">
        请选择支付方式
    </div>
    <div class="wx-pay item clearfix" @click="handleWX">
        <img src="../img/微信.png" class="fll img">
        <div class="fll">微信</div>
        <img src="../img/right.png" class="flr icon">
    </div>
    <div class="zfb-pay item clearfix" @click="handleZFB">
        <img src="../img/支付宝.png" class="fll img">
        <div class="fll">支付宝</div>
        <img src="../img/right.png" class="flr icon">
    </div>
    <div class="wx-code-wrap" v-if="wxShow" @click="handleCancel">
        <div class="wx-code">
            <div class="wx-text">微信支付</div>
            <img src="../img/wechat.png" alt="">
        </div>
    </div>
    <div class="zfb-code-wrap" v-if="zfbShow" @click="handleCancel">   
        <div class="zfb-code">
            <div class="zfb-text">支付宝支付</div>
            <img src="../img/alipay.png" alt="">
        </div>
    </div>
    
 </div>
</template>

<script>
export default {
 data() {
 return {
     wxShow: false,
     zfbShow: false
 }
 },
 components: {

 },
 methods: {
     handleWX() {
         this.wxShow = true
     },
     handleZFB() {
         this.zfbShow = true
     },
     handleCancel() {
         this.wxShow = false
         this.zfbShow = false
     }
 }
}
</script>

<style scoped lang="scss">
.choice-wrap {
    padding: 0.4rem 0 0.2rem;
    font-size: 0.3rem;
    line-height: 0.4rem;
    font-weight: 500;
}

.item {
    padding: 0.2rem;
    height: 0.8rem;
    border: 0.02rem solid #ddd;

    .img {
        width: 0.84rem;
        height: 0.84rem;
    }

    div {
        color: #444;
        font-size: 0.32rem;
        line-height: 0.84rem;
        margin-left: 0.2rem;
    }

    .icon {
        height: 0.32rem;
        margin-top: 0.24rem;
    }
}

.wx-code-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1005;
    background: rgba(0, 0, 0, .5);

    .wx-code {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 6rem;
            height: 6rem;

        }

        .wx-text {
            width: 6rem;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.4rem;
            text-align: center;
            background: #fff;
        }
    }
}

.zfb-code-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1005;
    background: rgba(0, 0, 0, .5);

    .zfb-code {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 6rem;
            height: 6rem;

        }

        .zfb-text {
            width: 6rem;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.4rem;
            text-align: center;
            background: #fff;
        }
    }
}

</style>
