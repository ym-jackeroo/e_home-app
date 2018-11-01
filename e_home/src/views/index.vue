<template>
 <div class="index-container">
     <div class="header">
         <div class="header-left">
             <img src="../img/logo.png" class="header-img">
         </div>
         <router-link to="/login" class="header-login" v-if="!this.$store.state.userData.username">
            登录
         </router-link>
     </div>
     <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperData" :key="index">
                <img :src="item.imgUrl" @click="handleDetail(item.url)">
                <div class="slide_text">{{item.title}}</div>
            </swiper-slide>
            
            <!-- <swiper-slide>
                <img src="../img/swiper2.png" alt="">
                <div class="slide_text">习近平：“永远做人民公仆、时代先锋、民族脊梁”</div>
            </swiper-slide>
            <swiper-slide>
                <img src="../img/swiper3.png" alt="">
                <div class="slide_text">校长谭贞在信息工程学院作学习中央31号文件精神专题报告</div>
            </swiper-slide>
            <swiper-slide>
                <img src="../img/swiper4.png" alt="">
                <div class="slide_text">水調歌頭—慶祝黨的十九大勝利召開</div>
            </swiper-slide> -->
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        </swiper>
     </div>
     <div class="sudoku-wrap">
         <div class="row1">
            <router-link class="a-wrap" to="/newseyes">
             <img src="../img/icon_01.png" alt="">
             <div>信工新闻眼</div>
            </router-link>
            <router-link class="a-wrap" to="/life">
                <img src="../img/icon_03.png" alt="">
                <div>掌上组织生活</div>
            </router-link>
            <router-link class="a-wrap" :to="this.$store.state.userData.username ? '/interactive' : '/login'">
                <img src="../img/icon_05.png" alt="">
                <div>党员云互动</div>
            </router-link>
         </div>
         <div class="row2">
            <router-link class="a-wrap" to="/oneclick">
                <img src="../img/icon_04.png" alt="">
                <div>党建一点通</div>
            </router-link>
            <router-link class="a-wrap" to="/showidentity">
                <img src="../img/icon_06.png" alt="">
                <div>党员亮身份</div>
            </router-link>
            <router-link class="a-wrap" to="/historyToday">
                <img src="../img/icon_02.png" alt="">
                <div>党史上的今天</div>
            </router-link>
         </div>
     </div>
     <div class="img-middle">
         <img src="../img/banner01.png" alt="">
     </div>
     <div class="table clearfix">
        <router-link class="road fll" to="#"></router-link>
        <router-link class="study fll" to="/anytimestudy"></router-link>
        <router-link class="pat fll" to="/anytimePhoto"></router-link>
        <router-link class="construction fll" to="/systemconstruction"></router-link>
        <router-link class="activity fll" to="/activity"></router-link>
    </div>

 </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
        type: 0,
        swiperOption: {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                stopOnLastSlide: true,
                disableOnInteraction: false
            },
            loop: true
        },
        swiperData: []
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    getSwiperData() {
        this.$axios.get(`/carousel/carouselList.do?${this.type}`).then(res => {
            console.log(res)
            this.swiperData = res.rows
        })
    },
    handleDetail(url) {
        this.$router.push({path: '/newsDetail', query: {newsId: url}})
    }
  },
  created() {
      this.getSwiperData()
  }
};
</script>

<style scoped lang="scss">
@import '../style/index.scss';
</style>

