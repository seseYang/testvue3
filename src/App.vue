<template>
    <div id="app">


        <van-row >
            <van-col class="content-auto" span="24">
                <router-view></router-view>
            </van-col>
        </van-row>

        <van-tabbar v-if="this.$root.index_bottomTbl"  v-model="active">
            <van-tabbar-item to="/news" name="news" info="">
                <span>新闻</span>
                <img slot="icon" v-if="active!='news'" src="./assets/svg/news.png">
                <img slot="icon" v-if="active=='news'" src="./assets/svg/news-n.png">
            </van-tabbar-item>
            <van-tabbar-item to="/vido" name="vido" info="">
                <span>视频</span>

                <img slot="icon" v-if="active!='vido'" src="./assets/svg/vido.png">
                <img slot="icon" v-if="active=='vido'" src="./assets/svg/vido-n.png">
            </van-tabbar-item>
            <van-tabbar-item name="hot" info="">
                <span>热推</span>

                <img slot="icon" v-if="active!='hot'" src="./assets/svg/hot.png">
                <img slot="icon" v-if="active=='hot'" src="./assets/svg/hot-n.png">
            </van-tabbar-item>
            <van-tabbar-item to="/Me" name="Me" info="">
                <span>我</span>
                <img slot="icon" v-if="active!='Me'" src="./assets/svg/me.png">
                <img slot="icon" v-if="active=='Me'" src="./assets/svg/me-n.png">
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Bus from "./model/Bus";
    export default {
        name: "app",
        data() {
            return {
                active: 'news'
                ,bottomTbl:true
            }
        }
        ,mounted(){
            Bus.$on('bottomTbl',(data)=>{
                this.bottomTbl=data;
            })
        }
        ,methods: {
            abc(){
                console.log(this.active);
            }

        }
    }

</script>

<style lang="scss">
    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: transparent !important;
    }

    .mint-searchbar {
        background-color: transparent !important;
        padding: 0rem;
    }

    .img-siae {
        img {
            margin: 0.41rem 0.91rem;
            width: 3.55rem;
            height: 3.55rem;
        }

        .van-search {
            padding: 0.44rem;
            color: #137bff;
        }
    }


</style>
