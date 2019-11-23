export default function request(options){
  return new Promise((resove,reject) =>{
    wx.request({
      url: options.url,
      method:options.method ||'get',
      data:options.data ||{},
      success: (res)=>{
        resove(res)
      },
      fail: (err)=>{
        reject(err)
      }
    })
  })
}
