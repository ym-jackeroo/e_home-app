<template>
 <div class="bottom-bar-wrap">
     <div class="index" :class="{active1: this.$route.path == '/index'}">
         <router-link to="/index">
            <div class="index-img">
            </div>
            <div class="index-title">
                首页
            </div>
        </router-link>
     </div>
     <div class="notice" :class="{active2: this.$route.path == '/notice'}">
        <router-link to="/notice">
            <div class="notice-img">
            </div>
            <div class="notice-title">
                通知早知道
            </div>
        </router-link>
     </div>
     <div class="user" :class="{active3: this.$route.path == '/user'}">
        <router-link to="/user">
            <div class="user-img">
            </div>
            <div class="user-title">
                我的党建
            </div>
        </router-link>
     </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
 }
 },
 name: 'BottomBar',
 components: {

 },
 methods: {
     
 },
 crearted() {
 }
}
</script>

<style scoped lang="scss">
.bottom-bar-wrap {
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.98rem;
    font-size: 0.24rem;
    z-index: 988;
    background: #fff;

    a {
        text-decoration: none;
        color: #999;
    }
    .index {
        width: 2.5rem;
        text-align: center;
        border-top: 0.04rem solid transparent;

        .index-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/党_grey.png');
            background-size: 100% 100%;
        }
    }
    .notice {
        width: 2.5rem;
        text-align: center;
        border-top: 0.04rem solid transparent;

        .notice-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/消息_grey.png');
            background-size: 100% 100%;
        }
    }
    .user {
        width: 2.5rem;
        text-align: center;
        border-top: 0.04rem solid transparent;

        .user-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/会员_grey.png');
            background-size: 100% 100%;
        }
    }
    .active1 {
        border-top: 0.04rem solid #ef473a;
        
        .index-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/党_red.png');
            background-size: 100% 100%;
        }

        .index-title {
            color: #ef473a;
        }
    }
    .active2 {
        border-top: 0.04rem solid #ef473a;

        .notice-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/消息_red.png');
            background-size: 100% 100%;
        }
        
        .notice-title {
            color: #ef473a;
        }
    }
    .active3 {
        border-top: 0.04rem solid #ef473a;
        
        .user-title {
            color: #ef473a;
        }

        .user-img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.1rem auto;
            background-image: url('../img/index/会员_red.png');
            background-size: 100% 100%;
        }
    }
}
</style>
