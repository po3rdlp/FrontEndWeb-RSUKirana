<template>
  <section class="bg-gray-200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="w-fit mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-none xl:text-5xl text-pink-400"
        >
          PUNYA PERTANYAAN ATAU SARAN ? HUBUNGI KAMI
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Pertanyaan yang anda kirim akan kami terima melalui Whatsapp
        </p>
      </div>
      <form
        class="min-w-0 md:min-w-full lg:min-w-full flex-shrink-0 rounded-lg lg:mt-0 lg:col-span-5 lg:flex"
        @submit.prevent="onSubmit"
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Nama</span>
            </label>
            <input type="text" placeholder="Nama" v-model="name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Email</span>
            </label>
            <input type="text" placeholder="Email" v-model="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Pesan</span>
            </label>
            <textarea
              placeholder="Pesan"
              class="textarea textarea-bordered textarea-lg w-full"
              v-model="pesan"
            ></textarea>
          </div>
          <div class="form-control mt-6">
            <a aria-label="Chat on WhatsApp" :href="generateWhatsappLink" target="_blank">
              <p class="btn btn-primary">Kirim</p>
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

let name = ref('')
let email = ref('')
let pesan = ref('')

const generateWhatsappLink = computed(() => {
  let message = `Nama: ${encodeURIComponent(name.value)},%0AEmail:${encodeURIComponent(
    email.value
  )}%0APesan: ${pesan.value}`

  let phoneNumber = '6281388888898'

  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>
