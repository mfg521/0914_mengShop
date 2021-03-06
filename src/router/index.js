/*
路由器对象模块
 */

import  Vue from 'vue'
import  VueRouter from 'vue-router'



//import  Msite from '../pages/MSite/MSite.vue'
//import  Search from '../pages/Search/Search.vue'
//import  Order from '../pages/Order/Order.vue'
//import  Profile from '../pages/Profile/Profile.vue'

//返回路由组件的函数，只有执行此函数才会加载路由函数
//这个函数在请求对应的路由路径的时候才会执行

const  Msite=()=>import('../pages/MSite/MSite.vue')
const  Search=()=>import('../pages/Search/Search.vue')
const  Order=()=>import('../pages/Order/Order.vue')
const  Profile=()=>import('../pages/Profile/Profile.vue')



import  Login from '../pages/Login/Login.vue'
import  Shop from '../pages/Shop/Shop'
import  ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import  ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import  ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'








//声明使用插件
Vue.use(VueRouter)

export  default  new VueRouter({
  routes: [
    {
      path: '/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component:Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login

    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path : '/shop/goods',
          component:ShopGoods
        },{
          path : '/shop/ratings',
          component:ShopRatings
        },{
          path : '/shop/info',
          component:ShopInfo
        },
        {
          path : ' ',
          redirect:'/shop/goods'
        }
      ]

    }
  ]
})
