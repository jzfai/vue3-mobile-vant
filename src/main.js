import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//import vant doc :  https://vant-contrib.gitee.io/vant/v3/#/zh-CN/advanced-usage
import 'amfe-flexible/index.js'

//'global import' More than  'part import' 200k in page init
//global import
import Vant from 'vant'
import 'vant/lib/index.css'
app.use(Vant)
//part import by you need
// import vantUtils from '@/utils/vantUtils'
// app.use(vantUtils)
//import router
app.use(router)
import router from './router'

//import vuex
import store from './store'
app.use(store)

//import axios req
import axiosReq from '@/utils/axiosReq'
app.config.globalProperties.$axiosReq = axiosReq

// global mixin not recommend to use , change to hooks
// import commonMixin from '@/mixins/commonMixin'
// app.mixin(commonMixin)
// import routerMixin from '@/mixins/routerMixin'
// app.mixin(routerMixin)
// import vantMixin from '@/mixins/vantMixin.js'
// app.mixin(vantMixin)

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

//global mount moment-mini
import $momentMini from 'moment-mini'
app.config.globalProperties.$momentMini = $momentMini

//import global directive
import directive from '@/directive'
directive(app)

// global css
import '@/styles/index.scss'

//import router  intercept
import './permission'

app.mount('#app')
