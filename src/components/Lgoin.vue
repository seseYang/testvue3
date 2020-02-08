<template>
    <div>
        <van-field
                v-model="code"
                clearable
                autofocus
                label="QQ号/手机号/邮箱"
                left-icon="music-o"
                placeholder="显示清除图标"
        />
        <van-field
                clearable
                label="文本"
                v-model="password"
                type="password"
                placeholder="显示清除图标"
        />
    </div>
</template>

<script>
    export default {
        name: "Lgoin"
        ,data(){
            return{
                code:""
                ,password:""
            }
        }
    }
</script>

<style scoped>

</style>