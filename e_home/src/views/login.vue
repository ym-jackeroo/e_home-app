<template>
 <div class="login-container">
     <div class="header-wrap clearfix">
        <div class="back" @click=this.handleBack>
             <img src="../img/left.png" alt="">
         </div>
         <div class="title">
             登录
         </div>
     </div>
     <div class="login-wrap">
         <div class="login-icon">
             <img src="../img/logo.png" alt="">
         </div>
         <form class="login-input">
            <input type="text" placeholder="  身份证号" v-model="formData.id_card">
            <input type="password" placeholder="  密码" v-model="formData.password">
            <input type="submit" value="登录" class="btn" @click="handleLogin">
         </form>
     </div>

     <!-- <div class="loading-wrap" v-if="isLoading">
         <div class="loading">
             <span>
                正在登录中
             </span>
         </div>
     </div> -->
 </div>
</template>

<script>
import qs from 'qs'
import { Indicator, Toast } from 'mint-ui';

export default {
 data() {
 return {
     formData: {
        id_card: '',
        password: ''
     } }
 },
 components: {

 },
 methods: {
    handleBack() {
        history.go(-1);
    },
    handleLogin() {
        Indicator.open({
            text: '正在登陆中'
        });
        let data = qs.stringify(this.formData)
        console.log(data)
        this.$axios.post(`/user/userLogin.do?${data}`, {headers: {"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryB1Yq0JFehxgayVwV"}}).then(res => {
            console.log(res)
            if(res.code == 1) {
                this.$store.commit('storagePassword', this.formData.password)
                this.$store.commit('storageUserData', res.data)
                localStorage.setItem('token',res.token)
                Indicator.close();
                this.$router.push('/user')
            }else if(res.code == 0) {
                Toast(res.msg);
                Indicator.close();
            }
        })
    }
 }
}
</script>

<style scoped lang="scss">


.header-wrap {
    background-color: #c50206;
    height: 0.88rem;
    position: relative;

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

.login-wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0.88rem;
    background: #c50206;

    .login-icon {
        width: 4.0626rem;
        height: 0.9972rem;
        margin: 0.6rem auto;

        img {
            width: 4.0626rem;
            height: 0.9972rem;
        }
    }

    .login-input {

        input {
            width: 5.76rem;
            height: 0.7932rem;
            border: 0.02rem solid #ff0;
            border-radius: 0.1rem;
            background: #c50206;
            display: block;
            margin: 0 auto 0.2rem;
            padding: 0 0.1rem;
            color: #fff;
            overflow: hidden;
        }

        input::placeholder {
            color: #fff;
            font-size: 0.24rem;
        }

        .btn {
            background: #e3574f;
            color: #fff;
            font-size: 0.24rem;
            width: 5.96rem;
        }
    }
}

.loading-wrap {
    width: 7.5rem;
    height: 12.46rem;
    position: relative;

    .loading {
        position: relative;
        width: 2rem;
        height: 2rem;
        background: rgba($color: #000000, $alpha: 0.2);
        background-image: url('../img/Spinner-1s-100px.gif');
        border: 0.02rem solid rgba($color: #000000, $alpha: 0.2);
        border-radius: 0.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        
        span {
            display: block;
            font-size: 0.24rem;
            color: #ddd;
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
        }
    }
}

</style>
