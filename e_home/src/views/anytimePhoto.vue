<template>
 <div class="anytime-photo-container">
    <Header></Header>
    <div class="anytime-photo-wrap">
        <router-link class="anytime-photo-item" :to="{path:'/newsDetail', query: {newsId: item.newsId}}" v-for="(item, index) in photoList" :key="index">
            <img :src="item.pic" alt="" class="photo">
            <div class="title">{{item.title}}</div>
        </router-link>
    </div>
    <NoData></NoData>
 </div>
</template>

<script>
export default {
 data() {
 return {
    formData: {
        page: 1,
        rows: 1000,
        type: this.$route.meta.type
    },
    photoList: []
 }
 },
 components: {

 },
 methods: {
    getPhotoList() {
        this.$store.commit('showLoading')
        this.$axios.get('/news/newsList.do', this.formData).then(res => {
            console.log(res)
            this.photoList = res.rows
            this.$store.commit('hideLoading')
        })
    }
 },
 created() {
    this.getPhotoList()
 }
}
</script>

<style scoped lang="scss">

.anytime-photo-wrap {
    display: flex;
    flex-wrap: wrap;

    a {
        text-decoration: none;
    }

    .anytime-photo-item {
        display: block;
        padding: 0.32rem;
        width: 3.11rem;
        height: 3.1526rem;

        .photo {
            display: block;
            width: 3.11rem;
            height: 2.3326rem;
        }

        .title {
            font-size: 0.26rem;
            line-height: 1.5;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
}

</style>
