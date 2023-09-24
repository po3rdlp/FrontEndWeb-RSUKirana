<template>
  <div class="hero min-h-screen imgg">
    <div class="hero-overlay backdrop-blur-[2px]"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-lg md:text-4xl lg:text-5xl font-bold">FASILITAS</h1>
        <p class="mb-5">FASILITAS RSIA KIRANA MANADO</p>
      </div>
    </div>
  </div>

  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="max-w-screen-md mb-8 lg:mb-16">
      <h2 class="mb-4 flex text-4xl font-extrabold">LAYANAN UNGGULAN KAMI</h2>
    </div>
    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <EmpathizeIcon />
        </div>
        <h3 class="mb-2 text-xl font-bold">PELAYANAN KESEHATAN IBU DAN ANAK</h3>
        <p class="text-gray-500 dark:text-gray-400">
          RSIA Kirana menyediakan pelayanan kesehatan kepada ibu dan anak dengan memberikan tindakan
          medis dan pengobatan penyakit pada ibu hamil, bayi, anak dan remaja.
        </p>
      </div>

      <div
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
      >
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <HeartbeatIcon />
        </div>
        <h3 class="mb-2 text-xl font-bold">PELAYANAN JANTUNG</h3>
        <p class="text-gray-500 dark:text-gray-400">
          RSIA Kirana menyediakan pelayanan kesehatan yang berkaitan dengan jantung dan pembuluh
          darah (kardiovaskular) pada pasien dan menyediakan fasilitas pemeriksaan jantung lengkap.
        </p>
      </div>

      <div
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
      >
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <MicroscopeIcon />
        </div>
        <h3 class="mb-2 text-xl font-bold">PEMERIKSAAN LABORATORIUM KLINIK</h3>
        <p class="text-gray-500 dark:text-gray-400">
          RSIA Kirana menyediakan pemeriksaan laboratorium klinik lengkap di Manado dan menyediakan
          pemeriksaan Antigen M. TBC kepada pasien.
        </p>
      </div>
    </div>
  </div>

  <div class="h-full w-full p-5">
    <div class="hero h-full bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row" id="laboratorium">
        <img
          src="../components/img/Ruangan/Laboratorium.jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">LABORATORIUM</h1>
          <p class="py-6">
            Pelayanan penunjang yang bertujuan untuk membantu diagnosa suatu penyakit, menentukan
            resiko terhadap suatu penyakit dan menentukan prognosis/perjalanan penyakit sehingga
            dapat digunakan sebagai pemantau perkembangan dan keberhasilan pengobatan suatu
            penyakit.
          </p>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row-reverse" id="ultrasonografi">
        <img
          src="../components/img/5148009.jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">ULTRASONOGRAFI</h1>
          <p class="py-6">
            Teknik diagnostik pencitraan menggunakan suara ultra yang digunakan untuk mencitrakan
            organ internal dan otot, ukuran mereka, struktur, dan luka patologi, membuat teknik ini
            berguna untuk memeriksa organ, termasuk pemeriksaan kandungan pada ibu hamil.
          </p>
        </div>
      </div>
    </div>
    <div class="hero h-full bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row" id="elektrokardiogram">
        <img
          src="../components/img/Ruangan/EKG_(1).jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">ELEKTROKARDIOGRAM</h1>
          <p class="py-6">
            Pemeriksaan untuk mengukur dan merekam aktivitas listrik jantung menggunakan mesin
            pendeteksi impuls listrik (elektrokardiograf).
          </p>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row-reverse" id="kardiotokografi">
        <img
          src="../components/img/5148009.jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">KARDIOTOKOGRAFI</h1>
          <p class="py-6">
            Kardiotokografi (CTG) adalah Alat yang dipakai untuk mencatat pola denyut jantung janin
            dalam hubungannya dengan adanya kontraksi ataupun aktivitas janin dalam rahim.
          </p>
        </div>
      </div>
    </div>
    <div class="hero h-full bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row" id="ekokaridografi">
        <img
          src="../components/img/Ruangan/EKG_(1).jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">EKOKARDIOGRAFI</h1>
          <p class="py-6">
            Ekokardiografi (USG jantung) adalah metode pemeriksaan yang menggunakan gelombang suara
            berfrekuensi tinggi untuk menangkap gambaran struktur organ jantung. Ekokardiografi
            biasanya dibantu dengan teknologi Doppler yang dapat mengukur kecepatan dan arah aliran
            darah.
          </p>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row-reverse" id="holtermonitoring">
        <img
          src="../components/img/Ruangan/holter_monitoring_(1).jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">HOLTER MONITORING</h1>
          <p class="py-6">
            Pemeriksaan untuk mengukur dan merekam aktivitas jantung selama 24-48 jam atau lebih
            menggunakan perangkat portabel.
          </p>
        </div>
      </div>
    </div>
    <div class="hero h-full bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row" id="treadmill">
        <img
          src="../components/img/Ruangan/Treadmil.jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">TREADMILL</h1>
          <p class="py-6">
            Pemeriksaan yang dilakukan untuk monitoring kinerja jantung seorang pasien selama
            melakukan aktivitas fisik.
          </p>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row-reverse" id="eecp">
        <img
          src="../components/img/Ruangan/EECP_(1).jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">EECP</h1>
          <p class="py-6">
            prosedur non-invasif yang bertujuan menumbuhkan pembuluh kolateral baru secara alami.
            Tindakan ini baik untuk penderita jantung koroner, gagal jantung, penderita stroke,
            disfungsi ereksi.
          </p>
        </div>
      </div>
    </div>
    <div class="hero h-full bg-base-200 headline">
      <div class="hero-content flex-col lg:flex-row" id="abpm">
        <img
          src="../components/img/5148009.jpg"
          class="w-56 md:w-96 lg:w-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-lg md:text-4xl lg:text-5xl font-bold">ABPM</h1>
          <p class="py-6">
            Tindakan medis yang dilakukan untuk memantau tekanan darah pasien selama 24 jam.
            Tindakan medis ini biasanya diterapkan untuk menangani pasien penyakit hipertensi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EmpathizeIcon, HeartbeatIcon, MicroscopeIcon } from 'vue-tabler-icons'
import scrollRevealInstance from '../assets/ScrollReveal/ScrollReveal'

export default {
  components: { EmpathizeIcon, HeartbeatIcon, MicroscopeIcon },

  mounted() {
    scrollRevealInstance()
  }
}
</script>

<style scoped>
.imgg {
  background-image: url('../components/img/Gedung/RSIAKIRANA3.jpeg');
}
</style>
