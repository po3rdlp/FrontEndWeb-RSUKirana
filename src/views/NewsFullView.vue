<template>
  <div class="h-full p-10">
    <div v-if="isLoading" class="h-96 flex justify-center">
      <LoadingView />
    </div>
    <div v-else class="grid md:grid lg:flex justify-evenly gap-10">
      <div v-if="dataAlone" class="h-full w-full bg-gray-50 rounded-sm">
        <div class="grid justify-center pt-3">
          <img
            :src="`data:image/png;base64,${dataAlone.image}`"
            :alt="dataAlone.title"
            class="w-96 h-full rounded-2xl"
          />
          <span>{{ formattedDateTime }}</span>
        </div>
        <div>
          <label class="label text text-lg font-bold">{{ dataAlone.title }}</label>
          <div>
            <p v-html="formattedDesc" class="whitespace-pre-line"></p>
          </div>
        </div>
      </div>
      <div
        class="flex lg:grid max-h-screen w-full md:w-full lg:w-80 gap-5 overflow-x-auto bg-gray-50 rounded-sm"
      >
        <div v-for="datas in allData" :key="datas.id" class="grid pt-3">
          <img
            :src="`data:image/png;base64,${datas.image}`"
            alt="news image"
            class="w-56 h-20 md:w-96 md:h-40 lg:h-60 lg:w-56 rounded-2xl"
          />
          <RouterLink
            :to="`/berita-informasi/${datas._id}`"
            :params="{ id: datas._id }"
            class="text-xs font-bold hover:text-gray-500"
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
      if (to.params.id !== from.params.id) {
        this.getNewsById(to.params.id)
      }
    }
  },
  computed: {
    formattedDateTime() {
      if (this.dataAlone.date) {
        const dateObj = new Date(this.dataAlone.date)

        const formattedDate = dateObj.toISOString().split('T')[0]

        const formattedTime = dateObj.toLocaleTimeString()

        return `${formattedDate} ${formattedTime}`
      }
      return ''
    },
    formattedDesc() {
      if (this.dataAlone && this.dataAlone.desc) {
        // Split the description value into paragraphs and format them with <p> tags
        const paragraphs = this.dataAlone.desc
          .split('\n')
          .map((paragraph) => `<p>${paragraph}</p>`)
          .join('')
        return paragraphs
      }
      return ''
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

        this.dataAlone = response.data
      } catch (err) {
        console.log(err)
      }
    },
    async getAllNews() {
      this.isLoading = true
      try {
        const response = await api.get(`/dev/v1/news/`)
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
