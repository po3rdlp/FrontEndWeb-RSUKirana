import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    user: null
  }),
  getters: {
    isUserLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    login() {
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout() {
      this.isLoggedIn = false
      localStorage.setItem('isLoggedIn', 'false')
    }
  }
})
