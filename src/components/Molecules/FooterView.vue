<template>
  <div class="bg-slate-900 p-1 md:p-9 lg:p-10">
    <footer class="text-white">
      <div>
        <div class="flex justify-between p-5 w-full">
          <div class="flex justify-between w-96">
            <div class="flex flex-col gap-3 text-xs">
              <span class="footer-title">INFORMASI</span>
              <RouterLink to="/jadwal-dokter"
                ><a class="link link-hover">JADWAL DOKTER</a></RouterLink
              >
              <RouterLink to="/jumlah-tempat-tidur"
                ><a class="link link-hover">JUMLAH TEMPAT TIDUR</a></RouterLink
              >
              <!-- <RouterLink to="/berita-informasi"
                ><a class="link link-hover">PENGUMUMAN DAN BERITA</a></RouterLink
              > -->
              <RouterLink to="/fasilitas"><a class="link link-hover">FASILITAS</a></RouterLink>
              <RouterLink to="/tambah-berita" v-if="authStore.isUserLoggedIn"
                ><a class="link link-hover">Tambah Berita</a></RouterLink
              >
            </div>
            <div class="flex flex-col gap-2 text-xs">
              <span class="footer-title">About</span>
              <RouterLink to="/jadwal-dokter"
                ><a class="link link-hover">Tentang Kami</a></RouterLink
              >
              <!-- <a class="link link-hover" @click="AdminLog" v-if="!authStore.isUserLoggedIn"
                >Admin</a
              > -->
            </div>
          </div>
          <div class="grid gap-[5px]">
            <img src="../img/Logo.png" class="w-[64px] h-[42.75]" alt="logo rs_kirana" />
            <p class="mt-5">"MELAYANI DENGAN KASIH"</p>
            <div class="flex gap-[10px]">
              <a href="https://m.facebook.com/profile.php?id=141344839259693" target="_blank"
                ><BrandFacebookIcon color="white" :size="30" stroke-width="0.9"
              /></a>
              <a href="https://www.instagram.com/rsiakirana_manado/" target="_blank"
                ><BrandInstagramIcon color="white" :size="30" stroke-width="0.9"
              /></a>
              <a class="flex items-center gap-2">
                <BrandWhatsappIcon color="white" :size="30" stroke-width="0.9" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="footer p-5 border-t border-base-300">
      <div class="items-center grid-flow-col font-light text-xs text-gray-400">
        <p>Hak Cipta ©RSIA KIRANA MANADO 2023</p>
      </div>
      <div class="md:place-self-center md:justify-self-end">
        <div class="flex justify-evenly gap-4">
          <a class="font-bold text-sm text-white" href="https://github.com/po3rdlp" target="_blank"
            >LIHAT PENGEMBANG</a
          >
        </div>
      </div>
    </footer>
  </div>

  <LoginModals :showModal="isModalOpen" @close="isModalOpen = false" />
</template>

<script>
import { BrandFacebookIcon, BrandInstagramIcon, BrandWhatsappIcon } from 'vue-tabler-icons'
import LoginModals from './Modals/LoginModals.vue'
import { useAuthStore } from '../../assets/store/State'

export default {
  components: { BrandFacebookIcon, BrandInstagramIcon, BrandWhatsappIcon, LoginModals },
  data() {
    return {
      isModalOpen: false
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    }
  },
  methods: {
    AdminLog() {
      this.isModalOpen = true
    }
  }
}
</script>
