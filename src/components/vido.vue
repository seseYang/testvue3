<template>
    <div>
        <van-row>
            <van-col span="24">
                <iframe style="height: 100%; width: 100%"
                        src='http://player.youku.com/embed/XMjcwNjg5MTk2' frameborder=0>
                </iframe>
                <van-col span="24">
                    <van-col span="14">
                        <van-col span="6">
                            <van-image
                                    round
                                    width="4rem"
                                    height="4rem"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                        </van-col>
                        <van-col span="18">
                            <div class="van-ellipsis ">这是一段最多显示一行的文字，多余的内容会被省略</div>
                        </van-col>
                    </van-col>
                    <van-col span="10"></van-col>
                </van-col>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "vido",
        data() {
            return {
                msg: '这是视频'
            }
        }
    }
</script>

<style scoped>

</style>