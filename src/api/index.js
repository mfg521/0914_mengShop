/*
包含n个接口请求函数的模块
 */
  import  ajax from './ajax'
import Mock from "mockjs";
import data from "../mock/data";
  //const BASE_URL='http://localhost:4000'
  const  BASE_URL='/api'

  //1、根据经纬度获取位置详情]
  export  const reqAddress =(geohsh)=>ajax(`${BASE_URL}/position/${geohsh}`)

  //2、获取食品分类列表
  export  const reqFootCategorys=()=>ajax(BASE_URL+'/index_category')

  //3、根据经纬度获取商铺列表
  export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})

  //3、根据经纬度和关键字搜索商铺列表
  export const reqSearchShop=(geohsh,keyword)=>ajax(BASE_URL+'/search_shops',{geohsh,keyword})

  //6、用户名密码验证码登录
  export const reqPwdLogin=({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

  //7、请求发送手机验证码
  export const reqSendCode=(phone)=>ajax(BASE_URL+'/sendcode',{phone})

  //8、手机号验证登录
  export const reqSmsLogin=(phone,code)=>ajax(BASE_URL+'/login_sms',{phone,code},'POST')

  //9、获取用户信息
  export const reqUserInfo=()=>ajax(BASE_URL+'/userinfo')

  //10、用户登出
  export const reqLogout=()=>ajax(BASE_URL+'/logout')

  //返回商品列表数据
  export const reqShopGoods=()=>ajax('/goods')

  //返回评价数据
  export const reqShopRatings=()=>ajax('/ratings')

  //返回商家信息数据
//返回商家信息数据
  export const reqShopInfo=()=>ajax('/info')




