import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

//mint ui 插件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import {Field} from "mint-ui";

Vue.use(Mint);
Vue.component(Field.name, Field);
//mint ui end

//bootstrap css引用
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap end
//引入阿里巴巴矢量图标
import './assets/icon/iconfont.css'
//矢量图标 end


//axios 请求插件 get,post 。。。
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import qs from 'qs'

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
//axios end


//自己封装的router
import router from "./router/router";


Vue.prototype.beaspath = "http://192.168.43.171:8848/news/";
Vue.use(VueResource);//使用Resource
//router end
//vant ui
import Vant from 'vant';
import 'vant/lib/index.css';
import { DatetimePicker } from 'vant';
Vue.use(Vant);
Vue.use(DatetimePicker);
//vant end
Vue.config.productionTip = false;

//全局方法

new Vue({
    router//实例化router
    , data() {
        return {
            userData: ""//登录用户信息
            , userID: ""//登录toking
            , loginState: false//登录状态
            ,index_bottomTbl:true//关闭屏幕下边的标签栏
        }
    }
    , render: h => h(App),
}).$mount('#app')
