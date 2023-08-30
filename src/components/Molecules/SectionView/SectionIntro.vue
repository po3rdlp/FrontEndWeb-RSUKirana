<template>
  <section class="shadow-sm">
    <div class="carousel snap-center w-full h-full bg-white" id="carousel">
      <div class="carousel-item w-full" ref="carousel1">
        <div class="hero min-h-screen bg-right-top bg-fixed section1">
          <div class="hero-overlay bg-opacity-30"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="pt-8">
              <h1
                class="mb-5 text-2xl sm:text-3x1 md:text-4xl lg:text-[50px] font-bold text-pink-300 transition-shadow"
              >
                RSIA KIRANA MANADO
              </h1>
              <p class="mb-5 text-[12px] md:text-sm lg:text-2xl font-bold text-center">
                Menjadikan Setiap Momongan dan Ibu Sehat sebagai Prioritas Kami
              </p>
              <RouterLink to="/registration" class="btn btn-primary">REGISTRASI</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item snap-center w-full relative" ref="carousel2">
        <div class="hero min-h-screen bg-center bg-fixed section2">
          <div class="hero-overlay bg-opacity-30"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="pt-8">
              <h1
                class="mb-5 text-2xl sm:text-3x1 md:text-4xl lg:text-[50px] font-bold text-pink-300 transition-shadow"
              >
                SEJARAH
              </h1>
              <p class="mb-5 text-[12px] md:text-sm lg:text-2xl font-bold text-center">
                Rumah Sakit Ibu dan Anak (RSIA) KIRANA Manado telah menjadi mitra terpercaya dalam
                pelayanan kesehatan sejak tahun pendiriannya pada tahun 1994. Berfokus pada
                perawatan kesehatan ibu dan anak, RSIA KIRANA telah berdedikasi untuk memberikan
                perawatan medis yang berkualitas tinggi serta perhatian yang peduli terhadap setiap
                pasien. Kami dengan bangga mencatat pencapaian signifikan dalam [layanan medis
                utama, misalnya: kelahiran, perawatan bayi baru lahir, konsultasi kehamilan, dll.],
                yang telah membantu banyak keluarga menjalani momen-momen penting dalam hidup mereka
                dengan keyakinan dan rasa aman. Kami berkomitmen untuk terus memberikan pelayanan
                yang berdaya saing dan berkualitas tinggi kepada masyarakat Manado dan sekitarnya.
              </p>
              <RouterLink to="/about#sejarah" class="btn btn-primary">SELENGKAPNYA</RouterLink>
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
  background-image: url('../../img/Ruangan/Gedung.jpeg');
}
.section2 {
  background-image: url('../../img/Gedung/RSIAKIRANA1.jpeg');
}
</style>
