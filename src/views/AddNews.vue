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
        <input @change="handleFileChange" type="file" class="input file-input" />

        <button class="btn btn-primary mt-5" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

let title = ''
let desc = ''
// eslint-disable-next-line no-unused-vars
let gambar = null
// eslint-disable-next-line no-unused-vars
let data = null

const newsData = () => {
  axios
    .get('http://localhost:5000/dev/v1/news')
    .then((res) => {
      data = res.data
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}

onMounted(() => {
  newsData()
})

const submitForm = () => {
  console.log(`Judul: ${title}, deskripsi: ${desc}`)
  const formData = new FormData() // Create a FormData object

  // Append the form fields and file to FormData
  formData.append('title', title)
  formData.append('desc', desc)
  formData.append('image', gambar)

  axios
    .post('http://localhost:5000/dev/v1/addNews', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
      }
    })
    .then((res) => {
      console.log(res.data.message)
      window.location.reload()
    })
    .catch((err) => console.log(err))
}

const handleFileChange = (event) => {
  gambar = event.target.files[0]
}
</script>
