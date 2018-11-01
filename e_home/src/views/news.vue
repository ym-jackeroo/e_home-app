<template>
 <div class="news-container">
     <Header></Header>
     <mt-loadmore 
      :top-method="loadTop" 
      @top-status-change="handleTopChange"
      :bottom-method="loadBottom" 
      @bottom-status-change="handleBottomChange" 
      :bottom-all-loaded="allLoaded" 
      :autoFill="false" 
      ref="loadmore">
      <div class="news-content">
          <div v-for="(item, index) in newsData" :key="index">
              <router-link class="news-item" :to="{path: '/newsDetail', query: {newsId: item.newsId}}">
                  <div class="img-wrap">
                      <img :src="item.pic" alt="">
                  </div>
                  <div class="right">
                      <div class="news-title">
                          {{item.title}}
                      </div>
                      <div class="data">
                          <div class="date">{{item.currentTime}}</div>
                          <div class="read-num">
                              <img src="../img/眼睛.png" alt="">
                              <span>{{item.count}}</span>
                          </div>
                      </div>
                  </div>
              </router-link>
          </div>
      </div>
        <NoData v-if="allLoaded"></NoData>
        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="topStatus === 'loading'" class="loading-img">
                <img src="../img/Spinner-1s-200px.gif" >
            </span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="bottomStatus === 'loading'" class="loading-img">
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
      newsData: [],
      formData: {
        page: 1,
        rows: 10,
        type: this.$route.meta.type
      },
      total: '',
      allLoaded: false,
      topStatus: '',
      bottomStatus: '',
    };
  },
  components: {},
  methods: {
    handleBack() {
      history.go(-1);
    },
    getNewsData() {
      this.$store.commit("showLoading");
      this.$axios.get(`/news/newsList.do`, this.formData).then(res => {
        if (res.code == 1) {
          console.log(res);
          this.total = res.total
          this.newsData = res.rows;
          this.$store.commit("hideLoading");
        }
      });
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadTop() {
      // this.formData.rows = 10
      this.getNewsData();
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    },
    loadBottom() {
        this.formData.rows += 10
        if(this.total > this.formData.rows) {
            this.getNewsData()
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded();
            }, 500)
        } else if(this.formData.rows = this.total){
            this.getNewsData()
            this.allLoaded = true;// 若数据已全部获取完毕
        }
    }
  },
  created() {
    this.getNewsData();
  }
};
</script>

<style scoped lang="scss">
.news-container {
  overflow: scroll;
  height: 100%;
}

.news-content {
  
}

a.news-item {
  text-decoration: none;
}

.news-item {
  width: 7.1rem;
  height: 1.6rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.02rem solid #ddd;

  .img-wrap {
    width: 1.6rem;
    height: 1.6rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.2rem;

    .news-title {
      width: 5.3rem;
      height: 0.96rem;
      line-height: 0.48rem;
      font-size: 0.32rem;
      color: #000;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .data {
      height: 0.26rem;
      display: flex;
      justify-content: space-between;

      .date {
        font-size: 0.2rem;
        color: #666;
        line-height: 0.26rem;
      }

      .read-num {
        display: flex;
        justify-content: space-between;
        width: 0.8968rem;

        img {
          width: 0.405rem;
          height: 0.24rem;
        }

        span {
          font-size: 0.2rem;
          color: #666;
          line-height: 0.26rem;
        }
      }
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
.mint-loadmore-bottom {

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
