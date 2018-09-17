/*
入口主要的JS
 */
import  Vue from 'vue'
import {Button} from 'mint-ui'
import  App from './App.vue'
import router from './router'
import  store from './store'
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.gif'

import './mock/MockServer'  //加载mockserver即可
import './filters'   //加载自定义过滤器

//注册全局组建标签
Vue.component(Button.name,Button)  //<mt-Button>

Vue.use(VueLazyLoad,{
  loading
})

new Vue({
  el: '#app',
  render: h=>h(App),
  router,
  store

})
