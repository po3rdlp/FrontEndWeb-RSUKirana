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
            type="number"
            placeholder="id"
            class="input input-sm border border-black"
            v-model="id"
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
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
import { useAuthStore } from '../../../assets/store/State.js'

export default {
  props: {
    showModal: Boolean
  },
  data() {
    return {
      user: {
        id: 10,
        password: 'qwerty124'
      },
      id: null,
      password: null
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    adminLogin() {
      const authStore = useAuthStore()

      if (this.id === this.user.id && this.password === this.user.password) {
        authStore.login()
        this.closeModal()
      } else {
        console.log('GAGAL')
      }
    }
  }
}
</script>
