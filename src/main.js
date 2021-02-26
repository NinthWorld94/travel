import { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import Zui from './lib/z-ui'

createApp(App).use(router).use(store).use(Zui).use(VueAwesomeSwiper).mount('#app')
