<template>
  <div class="bg-gray-100 sm:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          class="flex text-3xl items-center gap-2 font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          <NewsIcon class="mr-2" /> INFORMASI / BERITA
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Informasi atau Berita terbaru dari RSIA KIRANA MANADO
        </p>
      </div>
      <div v-if="isLoading">
        <newsSkeleton />
      </div>
      <div
        v-else-if="data"
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <div v-for="item in paginatedData" :key="item.id">
          <article
            class="max-w-xl flex-col items-start justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div class="flex items-center gap-x-4 text-xs" @click="test(item._id)">
              <time datetime="2020-03-16" class="text-black pb-2">{{
                formattedDate(item.date)
              }}</time>
            </div>
            <div>
              <img
                :src="`data:image/png;base64,${item.image}`"
                alt="logo"
                class="w-56 h-56 rounded-lg"
              />
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <RouterLink :to="`/berita-informasi/${item._id}`" :params="{ id: item._id }">
                  <p @click="test(item._id)">
                    <span class="absolute inset-0"></span>
                    {{ item.title }}
                  </p>
                </RouterLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ item.desc }}
              </p>
            </div>
          </article>
        </div>
      </div>
      <div v-else class="flex justify-center h-56 items-center">
        <p class="text text-3xl text-center">No Data</p>
      </div>
      <div v-if="!isLoading && data" class="flex justify-between pt-10">
        <div class="space-x-3">
          <button
            class="btn btn-sm bg-gray-200 hover:bg-gray-400"
            @click="previousPage"
            :disabled="currentPage === 0"
          >
            <ChevronLeftIcon />
          </button>
          <button
            class="btn btn-sm bg-gray-200 hover:bg-gray-400"
            @click="nextPage"
            :disabled="currentPage === totalPages - 1"
          >
            <ChevronRightIcon />
          </button>
        </div>
        <RouterLink to="/berita-informasi" class="btn btn-ghost text-lg font-extrabold"
          >Selengkapnya..</RouterLink
        >
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import { NewsIcon, ChevronLeftIcon, ChevronRightIcon } from 'vue-tabler-icons'
import api from '../../../assets/config/api.config'
import newsSkeleton from '../Skeleton/NewsSkeleton.vue'
import { useAuthStore } from '../../../assets/store/State'

export default {
  components: { NewsIcon, newsSkeleton, ChevronLeftIcon, ChevronRightIcon },

  data() {
    return {
      data: null,
      isLoading: false,
      currentPage: 0,
      itemsPerPage: 4
    }
  },
  computed: {
    totalPages() {
      if (this.data) {
        return Math.ceil(this.data.length / this.itemsPerPage)
      } else {
        return 0
      }
    },
    paginatedData() {
      if (this.data) {
        const startIndex = this.currentPage * this.itemsPerPage
        const endIndex = startIndex + this.itemsPerPage
        return this.data.slice(startIndex, endIndex)
      } else {
        return []
      }
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    async getNews() {
      this.isLoading = true
      const authStore = useAuthStore()
      try {
        const response = await api.get('/dev/v1/news')
        console.log(response.data)
        this.data = response.data

        //checktokenvalidornot
        try {
          const token = this.$cookies.get('token')
          if (!token) {
            // console.log('No token found in cookies')
            return
          }
          const headers = {
            Authorization: `Bearer ${token}`
          }
          const response = await api.get('/dev/v1/test', { headers })
          console.log(response.data.message)
        } catch (err) {
          authStore.logout()
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++
      }
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--
      }
    },
    formattedDate(dateTime) {
      if (dateTime) {
        const dateObj = new Date(dateTime)

        const formattedDate = dateObj.toISOString().split('T')[0]

        const formattedTime = dateObj.toLocaleTimeString()

        return `${formattedDate} ${formattedTime}`
      }
      return ''
    }
  }
}
</script>
