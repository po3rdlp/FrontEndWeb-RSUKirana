import axios from 'axios'

const api = axios.create({
  baseURL: 'https://22d1-36-85-225-30.ngrok.io/'
  // baseURL: 'http://localhost:5300'
})

export default api
