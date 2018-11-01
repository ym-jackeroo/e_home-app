<template>
    <div class="person-info-container">
        <mt-header title="个人信息" class="my-btn-wrap">
            <router-link to="/user" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" class="header-edit" @click="handleEdit">编辑</mt-button>
        </mt-header>
        <div class="person-info-wrap">
            <div class="avatar list-item">
                <span>头像</span>
                <label class="img">
                    <img :src="userData.header">
                    <input type="file" disabled>
                </label>
            </div>
            <div class="username list-item">
                <span>姓名</span>
                <input type="text" disabled v-model="userData.username">
            </div>
            <div class="id-number list-item">
                <span>身份证</span>
                <span>{{userData.idCard}}</span>
            </div>
            <div class="hometown list-item">
                <span>家庭住址</span>
                <input type="text" disabled v-model="userData.hometown">
            </div>
            <div class="address list-item">
                <span>工作地址</span>
                <input type="text" disabled v-model="userData.address">
            </div>
            <div class="national list-item">
                <span>民族</span>
                <input type="text" disabled v-model="userData.nation">
            </div>
            <div class="wx-number list-item">
                <span>微信号</span>
                <input type="text" disabled v-model="userData.wxNum">
            </div>
            <div class="qq-number list-item">
                <span>qq号</span>
                <input type="text" disabled v-model="userData.qqNum">
            </div>
            <div class="gender list-item">
                <span>性别 </span>
                <div class="radio-wrap" >
                    <span v-if="userData.sex == 1">男</span>
                    <span v-else>女</span>
                </div>
            </div>
            <div class="education list-item">
                <span>最高学历</span>
                <input type="text" disabled v-model="userData.education">
            </div>
            <div class="job-rank list-item">
                <span>职称</span>
                <input type="text" disabled v-model="userData.jobRank">
            </div>
            <div class="salary list-item">
                <span>薪资水平</span>
                <input type="text" disabled v-model="userData.salary">
            </div>
            <div class="join-party-time list-item">
                <span>入党时间</span>
                <input type="text" disabled v-model="userData.joinPartyTime">
            </div>
            <div class="last-pay-time list-item">
                <span>党费最后缴纳时间</span>
                <input type="text" disabled v-model="userData.lastPayTime">
            </div>
            <div class="now-identity list-item">
                <span>当前身份</span>
                <input type="text" disabled v-model="userData.partyIdentity">
            </div>
        </div>
    </div>
</template>

<script>
export default {
 data() {
 return {
    userData: {}
 }
 },
 components: {

 },
 methods: {
     getUserInfo() {
         this.$axios.get('/user/userInfo.do').then(res => {
             console.log(res)
             this.userData = res.data
         })
     },
     handleEdit() {
         this.$router.push('/updataInfo')
     }
 },
 created() {
     this.getUserInfo()
 }
}
</script>

<style scoped lang="scss">
.my-btn-wrap {
    height: 0.88rem;
    background: #c50206;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    /deep/ {
        .mint-header-title {
            font-size: 0.36rem;
            line-height: 0.88rem;
        }
    }

    .header-edit {
        font-size: 0.34rem;
    }
}

.person-info-wrap {
    margin-top: 0.88rem;

    .list-item {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem;
        border-bottom: 0.02rem solid #ddd;
        height: 0.6rem;

        span {
            font-size: 0.28rem;
            color: #444;
            line-height: 0.6rem;
        }

        input {
            width: 2.8rem;
            border: none;
            background: #fff;
            text-align: right;
        }
    }

    .avatar {

        .img{
            height: 0.6rem;
            width: 0.6rem;
            
            img {
                display: block;
                height: 0.6rem;
                width: 0.6rem;
                border-radius: 50%;
            }

            input {
                display: none;
            }
        }
    }

    .radio-wrap {
        display: flex;
        justify-content: space-around;
    }
}
</style>
