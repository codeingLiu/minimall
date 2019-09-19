//home页的网络请求都放在这里
import request from "./network.js"

import{
  baseUrl
} from "./config.js"

export function getMultidata(){
  return request({
    url: baseUrl +"/home/multidata",
  })
}

//请求流行精选新款商品
export function getGoodsdata(type,page){
  return request({
    url: baseUrl + "/home/data",
    data:{
      type:type,
      page:page
    }
  })
}