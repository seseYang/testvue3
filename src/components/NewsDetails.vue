<template>
    <div class="content-Details">
        <van-row>
            <van-col span="24">
                <h2 class="van-multi-ellipsis--l2" v-text="item.newsTitle">

                </h2>
            </van-col>
            <van-col span="24">
                <p >
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
                            <span class="other-content" >
                                <span v-text="item.uId.name"></span>

                                <span v-text="item.releaseTime"></span>
                            </span>
                        </van-col>
                        <van-col span="4">
                            <van-button round size="mini"  icon="plus" type="info">关注</van-button>
                        </van-col>
                    </van-skeleton>
                </p>
            </van-col>
            <van-col span="24">
                <p v-html="item.content"></p>

            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "NewsDetails"
        ,data(){
            return{
                item:this.$route.params,
                loading: true,
                contentArr:[]
            }
        },
        created(){
            const _this=this;
            if(this.item.id!==undefined){
                console.log(_this.item.content.length)
                _this.item.content=_this.item.content.replace(/\n/gm,"<br/>")
                _this.loading=false;
            }
            if(_this.item.imagesList.length>0){
                let imgIndex=_this.item.imagesList.length/_this.content.length;
            }
        },
        methods:{


        }
    }
</script>

<style lang="scss" scoped>

    .content-Details{
        padding: 0.8rem;

        .other-content{
            padding: 0.55rem 0rem;
            vertical-align: -0.3rem;
            span{
                margin: 0rem 0.2rem;
            }
        }
    }

</style>