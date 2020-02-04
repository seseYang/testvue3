<template>
    <div>
        <van-row >
            <van-col class="img-siae" span="24">
                <van-col span="3">
                    <img class="img-padding-left" src="../assets/svg/timg.png">
                </van-col>
                <van-col span="18">
                    <van-search placeholder="请输入搜索关键词"
                                shape="round"
                                v-model="value"/>
                </van-col>
                <van-col span="3">
                    <img class="img-padding-left" src="../assets/svg/headset.png">
                </van-col>
            </van-col>
            <van-col span="24">
                <van-col span="21">
                    <van-tabs @click="onClick" color="#137bff" swipeable animated>
                        <van-tab title-style="width: 4rem;" v-for="index in haderData" :title="index">
                            <van-swipe :autoplay="3000" :height="150">
                                <van-swipe-item v-for="(image, index) in images" :key="index">
                                    <img v-lazy="image"/>
                                </van-swipe-item>
                            </van-swipe>
                            <van-list class="content-auto"
                                      v-model="loading"
                                      :finished="finished"
                                      finished-text="没有更多了"
                                      @load="onLoad">

                                <van-row @click="newsDateils(item)" v-for="item in list">
                                    <van-col span="14">
                                        <a v-text="item.content" class="van-multi-ellipsis--l3 font-set">类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容类容</a>
                                        <p span="24">
                                            <van-col span="5" v-text="item.uId.name">发布人</van-col>
                                            <van-col span="5" v-if="item.commenttblList.length>0">
                                                {{item.commenttblList.length}}评
                                            </van-col>
                                            <van-col v-text="item.releaseTime">发布时间</van-col>
                                        </p>
                                    </van-col>
                                    <van-col span="10">
                                        <van-image
                                                width="100%"
                                                height="100"
                                                lazy-load
                                                src="https://data.photo-ac.com/data/thumbnails/0b/0b0b510d2e4a57c0d543ee8df75558b0_w.jpeg">

                                        </van-image>
                                    </van-col>
                                </van-row>
                            </van-list>
                        </van-tab>
                    </van-tabs>
                </van-col>
                <van-col span="3">
                    <van-icon size="2rem" style="margin:1rem 0rem 0rem 1.55rem" name="plus"/>
                </van-col>
            </van-col>
        </van-row>


    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                list: [],
                loading: false,//自定义底部加载中提示
                finished: false,//自定义加载完成后的提示文案
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                value: '',
                haderData: ['要闻', '视频', '推荐', '成都', '娱乐', '体育', '军事', '游戏'
                    , 'NBA', '国际', '科技', '财经', '汽车', '时尚', '星座',
                    '图片', '新时代', '眼界', '科普', '数码', '情感']
            }
        },
        methods: {
            onClick(name, title) {
                this.$toast(title);
            },
            onLoad() {
                const _this = this;
                const size = 1;
                var params = this.$qs.stringify({page: _this.list.length + 1, limit: size})

                this.$axios({
                    method: "post"
                    , url: "http://127.0.0.1:8848/news/main/news/findAll"
                    , data: params
                })
                    .then(function (datas) {

                        let data = datas.data;
                        console.log(data);
                        let array = data.value.content;

                        for (var i = 0; i < array.length; i++) {
                            _this.list.push(array[i]);
                        }
                        _this.loading = false;

                        if (data.value.last || data.value == null) {
                            _this.finished = true;
                            return;
                        }
                    }).catch(function (error) {
                    console.log(error);
                });


            },
            newsDateils(data){
               this.$router.push({name:"details",params:data})
            }

        }
    }
</script>

<style lang="scss" scoped>
    html {
        overflow: hidden;
    }

    .font-set {
        font-size: 1.52rem;
    }

    .swipe-size {
        height: 15rem;
    }

    .van-swipe__track {
        img {

            height: 15rem;
        }
    }

    //设置中间类容
    .content-auto {
        padding: 0.32rem;
        overflow-y: auto;
        height: 60vh;
    }

    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: transparent !important;
    }

    .mint-searchbar {
        background-color: transparent !important;
        padding: 0rem;
    }

    .img-siae {
        .img-padding-left {
            margin: 0.41rem -0.09rem;
            width: 3.55rem;
            height: 3.55rem;
            margin-left: 1rem;
        }



        .van-search {
            padding: 0.44rem;
            color: #137bff;
        }
    }

    //设置中间类容
    .content-auto {
        padding: 0.32rem;
        overflow-y: auto;
        height: 56vh;
    }
</style>