import { createApp } from 'vue'
import App from './App.vue'

import house_filter from './components/house_filter.vue'
import home_unlogin from './components/home_unlogin.vue'

// 使用 createApp API
const app = createApp(App)

// 全局注册组件
app.component('house_filter', house_filter)
app.component('home_unlogin', home_unlogin)

// 挂载 app
app.mount('#app')