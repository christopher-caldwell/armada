import axios from 'axios'

// import store from '@/store'
// import router from '@/router'

// Create client.
const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})
// const previousState = JSON.parse(localStorage.getItem('session'))
// let authToken = null

// // Inject current API token into each request.
// client.interceptors.request.use(config => {
//   if (store.getters['session/authToken']) {
//     authToken = store.getters['session/authToken']
//   } else if (previousState && previousState.token) {
//     authToken = previousState.token
//   }

//   // only inject if not set
//   if (!config.headers.Authorization && authToken) {
//     config.headers.Authorization = authToken
//   }

//   return config
// })

// client.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 403) {
//       store.dispatch('session/endSession')
//       router.push('/').catch(() => {})
//     }
//     return Promise.reject(error)
//   }
// )

export default client
