import Vue from 'vue'
import VueRouter from "vue-router";
//挂载组件
import News from "../components/News";
import vido from '../components/vido';
import me from '../components/Me';
import details from '../components/newsDetails';

Vue.use(VueRouter);//使用router
const routes=[
    {path:"/news",component:News},
    {path:"/vido",component:vido},
    {path:"/Me",component:me},
    {path:"/details",component:details},
    //     children:[
    //         {path:"/my-msg",component:myMsg},
    //         {path:"/my-code",component:myCode},
    //     ]},
    {path:"/*",redirect:"/news"}
];
const router=new VueRouter({
    mode: 'history',
    routes
})
export default router;

