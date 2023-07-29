<template>
  <section class="shadow-sm">
    <div
      class="carousel snap-center w-full h-full bg-no-repeat bg-white section1 bg-fixed bg-center"
    >
      <div id="slide1" class="carousel-item w-full">
        <div id="slide1" class="carousel-item flex justify-center items-center w-full">
          <div>
            <h1 class="text text-sm sm:text-2xl lg:text-5xl font-bold text-white">
              KAMI SENANG MEMBANTU ANDA
            </h1>
          </div>
        </div>
      </div>
      <div id="slide2" class="carousel-item snap-center w-full bg-no-repeat">
        <div
          id="slide1"
          class="carousel-item flex justify-center items-center w-full h-96 md:h-[700px] lg:h-[900px]"
        >
          <div>
            <h1 class="text text-sm sm:text-2xl lg:text-5xl font-bold text-white">
              KAMI SENANG MEMBANTU ANDA
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="carousel w-screen">
        <div :class="['carousel-item', 'w-full', 'bg-cover']" class="section1 h-fit bg-fixed">
          <div id="slide1" class="w-full items-center flex justify-center h-screen">
            <div class="flex flex-col items-center">
              <h1 class="text text-3xl">WE ALWAYS CARE ABOUT EVERY CLIENT</h1>
              <button class="btn btn-info w-fit bg-gradient-to-l from-pink-100 to-fuchsia-300 mt-3">
                Lebih Banyak Tentang Kami
              </button>
            </div>
          </div>
        </div>
        <div class="carousel-item w-full opacity-80">
          <div id="slide2" class="w-full items-center justify-center flex flex-col h-screen">
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
      </div> -->
  </section>
</template>

<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.section1 {
  background-image: url('../../img/giant-building-with-sun.jpg');
}
</style>
