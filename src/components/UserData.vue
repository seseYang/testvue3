<template>
    <div>
        <van-sticky>
            <van-nav-bar
                    title="编辑资料"
                    left-text="返回"
                    right-text="修改"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"

            />
        </van-sticky>
        <van-row>
            <van-col span="22" offset="1" style="background-color: #ebebeb;padding: 1rem;">
                <van-col span="24">
                    <van-col span="8" offset="8">
                        <van-uploader :preview-image="false" :after-read="afterRead" v-model="file">
                            <van-image
                                    width="100"
                                    height="100"
                                    lazy-load
                                    round

                                    :src="iconImg"
                            />
                        </van-uploader>
                        <h6 style="color: #999999;text-align: center;">点击更换头像</h6>
                    </van-col>
                    <van-col span="24">
                        <h6>昵称</h6>
                        <van-cell-group style="background-color: unset;">
                            <van-field style="background-color: unset;"
                                       v-model="name" placeholder="有特点的名字更容易被大家记住哦"/>
                        </van-cell-group>
                        <p style="color: #999999">仅支持中英文、数字、下划线</p>
                    </van-col>
                    <van-col span="24">
                        <h6>简介</h6>
                        <van-cell-group style="background-color: unset;">
                            <van-field style="background-color: unset;"
                                       maxlength="50" v-model="introduce" placeholder="写段描述一下自己吧,限制50字"/>
                        </van-cell-group>

                    </van-col>
                    <van-col span="24" style="text-align: center; color: #999999">以上信息每自然月仅可修改一次，请统一修改提交</van-col>
                </van-col>
            </van-col>
            <van-col span="24">
                <van-field
                        label="性别"
                        readonly
                >
                    <van-button :class="{btn_bankgrund: sex=='男'}" @click="setSex('男')" slot="button" size="mini" round
                                type="default">男
                    </van-button>
                    <van-button :class="{btn_bankgrund: sex=='女'}" @click="setSex('女')" slot="button" size="mini" round
                                type="default">女
                    </van-button>
                </van-field>
                <van-cell @click="setbirthday" title="生日" is-link value="仅向访客展示星座"/>
                <van-popup v-model="showDate" :style="{width:'70%'}">
                    <van-datetime-picker
                            v-model="birthday"
                            type="date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            @confirm="closeDate"
                            @cancel="close"
                    />
                </van-popup>
                <van-cell @click="setAddress" title="地区" is-link value="选择你的常驻地"/>
                <van-popup v-model="showAddress" :style="{width:'70%'}">
                    <van-area
                            :area-list="areaList"
                            @cancel="close"
                            @confirm="closeAddress"
                    />
                </van-popup>
                <van-field v-model="phone" label="手机号" placeholder="请输入手机号"/>
            </van-col>

        </van-row>
    </div>
</template>

<script>
    import {DatetimePicker} from 'vant';
    import areaList from "../model/area";

    let formData = new FormData();
    export default {
        name: "UserData"
        , data() {
            return {
                file: []
                , areaList
                , showDate: false//显示选择时间
                , showAddress: false//显示选着地址
                , minDate: new Date(1839, 1, 1)
                , maxDate: new Date(2089, 12, 32)
                , birthday: ""
                , iconImg: ""
                , name:  ''
                , introduce:  ''
                , sex:  ''
                , address:  ''
                , id:  ''
                , phone:  ''
            }
        }
        , created() {
            if (this.$root.userData.uId==undefined|| this.$root.userData.uId==null){
                this.$router.push("Me")
            }
            this.birthday=this.$root.userData.uId.birthday;
            this.iconImg=this.$root.userData.uId.icon;
            this.name=this.$root.userData.uId.name;
            this.introduce=this.$root.userData.uId.introduce;
            this.sex=this.$root.userData.uId.sex;
            this.address=this.$root.userData.uId.address;
            this.id=this.$root.userData.uId.id;
            this.phone=this.$root.userData.uId.phone;
        }
        , methods: {
            onClickLeft() {
                this.$root.index_bottomTbl = true;
                window.history.back(-1);
                // this.$router.push("/news")
            }
            , afterRead(file) {
                //图片上传位置
                this.iconImg = file.content;
                formData.append("iconFile", file.file);
            }
            , onClickRight() {
                let config = {
                    //添加请求头
                    headers: {"Content-Type": "multipart/form-data"},
                    //添加上传进度监听事件
                    // onUploadProgress: e => {
                    //     var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                    //     this.progress = completeProgress;
                    // }
                };
                //执行信息修改
                formData.append("name", this.name);
                formData.append("introduce", this.introduce);
                formData.append("birthday", new Date(this.birthday));
                formData.append("sex", this.sex);
                formData.append("address", this.address);
                formData.append("id", this.id);
                formData.append("phone", this.phone);
                this.$axios.post(this.beaspath + "login/user/update", formData, config).then(res => {
                    window.location.reload();
                    console.log(res);
                }).catch(error => {
                    console.log(error)
                })
            }
            , setSex(sex) {
                //设置性别
                this.sex = sex;
            }
            , setbirthday() {
                this.showDate = true;
            }
            , close(value) {
                this.showDate = false;
                this.showAddress = false;
            }
            , closeDate(value) {
                this.birthday = value;
                this.showDate = false;
            }
            , setAddress() {
                this.showAddress = true;
            }
            , closeAddress(value) {
                this.address = "";
                value.forEach((item) => {
                    this.address += item.name;
                    console.log(item.name)
                })
                this.showAddress = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn_bankgrund {
        background-color: #137bff;
        color: #FFF;

    }
</style>