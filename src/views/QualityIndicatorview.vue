<template>
  <div class="hero min-h-screen img">
    <div class="hero-overlay backdrop-blur-[2px]"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-200">
          INDIKATOR MUTU
        </h1>
        <p class="mb-5">Indikator Mutu RSIA KIRANA MANADO</p>
      </div>
    </div>
  </div>

  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-1">
    <div class="max-w-screen-md mb-2 lg:mb-5">
      <h2 class="flex text-4xl font-extrabold items-center gap-3">
        <ListDetailsIcon /> INDIKATOR MUTU
      </h2>
    </div>
    <div class="grid gap-5">
      <p class="font-semibold">
        Rsia Kirana Manado selalu berupaya untuk melakukan tinjauan dan monitoring setiap aspek
        pelayanannya. Salah satunya adalah dengan melakukan pemantauan berdasarkan data pelayanan,
        termasuk data indikator mutu.
      </p>
      <p class="font-light">
        Sebagai pemberi layanan kesehatan yang berorientasi pada peningkatan mutu pelayanan, Rsia
        Kirana Manado selalu berupaya untuk melakukan tinjauan dan monitoring setiap aspek
        pelayanannya. Salah satunya adalah dengan melakukan pemantauan berdasarkan data pelayanan,
        termasuk data indikator mutu. Setiap indikator dibuat profil indikatornya oleh komite Mutu
        bekerja sama dengan unit terkait. Pengumpulan data dilakukan oleh Penanggung Jawab Data unit
        terkait. Selain itu pemantauan juga dilakukan melalui supervisi dan validasi data oleh
        anggota Komite Mutu.
      </p>
    </div>

    <div class="grid gap-10 px-0 md:px-3 lg:px-5 mt-10">
      <!-- Indikator Mutu Pertama -->
      <div>
        <h3 class="font-extrabold text-xl">1. Kepatuhan Kebersihan Tangan</h3>
        <div class="grid gap-2 p-4">
          <img
            alt="Indikator-mutu-kebersihan-tangan"
            src="../components/img/Indikator_mutu/indikator_mutu_kebersihan_tangan.png"
            class="w-[500px]"
          />
          <img
            alt="Indikator-mutu-kebersihan-tangan"
            src="../components/img/Indikator_mutu/indikator_mutu_kebersihan_tangan2.png"
            class="w-[500px]"
          />
        </div>

        <div class="grid gap-3">
          <div class="px-3">
            <div>
              <label class="label font-bold">Analisa :</label>
              <ul class="list-disc ml-5">
                <li>
                  Dilihat dari capaian triwulan II bulan Mei – Juli 2023 sudah mencapai target
                </li>
              </ul>
            </div>
          </div>
          <div class="px-3">
            <div>
              <label class="label font-bold">Rencana Tindak Lanjut :</label>
              <ul class="list-disc ml-5">
                <li>Tetap melakukan supervisi kepatuhan cuci tangan.</li>
                <li>Memantau ketersediaan dan distribusi fasilitas kebersihan tangan</li>
                <li>Selalu memberikan sosialisasi pada orientasi pegawai baru</li>
                <li>Mempertahankan Capaian</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Indikator Mutu Kedua -->
      <div>
        <h3 class="font-extrabold text-xl">2. Kepatuhan Penggunaan Alat Pelindung Diri (APD)</h3>
        <div class="grid gap-2 p-4">
          <img
            alt="Indikator-mutu-kepatuhan-penggunaan-apd"
            src="../components/img/Indikator_mutu/indikator_mutu_penggunaan_apd.png"
            class="w-[500px]"
          />
          <img
            alt="Indikator-mutu-kepatuhan-penggunaan-apd"
            src="../components/img/Indikator_mutu/indikator_mutu_penggunaan_apd2.png"
            class="w-[500px]"
          />
        </div>

        <div class="grid gap-3">
          <div class="px-3">
            <div>
              <label class="label font-bold">Analisa :</label>
              <ul class="list-disc ml-5">
                <li>
                  Dilihat dari capaian triwulan II bulan Mei – Juli 2023 sudah mencapai target
                </li>
              </ul>
            </div>
          </div>
          <div class="px-3">
            <div>
              <label class="label font-bold">Rencana Tindak Lanjut :</label>
              <ul class="list-disc ml-5">
                <li>Tetap melakukan supervisi pemakaian APD</li>
                <li>Memantau Ketersediaan dan distribusi APD di tiap unit</li>
                <li>
                  Selalu memberikan sosialisasi pada orientasi pegawai baru cara dan kapan
                  penggunaan APD
                </li>
                <li>Mempertahankan Capaian</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-[50px] font-bold animate-bounce">UNDER DEVELOP ....</p>
    </div>
  </div>
</template>

<script setup>
import { ListDetailsIcon } from 'vue-tabler-icons'
</script>

<style scoped>
.img {
  background-image: url('../components/img/dctr-with.webp');
}
</style>
