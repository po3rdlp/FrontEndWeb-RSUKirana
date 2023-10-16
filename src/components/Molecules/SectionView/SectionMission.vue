<template>
  <div class="grid justify-center w-full">
    <div class="grid max-w-7xl">
      <h1 class="mb-4 mt-5 flex items-center gap-2 text-4xl font-extrabold text-gray-700">
        <UsersGroupIcon class="mr-3" /> DOKTER KAMI
      </h1>
      <div>
        <div class="carousel carousel-center max-w-7xl p-4 space-x-4 rounded-box" ref="carousel">
          <div class="carousel-item">
            <img
              src="../../img/Dr/Prof._DR._dr._Starry_Rampengan,_Sp.JP(K),_MARS__.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Andrew_Ch._Pangemanan,_M.Kes.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Eunike_Pangemanan.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Heriyanis_Homenta_M.Biomed.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Jennifer_Setiono,SPOG,MARS.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Joel_Osbert,_Sp.OG.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Maria_Kaunang,_Sp.B_.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Meiske_Runkat,Sp.OG.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Pratama_Rawung.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr_Waldemar_Siahaan,_Sp.An.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Arthur_H_Rampengan,_Sp.PD.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Bisuk_P._Sedli_Sp.PD-KEMD.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/Dr._dr._Novie_Rampengan,_Sp.A(K).jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Irene_Maryauw_Sp.A.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Jane_G._C._Metusala,_Sp.A.jpg"
              loading="lazy"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Novita_Tanasal,_Sp.PD.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../img/Dr/dr._Yuniar_Pramulasari,_Sp.OG.jpg"
              class="w-60 h-60 rounded-2xl"
              alt="doctor"
              loading="lazy"
            />
          </div>
        </div>

        <div class="flex justify-center gap-5 p-3">
          <button class="btn btn-circle btn-sm" @click="leftScroll">&lt;</button>
          <button class="btn btn-circle btn-sm" @click="rightScroll">></button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
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
      scrollPosition += 300
      if (scrollPosition >= carousel.value.scrollWidth) {
        scrollPosition = 0
      }
      carousel.value.scrollLeft = scrollPosition
    }
  }, 1000)
}

// Stop carousel setelah di monted
onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script> -->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { UsersGroupIcon } from 'vue-tabler-icons'

const carousel = ref(null)
let intervalId = null
let scrollPosition = 0

onMounted(() => {
  startCarousel()
  setupEventListeners()
})

function setupEventListeners() {
  if (carousel.value) {
    carousel.value.addEventListener('mouseover', () => {
      clearInterval(intervalId)
    })

    carousel.value.addEventListener('mouseout', () => {
      startCarousel()
    })
  }
}

function startCarousel() {
  intervalId = setInterval(() => {
    if (carousel.value) {
      scrollPosition += 300
      if (scrollPosition >= carousel.value.scrollWidth) {
        scrollPosition = 0
      }
      carousel.value.scrollLeft = scrollPosition
    }
  }, 1000)
}

// Stop carousel before unmounting
onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const leftScroll = () => {
  if (carousel.value) {
    scrollPosition -= 300
    if (scrollPosition < 0) {
      scrollPosition = carousel.value.scrollWidth - carousel.value.clientWidth
    }
    carousel.value.scrollLeft = scrollPosition
    clearInterval(intervalId)
  }
}

const rightScroll = () => {
  if (carousel.value) {
    scrollPosition += 300
    if (scrollPosition >= carousel.value.scrollWidth) {
      scrollPosition = 0
    }
    carousel.value.scrollLeft = scrollPosition
    clearInterval(intervalId)
  }
}
</script>
