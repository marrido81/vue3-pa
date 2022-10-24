import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// 导入antd message 样式
import 'ant-design-vue/es/message/style/css'



const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Antd)

app.mount('#app')
