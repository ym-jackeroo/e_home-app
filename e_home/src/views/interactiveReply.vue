<template>
 <div class="interactive-reply-container">
    <Header></Header>

    <div class="comment-detail-wrap">
        <div class="comment-item-wrap">
            <div class="top clearfix">
                <img :src="header" alt="" class="fll">
                <div class="nickname fll">
                    {{username}}
                </div>
                <div class="time fll">
                    <img src="../img/表.png" alt="" class="fll">
                    <span class="fll">{{time}}</span>
                </div>
            </div>
            <div class="content">
                {{content}}
            </div>
        </div>

        <div class="reply-list-wrap">
            <div class="reply-item-wrap" v-for="(item, index) in replyData" :key="index">
                <div class="top clearfix">
                    <img :src="item.header" alt="" class="fll">
                    <div class="nickname fll">
                        {{item.username}}
                    </div>
                    <div class="time fll">
                        <img src="../img/表.png" alt="" class="fll">
                        <span class="fll">{{item.timeFormat}}</span>
                    </div>
                </div>
                <div class="content">
                    {{item.comment}}
                </div>
            </div>
        </div>

        <NoData></NoData>
    </div>
    <div class="comment-content">
        <input type="text" placeholder="评论内容" class="comment" v-model="commentData.comment">
        <input type="submit" value="评论" class="btn" @click="handleComment">
    </div>
 </div>
</template>

<script>
import qs from 'qs'
import {Toast} from 'mint-ui'
export default {
 data() {
 return {
    formData: {
        page: 1,
        rows: 1000,
        forum_id: ''
    },
    header: '',
    username: '',
    time: '',
    content: '',
    commentData: {
        comment: '',
        forum_id: this.$route.query.forumId
    },
    replyData: []
 }
 },
 components: {

 },
 methods: {
    handleBack() {
        history.go(-1);
    },
    getForumCommentItem() {
        let data = qs.stringify(this.formData)
        // this.$store.commit('showLoading')
        this.$axios.get('/forum/forumCommentList.do', this.formData).then(res => {
            console.log(res)
            this.replyData = res.rows.reverse()
            // this.$store.commit('hideLoading')
        })
    },
    handleComment() {
        let data = qs.stringify(this.commentData)
        this.$axios.post('/forum/addComment.do', data).then(res => {
            console.log(res)
            this.getForumCommentItem()
            Toast(res.msg)
            this.commentData.comment = ''
        })
    }
 },
 created() {
    this.header = this.$route.query.header
    this.username = this.$route.query.username
    this.time = this.$route.query.time
    this.content = this.$route.query.content
    this.formData.forum_id = this.$route.query.forumId
    this.getForumCommentItem()
 }
}
</script>

<style scoped lang="scss">
.interactive-reply-container {
    width: 100wh;
    height: 100vh;
    background: #efeff4;
}

.comment-detail-wrap {
    position: absolute;
    top: 0.88rem;
    left: 0;
    right: 0;
    background: #efeff4;
    margin-bottom: 1rem;

    .comment-item-wrap {
        padding: 0.32rem;
        background: #fff;
        margin: 0.2rem;

        .top {
            height: 0.92rem;

            img {
                width: 0.666rem;
                height: 0.666rem;
                border-radius: 50%;
            }

            .nickname {
                color: #333;
                font-size: 0.32rem;
                width: 4rem;
                margin-left: 0.2rem;
                line-height: 0.4rem;
            }

            .time {
                height: 0.42rem;
                width: 4rem;
                margin-left: 0.2rem;

                img {
                    padding: 0.09rem 0.2rem 0.09rem 0;
                    width: 0.24rem;
                    height: 0.24rem;
                }

                span {
                    font-size: 0.24rem;
                    color: #444;
                    line-height: 0.42rem;
                }
            }
        }

        .content {
            padding: 0.2rem 0;
            font-size: 0.34rem;  
            line-height: 0.4rem;              
        }
    }

    .reply-item-wrap {
        padding: 0.32rem;
        background: #fff;
        border: 1px solid #ddd;

        .top {
            height: 0.92rem;

            img {
                width: 0.666rem;
                height: 0.666rem;
                border-radius: 50%;
            }

            .nickname {
                color: #333;
                font-size: 0.32rem;
                width: 4rem;
                margin-left: 0.2rem;
                line-height: 0.4rem;
            }

            .time {
                height: 0.42rem;
                width: 4rem;
                margin-left: 0.2rem;

                img {
                    padding: 0.09rem 0.2rem 0.09rem 0;
                    width: 0.24rem;
                    height: 0.24rem;
                }

                span {
                    font-size: 0.24rem;
                    color: #444;
                    line-height: 0.42rem;
                }
            }
        }

        .content {
            padding: 0.2rem 0;
            font-size: 0.34rem;  
            line-height: 0.4rem;              
        }
    }
}

.comment-content {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.68rem;
    display: flex;
    justify-content: space-between;
    padding: 0.16rem;
    background: #fff;
    border: 0.02rem solid #ddd;

    input {
        outline: none;
        border: none;
    }

    .comment {
        height: 0.6rem;
        width: 6rem;
        border: 0.02rem solid #c50206;
        border-radius: 0.08rem;
        padding-left: 0.2864rem;
        padding-top: 0.04rem;
        color: #666;
    }

    .btn {
        padding: 0.12rem;
        width: 0.76rem;
        height: 0.7rem;
        background: #c50206;
        color: #fff;
        border-radius: 0.08rem;
    }
}

</style>
