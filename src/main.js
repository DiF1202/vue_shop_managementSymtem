/*
 * @Author: your name
 * @Date: 2021-08-30 19:45:32
 * @LastEditTime: 2021-08-31 15:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use(config => {
  //为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
