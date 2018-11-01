<template>
 <div class="newsDetail-container">
    <Header :title="title"></Header>

    <div class="news-content-wrap">
        <div class="news-title-wrap">
            <h3>{{newsContent.title}}</h3>
        </div>
        <div class="news-content" v-html="newsContent.content">

        </div>
    </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
    title: '',
    newsId: '',
    newsContent: {}
 }
 },
 components: {

 },
 methods: {
     handleBack() {
        history.go(-1)
     },
     getData() {
        this.newsId = this.$route.query.newsId
     },
     getNewsContent() {
         this.$store.commit('showLoading')
         this.$axios.get(`/news/newsContent.do?newsId=${this.newsId}`).then(res => {
             this.newsContent = res.data
             switch(res.data.type) {
                case 0:
                    this.title = '信工新闻眼'
                    break;
                case 3:
                    this.title = '党建一点通';
                    break;
                case 5:
                    this.title = '党员亮身份';
                    break;
                case 6:
                    this.title = '随时随地学';
                    break;
                case 4:
                    this.title = '制度建设';
                    break;
                case 1:
                    this.title = '特色活动';
                    break;
                case 8:
                    this.title = '政治学习';
                    break;
                case 7:
                    this.title = '随时随地拍';
                    break;
                case 2:
                    this.title = '通知早知道';
                    break;
                default:
                    break;
            }
            this.$store.commit('hideLoading')
         })
         
     },
    confirmTitle() {
        
    }
 },
 created() {
     this.getData()
     this.getNewsContent()
     this.confirmTitle()
 }
}
</script>

<style scoped lang="scss">

.news-content-wrap {
    padding: 0.2rem;

    .news-title-wrap {

        h3 {
            font-size: 0.48rem;
            font-weight: 500;
            line-height: 1.2;
            margin-bottom: 0.2rem;
        }
    }
}

</style>
<style lang="scss">
.news-content {
    font-size: 0.24rem;

    span {
        font-size: 0.36rem;
        line-height: 2;
        font-weight: 400;
    }

    h2 {
        font-size: 0.6rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 0.2rem;
    }

    h4 {
        font-size: 0.36rem;
        font-weight: 500;
        line-height: 1.2;
    }

    p {
        font-size: 0.24rem;
        line-height: 2;
        margin-bottom: 0.2rem;
    }

    img {
        max-width: 100%;
    }
}
</style>


