<template>
 <div class="user-container">
     <div class="header-wrap">
         我的党建
     </div>
     <div class="avatar-wrap">
         <div class="avatar">
            <img :src="this.$store.state.userData.header" v-if="this.$store.state.userData.header">
            <img src="../img/yuan.png" v-else>
         </div>
         <router-link class="desc" to="/login">
            <div>
                {{this.$store.state.userData.username||'你还没有登录,请登录'}}
            </div>
         </router-link>
     </div>
     <div class="user-list clearfix">
         <div class="person-info list">
             <router-link :to="this.$store.state.userData.username ? '/personInfo' : '/login'" class="clearfix">
                 <img src="../img/person.png" alt="" class="icon fll">
                 <div class="title fll">个人信息</div>
                 <img src="../img/right.png" alt="" class="right flr">
             </router-link>
         </div>
         <div class="person-integral list">
             <router-link :to="this.$store.state.userData.username ? '/personScore' : '/login'" class="clearfix">
                 <img src="../img/lxjf.png" alt="" class="icon fll">
                 <div class="title fll">个人量化积分</div>
                 <img src="../img/right.png" alt="" class="right flr">
             </router-link>
         </div>
         <div class="change-password list">
             <router-link :to="this.$store.state.userData.username ? '/changePass' : '/login'" class="clearfix">
                 <img src="../img/xgmm.png" alt="" class="icon fll">
                 <div class="title fll">修改密码</div>
                 <img src="../img/right.png" alt="" class="right flr">
             </router-link>
         </div>
         <div class="cost-pay list">
             <router-link :to="this.$store.state.userData.username ? '/pay' : '/login'" class="clearfix">
                 <img src="../img/icon3.png" alt="" class="icon fll">
                 <div class="title fll">党费缴纳</div>
                 <img src="../img/right.png" alt="" class="right flr">
             </router-link>
         </div>
     </div>

     <div class="btn-wrap" v-if="this.$store.state.userData.username" @click="handleLayout">
         <mt-button type="danger" size="large" class="btn">退出登录</mt-button>
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

 },
 methods: {
    handleLayout() {
        this.$store.commit('storageUserData', {})
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
 }
}
</script>

<style scoped lang="scss">
.header-wrap {
    font-size: 0.36rem;
    background-color: #c50206;
    color: #ffffff;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
}

.avatar-wrap {
    height: 2rem;
    background-color: #c50206;
    padding-top: 0.8rem;


    .avatar {
        width: 1.25rem;
        height: 1.25rem;
        margin: 0 auto;

        img {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
        }
    }

    a {
        text-decoration: none;
    }

    .desc {
        margin-top: 0.1rem;
        color: #fff;
        font-size: 0.24rem;
        text-align: center;
    }
}

.user-list {

    .list {
        width: 7.5rem;
        height: 1.06rem;
        border-bottom: 0.02rem solid #ddd;

        a {
            position: relative;
            text-decoration: none;
            display: block;
            width: 7.5rem;
            height: 1.06rem;

            .icon {
                width: 0.64rem;
                height: 0.64rem;
                margin: 0.22rem;
            }

            .title {
                color: #666;
                font-size: 0.32rem;
                line-height: 1.08rem;
            }

            .right {
                position: absolute;
                right: 0.2rem;
                top: 0.41rem;
                bottom: 0.41rem;
                width: 0.15344rem;
                height: 0.24rem;
            }
        }
    }
}

.btn-wrap {
    margin-top: 0.6rem;
    padding: 0.2rem;

    .btn {
        font-size: 0.32rem;
        height: 0.94rem;
        background: #ef473a;
    }
}


</style>
