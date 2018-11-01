<template>
    <div class="updata-info-container">
        <mt-header title="修改个人信息" class="my-btn-wrap">
            <router-link to="/personInfo" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" class="header-save" @click="handleSave">保存</mt-button>
        </mt-header>
        <div class="updata-info-wrap">
            <div class="avatar list-item">
                <span>头像</span>
                <label class="img">
                    <img :src="this.userData.header">
                    <input type="file" @change="upload">
                </label>
            </div>
            <div class="username list-item">
                <span>姓名</span>
                <input type="text" v-model="userData.username">
            </div>
            <div class="id-number list-item">
                <span>身份证</span>
                <span>{{userData.idCard}}</span>
            </div>
            <div class="hometown list-item">
                <span>家庭住址</span>
                <input type="text" v-model="userData.hometown">
            </div>
            <div class="address list-item">
                <span>工作地址</span>
                <input type="text" v-model="userData.address">
            </div>
            <div class="national list-item">
                <span>民族</span>
                <input type="text" v-model="userData.nation">
            </div>
            <div class="wx-number list-item">
                <span>微信号</span>
                <input type="text" v-model="userData.wxNum">
            </div>
            <div class="qq-number list-item">
                <span>qq号</span>
                <input type="text" v-model="userData.qqNum">
            </div>
            <div class="gender list-item">
                <span>性别 </span>
                <div class="radio-wrap" >
                    <input type="radio" name="sex" value=1 v-model="userData.sex" class="radio">
                    <span>男</span>
                    <input type="radio" name="sex" value=0 v-model="userData.sex" class="radio">
                    <span>女</span>
                </div>
            </div>
            <div class="education list-item">
                <span>最高学历</span>
                <input type="text" v-model="userData.education">
            </div>
            <div class="job-rank list-item">
                <span>职称</span>
                <input type="text" v-model="userData.jobRank">
            </div>
            <div class="salary list-item">
                <span>薪资水平</span>
                <input type="text" v-model="userData.salary">
            </div>
            <div class="join-party-time list-item">
                <span>入党时间</span>
                <input type="date" v-model="userData.joinPartyTime">
            </div>
            <div class="last-pay-time list-item">
                <span>党费最后缴纳时间</span>
                <input type="date" v-model="userData.lastPayTime">
            </div>
            <div class="now-identity list-item">
                <span>当前身份</span>
                <select name="" id="" v-model="userData.partyStatus">
                    <option value="2">党员</option>
                    <option value="1">预备党员</option>
                    <option value="0">积极分子</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
import {Toast} from 'mint-ui'
import base64 from '../utils/base64'
export default {
 data() {
 return {
    userData: {},
    imgBase64: ''
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
     upload() {
        this.$axios.post('/image/uploadBase64.do', this.userData.header).then(res => {
            console.log(res.url)
            // this.userData.header = res.url
            // console.log(base64(res.url))
        })
     },
    //  base64(e) {
    //     this.userData.header = e
    //  },
     handleSave() {
        delete this.userData.idCard
        delete this.userData.header
        let data = qs.stringify(this.userData)
        this.$axios.post('/user/modifyInfo.do', data).then(res => {
             if(res.code == 1) {
                console.log(res)
                Toast(res.msg)
                this.$router.push('/personInfo')
             }
         })
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

    .header-save {
        font-size: 0.34rem;
    }
}

.updata-info-wrap {
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
            outline: none;
            color: #444;
        }
    }

    .avatar {

        .img{
            height: 0.6rem;
            width: 0.6rem;

            img {
                display: block;
                width: 0.6rem;
                height: 0.6rem;
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
        width: 1.45rem;

        .radio {
            display: block;
            width: 0.26rem;
            height: 0.26rem;
            margin: 0.17rem 0; 
        }

        span {
            display: block;
            width: 0.4rem;
        }
    }

    .now-identity {
        select {
            outline: none;
            border: none;
            color: #444;
        }
    }
}
</style>
