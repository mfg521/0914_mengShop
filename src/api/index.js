/*
包含n个接口请求函数的模块
 */
  import  ajax from './ajax'
  //const BASE_URL='http://localhost:4000'
  const  BASE_URL='/api'

  //1、根据经纬度获取位置详情]
  export  const reqAddress =(geohsh)=>ajax(`${BASE_URL}/position/${geohsh}`)

  //2、获取食品分类列表
  export  const reqFootCategorys=()=>ajax(BASE_URL+'/index_category')

  //3、根据经纬度获取商铺列表
  export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})
