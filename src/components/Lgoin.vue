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
        <van-col span="18" offset="3">
            <van-field
                    v-model="code"
                    clearable
                    autofocus
                    placeholder="QQ号/手机号/邮箱"
            />
            <van-field
                    clearable
                    v-model="password"
                    type="password"
                    placeholder="请输入密码"
                    @keyup.13="login()"
            />
            <h5 @click="register" style="text-align: right;color: #14a3cf">注册账号</h5>
            <van-button @click="login()" style="margin-top: 3rem" round block size="20" type="info">登录</van-button>
        </van-col>
    </div>
</template>

<script>
    import {Dialog} from "vant";

    export default {
        name: "Lgoin"
        , data() {
            return {
                code: ""
                , password: ""
            }
        }
        , methods: {
            onClickLeft() {
                window.history.back(-1);
                // this.$router.push("/news")
            }
            , login() {
                let _this = this;
                if (this.password == "") {
                    Dialog.alert({
                        message: '请输入密码'
                    });
                    return false;
                } else if (this.code == "") {
                    Dialog.alert({
                        message: '请输入账号'
                    });
                    return false;
                }

                this.$axios({
                    method: "post"
                    , url: this.beaspath + "login/acc/login"
                    , data: this.$qs.stringify({acc: this.code, pwd: this.password})
                }).then(function (res) {
                    let data = res.data;
                    if (!data.state) {
                        Dialog.alert({
                            message: data.msg
                        });
                        return false;
                    }
                    _this.$root.userData = data.value;
                    _this.$root.loginState = data.state;
                    _this.$root.userID = data.toking;
                    _this.$root.index_bottomTbl = true;
                    window.history.back(-1)
                }).catch(function (err) {

                })
            }
            , register() {
                this.$root.index_bottomTbl = false;
                this.$router.push("register")
            }
        }
    }
</script>

<style scoped>

</style>