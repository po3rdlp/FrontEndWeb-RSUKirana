<template>
  <div>
    <section class="bg-cover bg-center bg-opacity-75 flex justify-center items-end">
      <div class="carousel w-screen">
        <div class="carousel-item w-full bg-white opacity-80">
          <div id="slide1" class="w-full items-center justify-center flex bg-white h-screen">
            <div class="flex flex-col text-center">
              <div>
                <h1 class="text-sm md:text-3xl lg:text-5xl font-bold">
                  Mari Buat Hidup Anda Lebih Bahagia
                </h1>
                <button
                  class="btn btn-info max-w-sm bg-gradient-to-l from-pink-100 to-fuchsia-300 mt-3"
                >
                  TEMUI DOKTER KAMI
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item w-full bg-white opacity-80">
          <div
            id="slide2"
            class="w-full items-center justify-center flex flex-col bg-white h-screen"
          >
            <h1 class="text-sm md:text-3xl lg:text-5xl font-bold">Jadikan Kami Sahabat Anda</h1>
            <button
              class="btn btn-info max-w-sm bg-gradient-to-l from-pink-100 to-fuchsia-300 mt-3"
            >
              Lebih Banyak Tentang Kami
            </button>
          </div>
        </div>
      </div>
      <div class="absolute py-5">
        <div class="flex justify-center items-end space-x-3">
          <a class="btn-ghost text-xs" href="#slide1"
            ><FontAwesomeIcon icon="fa-sharp fa-circle"
          /></a>
          <a class="btn-ghost text-xs" href="#slide2"
            ><FontAwesomeIcon icon="fa-sharp fa-circle"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
