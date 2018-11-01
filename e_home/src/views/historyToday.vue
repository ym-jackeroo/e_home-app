<template>
 <div class="history-today-container">
    <Header></Header>
    <div v-html="historyTodayData" class="history-today-content">

    </div>
 </div>
</template>

<script>
import getUrl from '@/utils/getUrl'
import cheerio from 'cheerio'
export default {
 data() {
 return {
    historyTodayData: '',
    urlObj: {
        url: ''
    }
 }
 },
 components: {

 },
 methods: {
     getDate() {
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var monthStr = (month<10 ? "0"+month : ""+month)
        var dayStr = (day<10 ? "0"+day : ""+day)
        console.log(typeof monthStr)
        console.log(typeof dayStr)
        console.log(getUrl(monthStr, dayStr))
        this.urlObj.url = getUrl(monthStr, dayStr)
     },
     getHistoryTodayData() {
        this.$store.commit('showLoading')
        this.$axios.get(`/proxy/proxy.do`, this.urlObj).then(res => {
            this.historyTodayData = res
            this.$store.commit('hideLoading')
        })
     }
 },
 created() {
    this.getDate()
    this.getHistoryTodayData()
 }
}
</script>

<style scoped lang="scss">
.history-today-content {
    font-size: 0.32rem;
    padding: 0.2rem;
}
</style>

<style>
.top01 {
    display: none;
}

.top02 {
    display: none;
}

.top03 {
    display: none;
}

.white {
    display: none;
}

.left {
    display: none;
}

.right {
    display: none;
}

.red {
    font-size: 0.48rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.2rem;

}

h2 {
    font-size: 0.4rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.2rem;
}

p {
    font-size: 0.28rem;
    line-height: 2;
    margin-bottom: 0.2rem;
}
</style>

