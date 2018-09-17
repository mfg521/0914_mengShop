/*
mockjs 模拟接口
 */

import Mock from 'mockjs'
import data from './data'

//返回商品列表数据
Mock.mock('/goods', {code:0,data:data.goods})

//返回评价数据
Mock.mock('/ratings', {code:0,data:data.ratings})

//返回商家信息数据
Mock.mock('/info', {code:0,data:data.info})

//export default ??? 不需要向外暴露任何东西，只需要执行
