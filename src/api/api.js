/* 
	正式的小程序在域名上只支持 https (wx.request、wx.uploadFile、wx.downloadFile) 和 wss (wx.connectSocket) 协议
		
		域名不能使用IP或者localhost之类的
		  
		开发者工具开启‘不校验合法域名……’
 */

let BASE_URL = 'http://localhost:8080'

if (process.env.NODE_ENV !== 'development') {
  BASE_URL = 'https://127.0.0.1:80'
}
export const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url, // 请求API
      method: options.method || 'GET', // 请求方式
      data: options.data || {},
      success: (res) => {
        if (res.statusCode !== 200) {
          return uni.showToast({
            title: '数据获取失败！',
          })
        }
        resolve(res)
      },
      fail: (error) => {
        console.log(error)
        uni.showToast({
          title: '请求接口失败！',
        })
        reject(error)
      },
    })
  })
}
