<template>
  <section class="shadow-sm">
    <div class="carousel snap-center w-full h-full bg-white" id="carousel">
      <div class="carousel-item w-full" ref="carousel1">
        <div class="hero min-h-screen bg-center bg-fixed section1">
          <div class="hero-overlay backdrop-blur-[2px]"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="pt-8">
              <h1
                class="mb-5 text-2xl sm:text-3x1 md:text-4xl lg:text-[50px] font-bold text-pink-300 transition-shadow"
              >
                RSIA KIRANA MANADO
              </h1>
              <p class="mb-5 text-[12px] md:text-sm lg:text-2xl font-bold text-center">
                ❝Menjadikan Setiap Momongan dan Ibu Sehat sebagai Prioritas Kami❞
              </p>
              <RouterLink to="/registration" class="btn btn-primary">REGISTRASI</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.section1 {
  background-image: url('../../img/Gedung/RSIAKIRANA2.jpeg');
}
</style>
