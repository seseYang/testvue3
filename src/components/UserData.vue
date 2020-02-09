<template>
    <div>
        <van-sticky>
            <van-nav-bar
                    title="登录"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"

            />
        </van-sticky>
        <van-row style="background-color: #999999">
            <van-col span="20" offset="2">
                <van-col span="24">
                    <van-vol span="6" offset="9">
                        <van-uploader v-model="file">
                            <van-image
                                    width="100"
                                    height="100"
                                    lazy-load
                                    round
                                    :src="this.$root.userData.uId.icon"
                            />
                        </van-uploader>
                        <h6 style="color: #999999">点击更换头像</h6>
                    </van-vol>
                </van-col>
                <van-col span="24">

                </van-col>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "UserData"
        , data() {
            return {
                file: []
            }
        }
        , methods: {
            onClickLeft() {
                this.$root.index_bottomTbl = true;
                window.history.back(-1);
                // this.$router.push("/news")
            }
        }
    }
</script>

<style scoped>

</style>