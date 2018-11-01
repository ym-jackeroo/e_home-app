<template>
 <div class="interactive-container">
    <Header></Header>
    <mt-loadmore class="loadmore" 
    :top-method="loadTop" 
    @top-status-change="handleTopChange" 
    :bottom-method="loadBottom" 
    @bottom-status-change="handleBottomChange" 
    :bottom-all-loaded="allLoaded" 
    :autoFill="false" 
    ref="loadmore">
        <div class="comment-wrap">
            <div class="comment-item-wrap" v-for="(item, index) in interactiveData" :key="index">
                <div class="comment-item">
                    <div class="top">
                        <img :src="item.header" alt="">
                        <div class="middle">
                            <div class="nickname">
                                {{item.username}}
                            </div>
                            <div class="time">
                                <img src="../img/表.png" alt="" class="time-icon">
                                <span>{{item.currentTime}}</span>
                                <img src="../img/喇叭.png" alt="" class="state-icon">
                                <span>公开</span>
                            </div>
                        </div>
                        <div class="mark">
                            党员互动
                        </div>
                    </div>

                    <div class="content">
                        {{item.content}}
                    </div>

                    <router-link class="reply clearfix" :to="{path:'/interactivereply', query:{header:item.header,username:item.username,time:item.currentTime,content:item.content,forumId: item.forumId}}">
                        <span class="flr">回复</span>
                        <img src="../img/回复.png" alt="" class="flr">
                    </router-link>
                </div>
            </div>
        </div>

        <NoData v-show="allLoaded"></NoData>

        <div slot="top" class="mint-loadmore-top" v-show="!allLoaded">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="topStatus === 'loading'" class="loading-img">
                <img src="../img/Spinner-1s-200px.gif" >
            </span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom" v-show="!allLoaded">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="bottomStatus === 'loading'" class="loading-img">
                <img src="../img/Spinner-1s-200px.gif" >
            </span>
        </div>
    </mt-loadmore>
    <div class="release-wrap" v-if="release">
        <div class="shadow" @click="handleCancel">

        </div>
        <div class="release-comments">
            <textarea name="" id="" cols="30" rows="10" v-model="contentData.content" class="comments-box"></textarea>
            <div class="btn-wrap">
                <mt-button type="danger" size="small" class="release-btn" @click="handleRelease">发布</mt-button>
                <mt-button type="default" size="small" class="cancel-btn" @click="handleCancel">取消</mt-button>
            </div>
        </div> 
    </div>
    <div class="release" @click="handlePop">
        <img src="../img/加号.png" alt="">
    </div>
 </div>

 
</template>

<script>
import qs from 'qs'
import {Toast, Button} from 'mint-ui'
export default {
 data() {
 return {
    release: false,
    formData: {
        page: 0,
        rows: 10,
        type: this.$route.meta.type,
        cates: 0
    },
    interactiveData: [],
    total: '',
    allLoaded: false,
    topStatus: '',
    bottomStatus: '',
    contentData: {
        content: '',
        type: 1
    }
 }
 },
 components: {

 },
 methods: {
    handleBack() {
        history.go(-1);
    },
    handlePop() {
        this.release = true
    },
    handleCancel() {
        this.release = false
    },
    handleRelease() {
        let data = qs.stringify(this.contentData)
        this.$axios.post(`/forum/saveForum.do`, data).then(res => {
            console.log(res)
            if(res.code == 1) {
                this.release = false
                this.getInteractiveData()
                Toast(res.msg)
                this.contentData.content = ''
            }
        })
    },
    getInteractiveData() {
        // this.$store.commit('showLoading')
        this.$axios.get('/forum/forumList.do', this.formData).then(res => {
            console.log(res)
            this.interactiveData = res.rows
            this.total = res.total
            // this.$store.commit('hideLoading')
        })
    },
    handleTopChange(status) {
        this.topStatus = status;
    },
    handleBottomChange(status) {
        this.bottomStatus = status;
    },
       
    loadTop() {
        // this.formData.page = 1
        // this.formData.rows = 10
        // this.allLoaded = false
        this.getInteractiveData();
        setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
        }, 1000)
    },
    loadBottom() {
        this.formData.rows += 10
        if(this.total > this.formData.rows) {
            this.getInteractiveData()
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded();
            }, 500)
        } else if(this.formData.rows = this.total) {
            this.getInteractiveData()
            this.allLoaded = true;// 若数据已全部获取完毕
        }
    }
 },
 created() {
     this.getInteractiveData()  
 }
}
</script>

<style scoped lang="scss">

.interactive-container {
    overflow: scroll;
    height: 100%;
    
}

.comment-wrap {
    background: #efeff4;
}

.comment-item {
    width: 6.86rem;
    padding: 0.32rem;
    background: #fff;
    border: 0.02rem solid #ddd;
    margin: -0.02rem;
    margin-bottom: 0.2rem;

    .top {  
        height: 0.92rem;
        display: flex;
        justify-content: space-between;

        img {
            width: 0.666rem;
            height: 0.666rem;
            border-radius: 50%;
        }

        .middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: -0.8rem;
        }

        .nickname {
            font-size: 0.36rem;
            color: #333;
            margin-left: 0.1rem;
            line-height: 0.4rem;
        }

        .time {
            height: 0.48rem;
            width: 4rem;
            display: flex;
            justify-content: space-between;

            .time-icon {
                width: 0.24rem;
                height: 0.24rem;
                margin: 0.1rem;
            }

            .state-icon {
                width: 0.24rem;
                height: 0.24rem;
                margin: 0.1rem;
                margin-left: -0.2rem;
            }

            span {
                font-size: 0.24rem;
                color: #444;
                margin-left: -0.4rem;
                line-height: 0.44rem;
            }
        }

        .mark {
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0.04rem 0.16rem;
            border: 0.02rem solid red;
            border-radius: 15%/50%;
            font-size: 0.24rem;
            color: red;
        }
    }

    .content {
        line-height: 0.4rem;
        font-size: 0.32rem;
        color: #444;
        padding: 0.2rem 0;
    }

    .reply {
        img {
            padding: 0.05rem;
            width: 0.32rem;
            height: 0.32rem;
        }

        span {
            font-size: 0.28rem;
            color: #444;
            margin-left: 0.05rem;
            line-height: 0.42rem;
        }
    }
}

.release {
    position: fixed;
    right: 0.2rem;
    bottom: 1rem;
    width: 1.12rem;
    height: 1.12rem;
    z-index: 998;

    img {
        display: block;
        width: 1.12rem;
        height: 1.12rem;
    }
}

.release-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 7.5rem;
    height: 13.34rem;
    z-index: 1000;

    .shadow {
        position: fixed;
        top: 0;
        bottom: 3.2rem;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .5);
    }

    .release-comments {
    position: fixed;
    bottom: 0;
    width: 7.1rem;
    height: 2.8rem;
    padding: 0.2rem;
    background: #f1f1f1;

        textarea {
            outline: none;
        }

        .comments-box {
            width: 7.1rem;
            height: 2rem;
            border: 0.02rem solid transparent;
            border-radius: 0.06rem;
            font-size: 0.28rem;
            line-height: 0.32rem;
            font-weight: 400;
            color: #111;
        }

        .btn-wrap {
            display: flex;
            justify-content: space-between;

            .release-btn {
                width: 0.68rem;
                height: 0.62rem;
                font-size: 0.24rem;
                padding: 0.04rem 0.08rem 0.02rem;
                background: #ef473a;
                margin-top: -0.1rem;
            }

            .cancel-btn {
                width: 0.68rem;
                height: 0.62rem;
                font-size: 0.2rem;
                padding: 0.04rem 0.08rem 0.02rem;
                color: #444;
                margin-top: -0.1rem;
            }
        }
    }
}





.mint-loadmore-top {
    position: relative;

    .arrow {
        width: 0.5rem;
        height: 0.5rem;
    }

    .loading-img {
        width: 1rem;
        height: 1rem;

        img {
            display: block;
            width: 1rem;
            height: 1rem;
            margin: 0 auto;
        }
    }
}

.mint-loadmore-bottom {
    position: relative;

    .arrow {
        width: 0.5rem;
        height: 0.5rem;
        transform: rotate(180deg)
    }

    .loading-img {
        width: 1rem;
        height: 1rem;

        img {
            display: block;
            width: 1rem;
            height: 1rem;
            margin: 0 auto;
        }
    }
}
</style>
