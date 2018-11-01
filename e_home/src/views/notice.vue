<template>
 <div class="notice-container">
     <div class="header-wrap">
        {{this.$route.meta.title}}
     </div>
     <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <div class="notice-wrap-item" v-for="(item, index) in noticeData" :key="index" @click="handleDetail(item.newsId)">
            <div class="icon-wrap">
                <img src="../img/通知.png" alt="">
            </div>
            <div class="title-date">
                <div class="notice-title">
                    {{item.title}}
                </div> 
                <div class="notice-date">
                    {{item.currentTime}}
                </div>
            </div>
        </div>
        <NoData></NoData>
        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="topStatus === 'loading'" class="loading-img">
                <img src="../img/Spinner-1s-200px.gif" >
            </span>
        </div>
    </mt-loadmore>
 </div>
</template>

<script>
export default {
 data() {
 return {
     formData: {
         page: 1,
         rows: 100,
         type: 2
     },
     noticeData: [],
     topStatus: ''
 }
 },
 components: {

 },
 methods: {
    getNoticeData() {
        this.$store.commit('showLoading')
        this.$axios.get('/news/newsList.do', this.formData).then(res => {
            console.log(res)
            this.noticeData = res.rows
            this.$store.commit('hideLoading')
        })
    },
    handleDetail(newsId) {
        this.$router.push({path: '/newsDetail', query: {newsId}})
    },
    handleTopChange(status) {
        this.topStatus = status;
    },
    loadTop() {
        this.getNoticeData();
        setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
        }, 1000)
    }
 },
 created() {
     this.getNoticeData()
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

.notice-wrap-item {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    height: 1.52rem;
    border-bottom: 0.02rem solid rgba($color: #000000, $alpha: 0.1);

    .icon-wrap {
        position: relative;
        width: 1.42rem;
        height: 1.52rem;

        img {
            position: absolute;
            left: 0.36rem;
            top: 0.2rem;
            right: 0.36rem;
            width: 0.7rem;
        }
    }

    .title-date {
        width: 5.48rem;
        height: 1.32rem;
        padding: 0.1rem;

        .notice-title {
            font-size: 0.3rem;
            color: #333;
        }

        .notice-date {
            font-size: 0.24rem;
            color: #666;
            height: 0.28rem;
            padding: 0.06rem 0;
        }
    }


}

.mint-loadmore-top {

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
</style>
