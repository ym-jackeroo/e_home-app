<template>
 <div class="person-score-container">
     <Header></Header>
     <div class="score-wrap">
        <span>{{score}}</span>
     </div>
     <div class="score-detail-wrap">
         <router-link to="/scoreDetail">
             <img src="../img/lxjf.png" class="img-left fll">
             <div class="fll">积分明细</div>
             <img src="../img/right.png" class="img-right flr">
         </router-link>
     </div>

     <div class="regulation-wrap">
      <div class="regulation-item" style="background: rgb(238, 238, 238);">
        <div class="name" style="color: #444">积分规则</div>
        <div class="value">
          <img src="../img/wenhao.png" style="width:0.4rem;height:0.4rem;">
        </div>
      </div>
      <div class="regulation-item">
        <div class="name">登录APP</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">完善个人信息</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">查看积分</div>
        <div class="value">1</div>
      </div>
      <div class="regulation-item">
        <div class="name">按时缴纳党费</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">查看通知</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">了解学院工作动态</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">上交思想汇报经审核通过</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">主动学习相关文件</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">认真撰写心得总结并上交，经审核通过</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">提交个人总结，并参与评议</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">积极参与互动</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">学习党建知识</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">学习党史</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">创先争优事迹</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">学党章，学习近平总书记系列讲话</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">用镜头记录两学一做过程中令人感动的人和事</div>
        <div class="value">3</div>
      </div>
      <div class="regulation-item">
        <div class="name">关注并积极参与特色活动</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">制度化、常态化建设</div>
        <div class="value">5</div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
     score: 0
 }
 },
 components: {

 },
 methods: {
     getScore() {
         this.$axios.get('/user/userInfo.do').then(res => {
             console.log(res)
             this.score = res.data.totalScore
         })
     }
 },
 created() {
     this.getScore()
 }
}
</script>

<style scoped lang="scss">
.score-wrap {
    position: relative;
    width: 100%;
    height: 2.8956rem;
    background-image: url('../img/score.png');
    background-size: 100% 100%;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 0.32rem;
    }
}

.score-detail-wrap {
    height: 0.64rem;
    margin-top: 0.08rem;
    padding: 0.2rem;
    border: 0.02rem solid #ddd;

    a {
        display: block;
        height: 0.64rem;
        text-decoration: none;

        .img-left  {
            width: 0.64rem;
            height: 0.64rem;
        }

        div {
            font-size: 0.32rem;
            color: #666;
            margin-left: 0.2rem;
            line-height: 0.64rem;
        }

        .img-right {
            width: 0.1534rem;
            margin-top: 0.2005rem;
        }
    }
}

.regulation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.7rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #e1e1e1;

  .name {
    font-size: 14px;
    color: rgb(153,153,153);
  }

  .value {
    display: flex;
    align-items: center;
    color: #f00;
    font-size: 0.3rem;

  }
}

</style>
