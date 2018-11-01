<template>
 <div class="life-container">
    <Header></Header>

     <div class="banner-wrap">
         <img src="../img/timg.jpg" alt="">
     </div>

     <div class="sudoku-wrap">
         <div class="row1">
             <router-link class="political-study" :to="{path: '/politicalstudy', query: {type: 8}}">
                <img src="../img/icon1.png" alt="">
                <div class="sudoku-title">政治学习</div>
            </router-link>
            <router-link class="thinking-report" to="/login">
                <img src="../img/icon2.png" alt="">
                <div class="sudoku-title">思想工作</div>
            </router-link>
            <router-link class="result-summary" to="/login">
                <img src="../img/icon3.png" alt="">
                <div class="sudoku-title">心得总结</div>
            </router-link>
         </div>
         <div class="row2">
             <router-link class="democratic-appraisal" to="#">
                <img src="../img/icon4.png" alt="">
                <div class="sudoku-title">民主评议</div>
            </router-link>
            <router-link class="member-group" to="/findGroup">
                <img src="../img/icon5.png" alt="">
                <div class="sudoku-title">流动党员找组织</div>
            </router-link>
         </div>
     </div>
 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 components: {

 },
 methods: {
    handleBack() {
        history.go(-1);
    },
    getData() {
        this.$axios.get()
    }
 }
}
</script>

<style scoped lang="scss">

.banner-wrap {
    width: 7.5rem;
    height: 3.7226rem;
    
    img {
        width: 7.5rem;
        height: 3.7226rem;
    }
}

.sudoku-wrap {
    width: 7.5rem;
    height: 6.2rem;

    img {
        width: 1.7rem;
        height: 1.7rem;
    }

    .sudoku-title {
        color: #666;
        font-size: 0.28rem;
        text-align: center;
    }

    a {
            text-decoration: none;
        }
    
    .row1 {
        display: flex;

        .political-study {
            width: 1.7rem;
            height: 2.01rem;
            padding: 0.4rem;
        }   

        .thinking-report {
            width: 1.7rem;
            height: 2rem;
            padding: 0.4rem;
        }

        .result-summary {
            width: 1.7rem;
            height: 2rem;
            padding: 0.4rem;
        }
    }

    .row2 {
        display: flex;

        .democratic-appraisal {
            width: 1.7rem;
            height: 2rem;
            padding: 0.4rem;
        }

        .member-group{
            width: 1.7rem;
            height: 2rem;
            padding: 0.4rem;
        }
    }
}

</style>
