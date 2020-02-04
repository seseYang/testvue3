<template>
    <div>
        <van-row>
            <van-col span="24">
                <h2 class="van-multi-ellipsis--l2" v-text="title"></h2>
            </van-col>
            <van-col span="24">
                <p v-text="other">
                    <van-skeleton
                            title
                            avatar
                            :row="3"
                            :loading="loading"
                    >
                        <div>实际内容</div>
                    </van-skeleton>
                </p>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "NewsDetails"
        ,data(){
            return{
                title:"默认占位标题",
                other:"",
                loading: true
            }
        },
        methods(){
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>