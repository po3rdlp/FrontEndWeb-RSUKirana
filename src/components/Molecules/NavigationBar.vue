<template>
  <nav class="bg-gradient-to-r from-gray-50 from-5% via-gray-400 via-50% to-gray-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <a class="flex items-center">
        <img
          src="../img/Logo.png"
          class="h-14 w-14 md:h-20 md:w-20 lg:w-16 lg:h-16 mr-5"
          alt="Flowbite Logo"
        />
        <div class="grid w-12">
          <span
            class="self-center text-2x1 md:text-md lg:text-lg font-semibold whitespace-nowrap text-pink-500"
            >RSIA KIRANA MANADO</span
          >
          <div class="grid sm:text-base/loose">
            <div class="flex flex-col sm:flex sm:flex-row md:flex md:flex-row items-center">
              <span
                class="self-center text-xs lg:text-sm whitespace-nowrap font-brush font-bold text-[#B2004E]"
                >MELAYANI DENGAN KASIH
              </span>
            </div>
          </div>
        </div>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          class="text text-sm sm:text-2xl text-black lg:text-2xl font-bold shadow-xl"
        />
      </button>
      <div
        :class="{ hidden: !openToggle }"
        class="w-full lg:block md:w-full lg:w-auto grid md:justify-center md:items-center from-gray-50 from-5% via-gray-400 via-50% to-gray-50 bg-opacity-25 sm:bg-opacity-50 md:bg-opacity-20 lg:bg-transparent"
        ref="menuRef"
      >
        <ul
          class="font-medium flex flex-col px-11 mt-4 borderrounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <a>
              <RouterLink to="/" class="btn btn-ghost md:bg-transparent" aria-current="page">
                BERANDA
              </RouterLink>
            </a>
          </li>
          <li>
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost">INFORMASI <ChevronDownIcon /> </label>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
              >
                <li class="flex justify-center">
                  <a>
                    <RouterLink
                      to="/jadwal-dokter"
                      class="btn bg-white hover:bg-none"
                      aria-current="page"
                    >
                      <span class="">Jadwal Dokter</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/jumlah-tempat-tidur"
                      class="btn bg-white hover:bg-none"
                      aria-current="page"
                    >
                      <span class="">JUMLAH TEMPAT TIDUR</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/berita-informasi"
                      class="btn bg-white hover:bg-none"
                      aria-current="page"
                    >
                      <span class="">PENGUMUMAN DAN BERITA</span>
                    </RouterLink></a
                  >
                </li>
                <li class="flex justify-center items-center w-full">
                  <a>
                    <RouterLink
                      to="/fasilitas"
                      class="btn flex bg-white hover:bg-none"
                      aria-current="page"
                    >
                      <span class="">FASILITAS</span>
                    </RouterLink></a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <RouterLink to="/about" class="btn btn-ghost" aria-current="page">
                <span class="">Tentang Kami</span>
              </RouterLink></a
            >
          </li>
          <li>
            <a>
              <RouterLink
                to="/registration"
                class="btn btn-primary hover:bg-gray-300 bg-pink-400 border-none"
                aria-current="page"
              >
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" class="text-black" />
                <span class="text-black">Registrasi</span>
              </RouterLink></a
            >
          </li>
        </ul>
        <div class="mt-5 space-y-5 block lg:hidden">
          <p class="flex items-center gap-2 font-bold"><BrandWhatsappIcon /> +000 000 000</p>
          <p class="flex items-center gap-2 font-bold"><BrandInstagramIcon />RSIA KIRANA</p>
          <p class="flex items-center gap-2 font-bold"><BrandFacebookIcon />RSIA KIRANA MANADO</p>
          <p class="flex items-center gap-2 font-bold"><MailCheckIcon />example@gmail.com</p>
          <div class="flex justify-center items-center">
            <Button class="btn btn-sm flex bg-purple-300 border-none text-xs"
              ><AmbulanceIcon /> Emergency Calls : +000 000 000
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { RouterLink } from 'vue-router'
import {
  ChevronDownIcon,
  BrandWhatsappIcon,
  BrandInstagramIcon,
  BrandFacebookIcon,
  MailCheckIcon,
  AmbulanceIcon
} from 'vue-tabler-icons'

const openToggle = ref(false)
const menuRef = ref(null)

const toggleMenu = () => {
  openToggle.value = !openToggle.value
}

const closeMenuOnClickOutside = () => {
  if (openToggle.value) {
    openToggle.value = false
  }
}

onMounted(() => {
  onClickOutside(menuRef, closeMenuOnClickOutside)
})
</script>

<style scoped>
.font-brush {
  font-family: 'Brush Script MT', cursive;
}
</style>
