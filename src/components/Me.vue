<template>
    <div class="content-me">
        <van-row>
            <van-col style="color: #FFF" span="5" offset="19">
                <van-col span="12">
                    <van-icon class="iconfont" class-prefix='icon' name="iconset0454" size="20"/>
                </van-col>
                <van-col span="12">
                    <van-icon class="iconfont" class-prefix='icon' name="shezhi" size="20"/>
                </van-col>

            </van-col>
            <van-col v-if="!this.$root.loginState" span="24">
                <van-col span="24">
                    <van-col span="4" offset="7">
                        <van-icon class="iconfont" @click="loginComm('微信')" class-prefix="icon" name="weixin-copy" size="5rem" color="#eee9ed"/>
                    </van-col>
                    <van-col style="padding-top: 0.55rem" span="4" offset="2">
                        <van-icon @click="loginComm('QQ')" class="iconfont" class-prefix="icon" name="qq" size="4.44rem" color="#eee9ed"/>
                    </van-col>
                </van-col>
                <van-col span="24">
                    <h3 style="text-align: center;color: #FFF">一键登录，赢取神秘大奖</h3>
                </van-col>

            </van-col>
            <van-col v-if="this.$root.loginState" span="24">

                <van-col span="6" offset="2">

                    <van-image
                            round
                            width="8rem"
                            height="8rem"
                            :src="this.$root.userData.uId.icon"
                    >
                        <template v-slot:loading>
                            <van-loading type="spinner" color="#1989fa" size="20"/>
                        </template>
                        <template v-slot:error>加载失败</template>
                    </van-image>
                </van-col>
                <van-col class="me-name-fu" span="10" >
                    <h3 v-text="this.$root.userData.uId.name">Name</h3>
                    <a @click="user">查看个人主页</a>
                </van-col>
            </van-col>
            <van-col span="24">
                <van-tabbar class="me-top-tatle" v-model="active" @change="onChange">
                    <van-tabbar-item name="消息">
                        <van-icon class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.xiaoxi:icon.xiaoxi'/>
                        <span>消息</span>
                    </van-tabbar-item>
                    <van-tabbar-item name="历史" icon="clock-o">历史</van-tabbar-item>
                    <van-tabbar-item name="收藏">
                        <van-icon class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.shouchang:icon.shouchang'/>
                        <span>收藏</span>
                    </van-tabbar-item>
                    <van-tabbar-item name="已推">
                        <van-icon class="iconfont" class-prefix='icon' slot="icon"
                                  slot-scope="props" :name='props.active ? icon.huojian:icon.huojian'/>
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
    import Bus from "../model/Bus";

    export default {
        name: "Me",
        data() {
            return {
                active: ""
                ,img:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg"
                , icon: {
                    xiaoxi: 'tengxunwang',
                    shouchang: "shoucang",
                    huojian: "houtai-huojian"
                }
            }
        }
        ,created() {
        }
        , methods: {
            onChange(index) {
                console.log(this.active)
                Notify({type: 'primary', message: index});
            }
            ,loginComm(data){
                //data 跳转到对应的登陆页面
                //暂时模仿qq登录
                this.$root.index_bottomTbl=false;
                this.$router.push("login")
            }
            ,user(){
                this.$root.index_bottomTbl=false;
                this.$router.push("userData")
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

        .me-top-tatle { //头部标签
            position: unset;
            background-color: unset;

            .van-tabbar-item {
                color: #fff;
            }
        }

        .div-fillet {
            background-color: #FFF;
            border-radius: 2.22rem 2.22rem 0rem 0px;
            height: 56vh;
        }
    }

</style>