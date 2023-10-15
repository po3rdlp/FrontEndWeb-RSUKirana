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
          :disabled="isLoading"
          required
        />
        <label for="desc" class="label">Deskripsi Berita</label>
        <textarea
          type="text"
          v-model="desc"
          class="textarea textarea-bordered textarea-lg w-full"
          placeholder="Deskripsi Berita"
          :disabled="isLoading"
          required
        ></textarea>
        <label for="gambar" class="label">Gambar</label>
        <input
          @change="handleFileChange"
          type="file"
          class="input file-input"
          accept="image/*"
          required
        />

        <div class="flex justify-center items-center" v-if="isLoading">
          <Loading
            v-model:active="isLoading"
            :can-cancel="true"
            :on-cancel="onCancel"
            :is-full-page="fullPage"
          />
          />
        </div>
        <button class="btn btn-primary mt-5" type="submit" :disabled="isLoading">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Compressor from 'compressorjs'
import api from '../assets/config/api.config'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

let isLoading = ref(false)
let title = ''
let desc = ''
// eslint-disable-next-line no-unused-vars
let gambar = null

const submitForm = async () => {
  isLoading.value = true
  // eslint-disable-next-line no-undef
  const token = $cookies.get('token')
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
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })

    console.log(response.data.message)
  } catch (error) {
    console.error('Error posting data:', error)
  } finally {
    isLoading.value = false
    window.location.reload()
  }
}

const handleFileChange = (event) => {
  gambar = event.target.files[0]
}
</script>
