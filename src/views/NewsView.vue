<template>
  <div class="hero min-h-screen imgg">
    <div class="hero-overlay backdrop-blur-[2px]"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">INFORMASI RSIA KIRANA</h1>
        <p class="mb-5">Berita dan Informasi, Terkini dan Terupdate.</p>
      </div>
    </div>
  </div>
  <h1 class="flex gap-3 px-5 items-center text text-2xl font-bold pt-5">
    <ArticleIcon /> BERITA/INFORMASI
  </h1>
  <div v-if="isLoading || isLoadingDelete" class="flex justify-center items-center h-56">
    <LoadingView />
  </div>

  <div v-else-if="data" class="flex justify-center w-full h-full p-5 mt-5">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit h-full gap-10">
      <div
        v-for="datas in data"
        :key="datas.id"
        class="card card-compact max-w-sm max-h-min bg-base-100 shadow-xl relative"
      >
        <figure>
          <img :src="`data:image/png;base64,${datas.image}`" alt="Shoes" class="w-96 h-96" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ datas.title }}</h2>
          <p class="line-clamp-6">
            {{ datas.desc }}
          </p>
          <div class="card-actions justify-end mt-5">
            <p class="flex gap-1"><ClockHour5Icon :size="20" />{{ datas.date }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <button
            v-if="authStore.isUserLoggedIn"
            @click="deleteNews(datas._id)"
            class="btn btn-ghost absolute bottom-0 right-0"
          >
            <TrashIcon />
          </button>
          <RouterLink
            :to="`/berita-informasi/${datas._id}`"
            :params="{ id: datas._id }"
            class="btn btn-ghost btn-sm"
            v-else
            >Selengkapnya</RouterLink
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex justify-center items-center h-56">
    <h1 class="text text-lg font-extrabold">NO DATA</h1>
  </div>
</template>

<script>
import api from '../assets/config/api.config'
import LoadingView from '../components/Molecules/LoadingView.vue'
import { TrashIcon, ClockHour5Icon, ArticleIcon } from 'vue-tabler-icons'
import { useAuthStore } from '../assets/store/State'

export default {
  components: { TrashIcon, LoadingView, ClockHour5Icon, ArticleIcon },
  data() {
    return {
      data: null,
      newsId: null,
      isLoading: false,
      isLoadingDelete: false
    }
  },
  mounted() {
    this.getNews()
  },
  computed: {
    authStore() {
      return useAuthStore()
    }
  },
  methods: {
    async getNews() {
      this.isLoading = true
      try {
        const response = await api.get('/dev/v1/news')
        console.log(response.data)
        this.data = response.data
      } catch (err) {
        console.log('Error Cathing Data')
      } finally {
        this.isLoading = false
      }
    },
    async deleteNews(id) {
      const token = this.$cookies.get('token')
      const headers = {
        Authorization: `Bearer ${token}`
      }

      this.isLoadingDelete = true
      try {
        const response = await api.delete(`/dev/v1/deleteNews/${id}`, { headers })
        console.log(response.data)
      } catch (err) {
        console.log('gagal', err)
      } finally {
        this.isLoadingDelete = false
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>
.imgg {
  background-image: url('../components/img/Gedung/RSIAKIRANA2.webp');
}
</style>
