import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lepox.tech/'
})

export default api
