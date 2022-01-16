// import axios from 'axios'
// import comm from '@/utils/comm'
// import bus from '@/utils/bus'

// const service = axios.create({
//   baseURL: import.meta.env.BASE_URL,
//   timeout: 99999
// })
// let acitveAxios = 0
// let timer
// const showLoading = () => {
//   acitveAxios++
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     if (acitveAxios > 0) {
//       bus.emit('showLoading')
//     }
//   }, 400)
// }

// const closeLoading = () => {
//   acitveAxios--
//   if (acitveAxios <= 0) {
//     clearTimeout(timer)
//     bus.emit('closeLoading')
//   }
// }

// // 配置请求路径
// axios.defaults.baseURL = 'http://127.0.0.1:8081'
// // axios.defaults.baseURL = 'http://ccs.light.woa.com'

// // 配置请求拦截器
// axios.interceptors.request.use((cfg) => {
//   const token = comm.getCookie('ccs_ticket')
//   const username = comm.getCookie('user_account')
//   cfg.headers.src = username
//   cfg.headers.token = token
//   // 必须在最后返回cfg
//   return cfg
// })

// // 在 response 拦截器实现
// axios.interceptors.response.use(
//   (response) => {
//     const token = comm.getCookie('ccs_ticket')
//     // 定时刷新access-token
//     if (!token) {
//       // console.log('获取ccs_ticket为空')
//       // axios.get('/comm/cfgsvr/auth/url/get').then((res) => {
//       //   window.location.href = res.data.ret_data
//       // })
//     }
//     if (!response.data.ret_code === 1000) {
//       // 刷新token
//       // console.log('获取ccs_ticket为空')
//       // axios.get('/comm/cfgsvr/auth/url/get').then((res) => {
//       //    window.location.href = res.data.ret_data
//       // })
//     }
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
