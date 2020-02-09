<template>
    <div>
        <!--            right-text="按钮"-->
        <!--            @click-right="onClickRight"-->
        <van-sticky>
            <van-nav-bar
                    title="标题"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"

            />
        </van-sticky>
        <van-row class="content-Details">


            <van-col span="24">
                <h2 class="van-multi-ellipsis--l2" v-text="item.newsTitle">

                </h2>
            </van-col>
            <van-col span="24">
                <p>
                    <van-skeleton
                            avatar
                            :row="1"
                            :loading="loading"
                    >
                        <van-col span="2">
                            <van-image
                                    round
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                        </van-col>
                        <van-col span="18">
                            <span class="other-content">
                                <span v-text="item.uId.name"></span>

                                <span v-text="item.releaseTime"></span>
                            </span>
                        </van-col>
                        <van-col span="4">
                            <van-button round size="mini" icon="plus" type="info">关注</van-button>
                        </van-col>
                    </van-skeleton>
                </p>
            </van-col>
            <van-col span="24">
                <p style="font-size: 1.55rem" v-html="item.content"></p>

            </van-col>
            <!--            图片显示-->
            <van-row>
                <van-image
                        width="100%"
                        height="200"
                        lazy-load
                        :src="itemimg.findPath"
                        v-for="itemimg in item.imagesList"
                >
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20"/>
                    </template>
                    <template v-slot:error>加载失败</template>
                </van-image>
            </van-row>
            <!--            评论区域-->
            <van-row>
                <br>
                <h5>全部评论({{item.commenttblList.length}})</h5>
                <van-col span="24">
                    <h6 style="text-align: center" v-if="item.commenttblList.length==0">暂时还没有评论。</h6>
                    <van-skeleton title avatar :row="3"
                                  :loading="loading2" v-for="da in item.commenttblList">
                        <van-col span="5">
                            <van-image
                                    width="5rem"
                                    height="5rem"
                                    lazy-load
                                    round
                                    :src="da.uId.icon"

                            />
                        </van-col>
                        <van-col span="10">
                            <span style="vertical-align: -2.3rem;" v-text="da.commentContent"></span>
                        </van-col>


                    </van-skeleton>

                </van-col>
            </van-row>
        </van-row>

        <van-field
                v-model="comm"
                placeholder="我来说两句"
        >
            <van-button slot="button" @click="submit" round size="small" type="primary">评论</van-button>
        </van-field>
    </div>
</template>

<script>
    import {Toast} from "vant";
    import Bus from "../model/Bus";

    export default {
        name: "NewsDetails"
        , data() {
            return {
                item: this.$route.params,
                loading: true,
                loading2: true,
                contentArr: []
                , comm: ""
            }
        },
        created() {
            this.loading2 = false;
            const _this = this;
            if (this.item.id !== undefined) {
                _this.item.content = _this.item.content.replace(/\n/gm, "<br/>")
                _this.loading = false;
            }
        }
        , methods() {
            console.log(this.$root.active);
        }
        , methods: {
            onClickLeft() {
                this.$root.index_bottomTbl = true;
                window.history.back(-1);
            }, submit() {
                if (this.$root.userID == undefined || this.$root.userID == null|| this.$root.userID =="") {
                    this.$router.push("Me");
                    return false;
                } else {
                    this.$axios.post(this.beaspath + "main/comm/insert", this.$qs.stringify({
                        commentContent: this.comm,
                        NewsId: this.item.id,
                        sessionId: this.$root.userID
                    }))
                        .then(res => {
                            console.log(res)
                        }).catch(error => {
                        console.log(error);
                    })
                }
            }
            // onClickRight() {
            //     Toast('按钮');
            // }

        }

    }
</script>

<style lang="scss" scoped>

    .content-Details {
        padding: 0.8rem;
        height: 86vh;
        overflow: auto;

        .other-content {
            padding: 0.55rem 0rem;
            vertical-align: -0.3rem;

            span {
                margin: 0rem 0.2rem;
            }
        }
    }

</style>