import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lepox.tech/'
  // baseURL: 'http://localhost:5300'
})

export default api
