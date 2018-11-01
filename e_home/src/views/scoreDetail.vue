<template>
 <div class="score-detail-container">
     <Header></Header>
     <mt-loadmore 
      :bottom-method="loadBottom" 
      @bottom-status-change="handleBottomChange" 
      :bottom-all-loaded="allLoaded" 
      :autoFill="false" 
      ref="loadmore">
        <div class="score-detail-wrap">
            <div class="item" v-for="(item, index) in scoreData" :key="index">
                <div class="top">
                    <div class="typename">
                        {{item.typeName}}
                    </div>
                    <div class="score">
                        +{{item.singleDesc}}
                    </div>
                </div>
                <div class="timeformat">
                    {{item.timeFormat}}
                </div>
            </div>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">
                <img src="../img/收缩下箭头.png" class="arrow">
            </span>
            <span v-show="bottomStatus === 'loading'" class="loading-img">
                <img src="../img/Spinner-1s-200px.gif" >
            </span>
        </div>
        <NoData v-if="allLoaded"></NoData>
     </mt-loadmore>
 </div>
</template>

<script>
export default {
 data() {
 return {
    formData: {
        page: 1,
        rows: 10
    },
    total: '',
    scoreData: {},
    allLoaded: false,
    bottomStatus: ''
 }
 },
 components: {

 },
 methods: {
    getStoreDetail() {
        this.$axios.get('/integral/integralList.do', this.formData).then(res => {
            console.log(res)
            this.total = res.total
            this.scoreData = res.rows
        })
    },
    handleBottomChange(status) {
        this.bottomStatus = status
    },
    loadBottom() {
        this.formData.rows += 10
        if(this.total+10 > this.formData.rows) {
            this.getStoreDetail()
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded()
            }, 500);
        }else {
            this.allLoaded = true
        }
    }
 },
 created() {
     this.getStoreDetail()
 }
}
</script>

<style scoped lang="scss">
.score-detail-container {
    overflow: scroll;
    height: 100%;
}
.item {
    padding: 0.32rem;
    height: 0.9rem;
    border: 0.02rem solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top {
        display: flex;
        justify-content: space-between;

        .typename {
            font-size: 0.36rem;
            color: #333;
        }

        .score {
            font-size: 0.32rem;
            color: red;
        }
    }

    .timeformat {
        color: #444;
        font-size: 0.28rem;
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
