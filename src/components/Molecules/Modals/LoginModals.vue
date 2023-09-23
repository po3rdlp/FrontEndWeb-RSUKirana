<template>
  <dialog :open="showModal" class="modal modal-bottom sm:modal-middle bg-gray-600 bg-opacity-60">
    <div class="modal-box">
      <div class="relative">
        <h3 class="font-bold text-lg">ADMIN LOGIN</h3>
        <button class="btn btn-ghost btn-sm absolute top-0 right-0" @click="closeModal">X</button>
      </div>
      <div>
        <form @submit.prevent="adminLogin">
          <label class="label font-bold">Id :</label>
          <input
            type="String"
            placeholder="username"
            class="input input-sm border border-black"
            v-model="username"
          />
          <label class="label font-bold">Password :</label>
          <input
            type="password"
            placeholder="Password"
            class="input input-sm border border-black"
            v-model="password"
          />
          <div class="mt-3">
            <button class="btn btn-primary btn-sm" type="submit">Log In</button>
            <p class="text text-red-500 text-center font-bold pt-5" v-if="authStore.isWrong">
              "WRONG PASSWORD OR USERNAME"
            </p>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
// import api from '../../../assets/config/api.config'
import { useAuthStore } from '../../../assets/store/State'

export default {
  props: {
    showModal: Boolean
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
      this.username = ''
      this.password = ''
      this.authStore.isWrong = false
    },
    async adminLogin() {
      const authStore = useAuthStore()
      authStore.login(this.username, this.password)
    }
  }
}
</script>
