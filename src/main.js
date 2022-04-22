import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Edit, View ,ChatRound , Food , CreditCard , ArrowUpBold , Bell, Moon, MostlyCloudy} from '@element-plus/icons-vue'

const app = createApp(App)
// for(const name in EleIcons){
//     app.component(icon,EleIcons(icon))
// }
app.use(router) //使用路由

app.component('view',View)
app.component('chatRound',ChatRound)
app.component('edit',Edit)
app.component('food',Food)
app.component('creditCard', CreditCard )
app.component('arrow-up-bold',ArrowUpBold)
app.component('bell',Bell)
app.component('moon',Moon)
app.component('mostly-cloudy',MostlyCloudy)
app.use(ElementPlus)

app.mount('#app')
