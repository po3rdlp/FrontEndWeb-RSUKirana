<template>
  <nav class="bg-gradient-to-r from-gray-50 from-5% via-gray-400 via-50% to-gray-50 shadow-xl">
    <div
      class="max-w-screen-md md:max-w-screen-md lg:max-w-screen-xl flex flex-wrap items-center mx-auto justify-between p-3"
    >
      <a class="flex items-center">
        <img
          src="../img/Logo.svg"
          class="h-12 w-12 md:h-10 md:w-10 lg:w-16 lg:h-16 mr-5"
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
                class="self-center text-xs lg:text-sm whitespace-nowrap font-bold text-[#B2004E]"
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
        class="w-full lg:block md:w-full lg:w-auto grid md:justify-center md:items-end from-gray-50 from-5% via-gray-400 via-50% to-gray-50 bg-opacity-25 sm:bg-opacity-50 md:bg-opacity-20 lg:bg-transparent"
        ref="menuRef"
      >
        <ul
          class="font-medium flex flex-col justify-center px-11 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li class="group relative">
            <a @click="closeToggle">
              <RouterLink to="/" class="btn btn-ghost md:bg-transparent"> BERANDA </RouterLink>
            </a>
          </li>
          <li>
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost" @click="informationToggle"
                >INFORMASI <ChevronDownIcon />
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-3 gap-3 shadow-xl bg-base-200 w-56 rounded-sm"
                v-if="toggleDropdown"
              >
                <li class="flex justify-center">
                  <a @click="closeToggle" v-on:click="closeInformationToggle">
                    <RouterLink to="/jadwal-dokter">
                      <span class="">Jadwal Dokter</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/jumlah-tempat-tidur"
                      @click="closeToggle"
                      v-on:click="closeInformationToggle"
                    >
                      <span class="">JUMLAH TEMPAT TIDUR</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/berita-informasi"
                      @click="closeToggle"
                      v-on:click="closeInformationToggle"
                    >
                      <span class="">PENGUMUMAN DAN BERITA</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/fasilitas"
                      @click="closeToggle"
                      v-on:click="closeInformationToggle"
                    >
                      <span class="">FASILITAS</span>
                    </RouterLink></a
                  >
                </li>
                <li>
                  <a>
                    <RouterLink
                      to="/indikator-mutu"
                      @click="closeToggle"
                      v-on:click="closeInformationToggle"
                    >
                      <span class="">Indikator Mutu</span>
                    </RouterLink></a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a @click="closeToggle">
              <RouterLink to="/about" class="btn btn-ghost" aria-current="page">
                <span class="">Tentang Kami</span>
              </RouterLink></a
            >
          </li>
          <li v-if="authStore.isUserLoggedIn">
            <a @click="closeToggle" v-on:click="logOut">
              <button class="btn bg-pink-500"><LogoutIcon /></button>
            </a>
          </li>
          <!-- <li>
            <a @click="closeToggle">
              <RouterLink
                to="/registration"
                class="btn btn-primary hover:bg-gray-300 bg-pink-400 border-none"
                aria-current="page"
              >
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" class="text-black" />
                <span class="text-black">Registrasi</span>
              </RouterLink></a
            >
          </li> -->
        </ul>
        <div class="mt-5 flex overflow-x-auto lg:hidden border-t border-black">
          <button
            class="flex items-center gap-2 font-light btn btn-ghost"
            @click="closeToggle"
            v-on:click="whatsappClick"
          >
            <BrandWhatsappIcon /> 081388888898
          </button>
          <button
            class="flex items-center gap- font-light btn btn-ghost"
            @click="closeToggle"
            v-on:click="instagramClick"
          >
            <BrandInstagramIcon />RSIA KIRANA
          </button>
          <button
            class="flex items-center gap-2 font-light btn btn-ghost"
            @click="closeToggle"
            v-on:click="facebookClick"
          >
            <BrandFacebookIcon />Rumah Sakit Kirana
          </button>
          <button class="flex items-center gap- font-light btn btn-ghost" @click="closeToggle">
            <MailCheckIcon />rskirana94@gmail.com
          </button>
          <button
            class="flex items-center gap- font-light btn btn-ghost"
            @click="closeToggle"
            v-on:click="whatsappEmergencyClick"
          >
            <AmbulanceIcon />EMERGENCY CALL: 082234567899
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../../assets/store/State'
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
  AmbulanceIcon,
  LogoutIcon
} from 'vue-tabler-icons'

const openToggle = ref(false)
const authStore = useAuthStore()
const menuRef = ref(null)
let toggleDropdown = ref(false)

const informationToggle = () => {
  toggleDropdown.value = !toggleDropdown.value
}

const closeInformationToggle = () => {
  toggleDropdown.value = false
}

const toggleMenu = () => {
  openToggle.value = !openToggle.value
}

const closeToggle = () => {
  openToggle.value = false
}

const closeMenuOnClickOutside = () => {
  if (openToggle.value) {
    openToggle.value = false
  }
}

const logOut = () => {
  authStore.logout()
  window.location.reload()
}

const whatsappClick = () => {
  window.open('https://wa.me/6281388888898', '_blank')
}

const whatsappEmergencyClick = () => {
  window.open('https://wa.me/6282234567899', '_blank')
}

const instagramClick = () => {
  window.open('https://www.instagram.com/rsiakirana_manado/', '_blank')
}

const facebookClick = () => {
  window.open('https://m.facebook.com/profile.php?id=141344839259693', '_blank')
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
