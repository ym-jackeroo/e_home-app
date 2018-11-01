<template>
 <div class="change-password-container">
     <Header></Header>
     <div class="change-password-wrap">
        <div class="oldPwd">
            旧密码:
            <input type="password" v-model="formData.oldPwd">
        </div>
        <div class="newPwd">
            新密码:
            <input type="password" v-model="formData.newPwd">
        </div>
        <div class="repeat-newPwd text">
            确认密码:
            <input type="password" v-model="newPwdRepeat">
        </div>
        <div class="btn-wrap">
            <mt-button type="danger" size="large" class="btn" @click="changePass">确定</mt-button>
        </div>
     </div>
 </div>
</template>

<script>
import { Button, Toast, Indicator } from 'mint-ui'
export default {
 data() {
 return {
    formData: {
        oldPwd: '',
        newPwd: ''
    },
    newPwdRepeat: ''
 }
 },
 components: {

 },
 methods: {
    changePass() {
        if(this.formData.newPwd&&this.formData.oldPwd&&this.newPwdRepeat) {
            if(this.oldPwd = this.$store.state.password) {
                if(this.formData.newPwd == this.newPwdRepeat) {
                    Indicator.open({
                        text: '修改密码中'
                    });
                    this.$axios.get('/user/updatePwd.do', this.formData).then(res => {
                        console.log(res)
                        Indicator.close();
                        Toast("密码修改成功")
                        this.$router.push('/user')
                    })
                }else {
                    Toast("两次填写的密码不一致")
                }
            }else {
                Toast("旧密码不正确")
            }
        }else {
            Toast("请填写完整您的密码")
        }
    }
 }
}
</script>

<style scoped lang="scss">
.change-password-container {
    height: 100vh;
}

.change-password-wrap {
    padding: 1rem 0.8rem;
    font-size: 0.32rem;
    color: #666;

    input {
        outline: none;
        border: none;
        width: 5.66rem;
        height: 0.7932rem;
        border: 0.02rem solid #999;
        border-radius: 0.1rem;
        color: #666;
        font-size: 0.28rem;
        list-style: 0.32rem;
        padding: 0 0.1rem;
        margin: 0.2rem 0;
    }

    .btn {
        font-size: 0.32rem;
        height: 0.94rem;
        background: #ef473a;;
    }
}
</style>
