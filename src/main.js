import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Edit, View ,ChatRound , Food , CreditCard } from '@element-plus/icons-vue'

const app = createApp(App)
// for(const name in EleIcons){
//     app.component(icon,EleIcons(icon))
// }
app.component('view',View)
app.component('chatRound',ChatRound)
app.component('edit',Edit)
app.component('food',Food)
app.component('creditCard', CreditCard )
app.use(ElementPlus)

app.mount('#app')
