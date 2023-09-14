<template>
  <div class="h-screen p-5">
    <p>Tambahkan Berita terbaru :</p>
    <div>
      <form @submit.prevent="submitForm" class="grid">
        <label for="judul" class="label">Judul Berita</label>
        <input
          v-model="title"
          type="text"
          class="input input-sm border border-black"
          placeholder="Judul Berita"
        />
        <label for="desc" class="label">Deskripsi Berita</label>
        <input
          type="text"
          v-model="desc"
          class="input input-sm border border-black"
          placeholder="Deskripsi Berita"
        />
        <label for="gambar" class="label">Gambar</label>
        <input @change="handleFileChange" type="file" class="input file-input" accept="image/*" />

        <button class="btn btn-primary mt-5" type="submit">Submit</button>
      </form>
    </div>
    <div class="flex justify-center items-center">
      <table></table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Compressor from 'compressorjs'
import api from '../assets/config/api.config'

let title = ''
let desc = ''
// eslint-disable-next-line no-unused-vars
let gambar = null
// eslint-disable-next-line no-unused-vars
let data = ref(null)

const newsData = () => {
  api
    .get('/dev/v1/news')
    .then((res) => {
      data.value = res.data
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}

onMounted(() => {
  newsData()
})

const submitForm = async () => {
  console.log(`Judul: ${title}, deskripsi: ${desc}`)
  const formData = new FormData()

  formData.append('title', title)
  formData.append('desc', desc)

  if (gambar) {
    try {
      // Check the size of the image
      if (gambar.size > 800 * 1024) {
        // 800 KB in bytes
        const compressedImage = await new Promise((resolve, reject) => {
          new Compressor(gambar, {
            quality: 0.5,
            success(result) {
              resolve(result)
            },
            error(err) {
              reject(err)
            }
          })
        })
        if (compressedImage.size > 700 * 1024) {
          console.log('Ok')
        } else {
          formData.append('image', compressedImage)
        }
      } else {
        formData.append('image', gambar)
      }
    } catch (error) {
      console.error('Image compression error:', error.message)
      return
    }
  }

  try {
    const response = await api.post('/dev/v1/addNews', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log(response.data.message)
    window.location.reload()
  } catch (error) {
    console.error('Error posting data:', error)
  }
}

const handleFileChange = (event) => {
  gambar = event.target.files[0]
}
</script>
