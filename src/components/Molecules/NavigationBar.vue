<template>
  <div class="font-sans">
    <nav class="bg-opacity-1 relative bg-gradient-to-r from-fuchsia-300 to-pink-500">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a class="flex items-center">
          <img src="../../img/Logo.png" class="h-10 mr-5" alt="Flowbite Logo" />
          <div class="grid w-12">
            <span
              class="self-center text-2x1 md:text-2xl lg:text-2xl font-semibold whitespace-nowrap text-black"
              >RSIA KIRANA MANADO</span
            >
            <div class="grid sm:text-base/loose">
              <div class="flex flex-col sm:flex sm:flex-row md:flex md:flex-row items-center">
                <span class="self-center text-xs font-light lg:text-sm whitespace-nowrap"
                  >PILIHAN TERBAIK UNTUK
                </span>
                <span class="self-center text-xs font-light lg:text-sm whitespace-nowrap"
                  >IBU DAN ANAK</span
                >
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
          class="w-full lg:block md:w-full lg:w-auto flex md:justify-center md:items-center"
        >
          <ul
            class="font-medium flex flex-col px-11 mt-4 borderrounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li>
              <a>
                <RouterLink
                  to="/"
                  class="btn btn-ghost md:bg-transparent hover:font-light"
                  aria-current="page"
                >
                  BERANDA
                </RouterLink>
              </a>
            </li>
            <li>
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost hover:font-light">INFORMASI</label>
                <ul
                  tabindex="0"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost hover:font-light">KONTAK</label>
                <ul
                  tabindex="0"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a>
                <RouterLink
                  to="/about"
                  class="btn btn-ghost md:bg-transparent hover:font-light"
                  aria-current="page"
                >
                  TENTANG KAMI
                </RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const openToggle = ref(false)

const toggleMenu = () => {
  openToggle.value = !openToggle.value
}
</script>
