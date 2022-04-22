import { createRouter,createWebHistory} from 'vue-router'

import Home from "@/views/Home.vue";
import Information from "@/views/Information.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            name:Home,
        },
        {
            path:'/information',
            component:Information
        }
    ]
})

export default router