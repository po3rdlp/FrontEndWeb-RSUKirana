import { defineStore } from 'pinia'
import api from '../config/api.config.js'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    cookie: Cookies.get('token') === null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    wrong: false
  }),
  getters: {
    isUserLoggedIn: (state) => state.isLoggedIn,
    isWrong: (state) => state.wrong
  },
  actions: {
    async login(username, password) {
      try {
        const response = await api.post('/user/dev/v1/login', {
          userName: username,
          password: password
        })
        console.log(response.data)
        const { token } = response.data

        Cookies.set('token', token)
        localStorage.setItem('isLoggedIn', 'true')
        window.location.reload()
      } catch (err) {
        console.log(err)
        this.wrong = true
      }
    },
    logout() {
      Cookies.remove('token')
      localStorage.setItem('isLoggedIn', 'false')
      window.location.reload()
    }
  }
})
