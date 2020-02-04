<template>
    <div class="content-me">
        <van-row>
            <van-col style="color: #FFF" span="5" offset="19">
                <van-col span="12">
                    <van-icon class="iconfont" class-prefix='icon' name="iconset0454" size="20" />
                </van-col>
                <van-col span="12">
                    <van-icon class="iconfont" class-prefix='icon' name="shezhi" size="20" />
                </van-col>

            </van-col>
            <van-col span="4">

                <van-image
                        round
                        width="8rem"
                        height="8rem"
                        src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg"
                >
                    <template v-slot:loading>
                        <van-loading type="spinner" color="#1989fa" size="20"/>
                    </template>
                    <template v-slot:error>加载失败</template>
                </van-image>
            </van-col>
            <van-col class="me-name-fu" span="10" offset="2">
                <h3>Name</h3>
                <a>查看个人主页</a>
            </van-col>
            <van-col span="24">
                <van-tabbar class="me-top-tatle" v-model="active" @change="onChange">
                    <van-tabbar-item name="消息" >
                        <van-icon  class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.xiaoxi:icon.xiaoxi' />
                        <span>消息</span>
                    </van-tabbar-item>
                    <van-tabbar-item name="历史" icon="clock-o">历史</van-tabbar-item>
                    <van-tabbar-item name="收藏" >
                        <van-icon class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.shouchang:icon.shouchang' />
                        <span>收藏</span>
                    </van-tabbar-item>
                    <van-tabbar-item name="已推">
                        <van-icon class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.huojian:icon.huojian' />
                        <span>已推</span>
                    </van-tabbar-item>
                </van-tabbar>

            </van-col>
            <van-col span="24">
                <div class="div-fillet"></div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    // import Notify from "vant/lib/notify";

    import Notify from "vant/lib/notify";

    export default {
        name: "Me",
        data() {
            return {
                active:"",
                icon: {
                    xiaoxi: 'tengxunwang',
                    shouchang:"shoucang",
                    huojian:"houtai-huojian"
                }
            }
        },
        methods: {
            onChange(index) {
                console.log(this.active)
                Notify({type: 'primary', message: index});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content-me {
        background-image: linear-gradient(to bottom right, #AFEEEE 35%, #245bff);

        .me-name-fu {
            padding-top: 2rem;
            color: #666666;
        }

        .me-top-tatle {//头部标签
            position: unset;
            background-color: unset;
            .van-tabbar-item{
                color: #fff;
            }
        }
        .div-fillet{
            background-color: #FFF;
            border-radius: 2.22rem 2.22rem 0rem 0px;
            height: 56vh;
        }
    }

</style>