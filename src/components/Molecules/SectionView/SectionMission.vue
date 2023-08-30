<template>
  <div class="p-10">
    <h1 class="mb-4 flex text-4xl font-extrabold text-gray-700">
      <UsersGroupIcon class="mr-3" /> DOKTER KAMI
    </h1>
    <div class="carousel carousel-center w-full p-4 space-x-4 rounded-box" ref="carousel">
      <div class="carousel-item">
        <img
          src="../../img/Dr/Prof._DR._dr._Starry_Rampengan,_Sp.JP(K),_MARS_.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Andrew Ch._Pangemanan,_M.Kes.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Eunike_Pangemanan.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Heriyanis_Homenta_M.Biomed.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Jennifer_Setiono,SPOG,MARS.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Joel_Osbert,_Sp.OG.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Maria_Kaunang,_Sp.B .png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Meiske_Runkat,Sp.OG.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img src="../../img/Dr/dr_Pratama_Rawung.jpg" class="w-60 h-60 rounded-2xl" alt="doctor" />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr_Waldemar_Siahaan,_Sp.An.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Arthur_H_Rampengan,_Sp.PD.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Bisuk_P._Sedli_Sp.PD-KEMD.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/Dr._dr._Novie_Rampengan,_Sp.A(K).png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Irene_Maryauw_Sp.A.jpg"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Jane G._C._Metusala,_Sp.A.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Novita_Tanasal,_Sp.PD.png"
          class="w-60 h-60 rounded-2xl"
          alt="doctor"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../img/Dr/dr._Yuniar_Pramulasari,_Sp.OG.png"
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
