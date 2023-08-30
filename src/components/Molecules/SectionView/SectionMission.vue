<template>
  <div class="p-10">
    <h1 class="mb-4 flex text-4xl font-extrabold text-gray-700">
      <UsersGroupIcon class="mr-3" /> DOKTER KAMI
    </h1>
    <div class="carousel carousel-center w-full p-4 space-x-4 rounded-box" ref="carousel">
      <div class="carousel-item">
        <img
          src="../../img/Dr/Prof. DR. dr. Starry Rampengan, Sp.JP(K), MARS .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Andrew Ch. Pangemanan, M.Kes.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Eunike Pangemanan.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Heriyanis Homenta, M.Biomed.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Jennifer Setiono, SPOG, MARS.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Joel Osbert, Sp.OG.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Maria Kaunang, Sp.B .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Meiske Runkat, Sp.OG.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img src="../../img/Dr/dr Pratama Rawung.jpg" class="w-60 h-60 rounded-2xl" alt="doctor" />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr Waldemar Siahaan, Sp.An.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Arthur H Rampengan, Sp.PD.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Bisuk P. Sedli, Sp.PD-KEMD .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/Dr. dr. Novie Rampengan, Sp.A(K) .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Irene Maryauw Sp.A.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Jane G. C. Metusala, Sp.A.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Novita Tanasal, Sp.PD.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr. Yuniar Pramulasari, Sp.OG .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { UsersGroupIcon } from 'vue-tabler-icons'

const carousel = ref(null)
let intervalId = null
let scrollPosition = 0

onMounted(() => {
  startCarousel()
})

function startCarousel() {
  intervalId = setInterval(() => {
    if (carousel.value) {
      scrollPosition += 300 // Adjust this value as needed
      if (scrollPosition >= carousel.value.scrollWidth) {
        scrollPosition = 0
      }
      carousel.value.scrollLeft = scrollPosition
    }
  }, 1000) // Adjust this value for the interval between scrolls
}

// Stop the carousel when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
