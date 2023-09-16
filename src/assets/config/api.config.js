import axios from 'axios'

const api = axios.create({
  baseURL: 'http://13.228.77.82:3000',
  timeout: 8000
})

export default api
