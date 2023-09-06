<template>
  <section class="shadow-sm">
    <!-- <div class="flex w-full h-full md:h-full lg:h-screen relative">
      <img
        src="../../img/Gedung/RSIAKIRANA2.jpeg"
        class="w-full h-full top-0 absolute -z-10 opacity-60"
      />
      <img
        src="../../img/Dr/Prof._DR._dr._Starry_Rampengan__Sp.JP_K___MARS_-removebg-preview.png"
        class="hidden sm:block absolute bottom-0 right-0 lg:right-0 h-[26em] md:h-[25em] lg:h-[30em]"
      />
      <div class="grid md:grid md:items-end lg:items-center px-0 lg:px-5 py-10 ml-0">
        <div class="">
          <div class="grid max-w-2xl md:max-w-md lg:max-w-3xl p-7 rounded-r-3xl">
            <h1 class="text-2xl lg:text-5xl text-center lg:text-left font-bold">
              RSIA KIRANA MANADO WEBSITE
            </h1>
            <p class="py-6 text-center lg:text-left text-black w-full lg:max-w-2xl">
              RSIA Kirana memiliki komitmen dalam melayani dan berpegang teguh pada Visi dan Misi
              dalam melakukan pelayanan yang terbaik kepada masyarakat.
            </p>
            <div class="flex justify-center lg:justify-start">
              <RouterLink to="/about">
                <button class="btn bg-pink-500 hover:bg-black border-none text-white">
                  TENTANG KAMI
                </button></RouterLink
              >
            </div>
            <p class="py-6 text-center lg:text-left text-lg font-bold w-full lg:max-w-xl">
              "Prof.Dr.Starry Rampengan SP.JP K MARS"
            </p>
          </div>
        </div>
      </div>
    </div> -->
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
                ❝Menjadikan Setiap Momongan dan Ibu Sehat sebagai Prioritas Kami❞
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
