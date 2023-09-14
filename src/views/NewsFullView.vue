<template>
  <div class="h-full p-10">
    <div v-if="isLoading" class="h-96 flex justify-center">
      <LoadingView />
    </div>
    <div v-else class="flex justify-evenly gap-10">
      <div v-if="dataAlone" class="h-full w-3/6 bg-gray-50 rounded-sm">
        <div class="grid justify-center pt-3">
          <img :src="`data:image/png;base64,${dataAlone.image}`" alt="Shoes" class="w-96 h-full" />
          <span>{{ dataAlone.date }}</span>
        </div>
        <div>
          <label class="label text text-lg font-bold">{{ dataAlone.title }}</label>
          <p>{{ dataAlone.desc }}</p>
        </div>
      </div>
      <div class="h-full w-72 bg-gray-50 rounded-sm">
        <label class="text text-2xl">BERITA LAINNYA</label>
        <div v-for="datas in allData" :key="datas.id" class="grid justify-center pt-3">
          <img :src="`data:image/png;base64,${datas.image}`" alt="Shoes" class="w-96 h-full" />
          <RouterLink
            :to="`/berita-informasi/${datas._id}`"
            :params="{ id: datas._id }"
            class="font-bold"
            >{{ datas.title }}</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/config/api.config'
import LoadingView from '../components/Molecules/LoadingView.vue'

export default {
  components: { LoadingView },
  props: {
    id: String
  },
  data() {
    return {
      dataAlone: null,
      allData: null,
      isLoading: false
    }
  },
  watch: {
    $route(to, from) {
      // Check if the route has changed
      if (to.params.id !== from.params.id) {
        // Fetch data for the new route when the ID parameter changes
        this.getNewsById(to.params.id)
      }
    }
  },
  created() {
    this.getNewsById(this.$route.params.id)
  },
  mounted() {
    this.getNews()
    this.getAllNews()
  },
  methods: {
    async getNews() {
      try {
        const response = await api.get(`/dev/v1/news/${this.id}`)
        console.log(response.data)
        this.dataAlone = response.data
      } catch (err) {
        console.log(err)
      }
    },
    async getAllNews() {
      this.isLoading = true
      try {
        const response = await api.get(`/dev/v1/news/`)
        console.log(response.data)
        this.allData = response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async getNewsById(id) {
      this.isLoading = true
      try {
        const response = await api.get(`/dev/v1/news/${id}`)
        console.log(response.data)
        this.dataAlone = response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
