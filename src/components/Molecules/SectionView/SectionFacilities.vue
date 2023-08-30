<template>
  <section class="bg-gray-200">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 flex text-4xl font-extrabold">
          <ListDetailsIcon class="mr-3" /> FASILITAS PENUNJANG
        </h2>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <RouterLink to="/fasilitas#laboratorium">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <MicroscopeIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">LABORATORIUM</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Sarana pengukuran, penetapan dan pengujian untuk penentuan jenis penyakit, penyebab
              penyakit, dan kondisi kesehatan.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#ultrasonografi">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <EarIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">ULTRASONOGRAFI</h3>
            <p class="text-gray-500 dark:text-gray-400">
              melihat struktur internal tubuh, seperti organ-organ, pembuluh darah, dan jaringan
              lunak. Ultrasonografi sering digunakan dalam diagnosis kehamilan, masalah organ dalam,
              dan kondisi medis lainnya.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#elektrokardiogram">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <ActivityHeartbeatIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">ELEKTROKARDIOGRAM (EKG)</h3>
            <p class="text-gray-500 dark:text-gray-400">
              menganalisis ritme jantung, detak jantung, dan pola aktivitas jantung lainnya. EKG
              sering digunakan dalam evaluasi kesehatan jantung, diagnosis gangguan jantung, dan
              pemantauan pasien dengan masalah kardiovaskular.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#kardiotokografi">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <HeartbeatIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">Kardiotokografi (CTG)</h3>
            <p class="text-gray-500 dark:text-gray-400">
              memberikan informasi penting tentang kesejahteraan janin selama proses persalinan dan
              membantu dokter mengambil tindakan jika diperlukan.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#ekokardiografi">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <HeartFilledIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">Ekokardiografi</h3>
            <p class="text-gray-500 dark:text-gray-400">
              membantu dokter mendiagnosis masalah jantung, seperti kelainan katup atau kelainan
              struktural lainnya, dan membimbing perawatan yang tepat.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#holtermonitoring">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <HeartRateMonitorIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">Holter Monitoring</h3>
            <p class="text-gray-500 dark:text-gray-400">
              merekam aktivitas listrik jantung selama periode waktu tertentu, biasanya 24 jam. Ini
              membantu mengidentifikasi kelainan ritme jantung yang mungkin tidak terdeteksi selama
              pemeriksaan singkat.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#treadmill">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <RunIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">Treadmill (stress test)</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Pemeriksaan fisik jantung yang memberikan informasi asupan darah dan oksigen dari
              sirkulasi saat terjadi stress fisik.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#eecp">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <BoltIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">EECP</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Meningkatkan aliran darah ke jantung dan meningkatkan sirkulasi pada pasien dengan
              penyakit arteri koroner.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/fasilitas#abpm">
          <div
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 headline"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <HeartRateMonitorIcon />
            </div>
            <h3 class="mb-2 text-xl font-bold">ABPM</h3>
            <p class="text-gray-500 dark:text-gray-400">
              memberikan gambaran lebih akurat tentang pola tekanan darah sepanjang hari, membantu
              dalam diagnosis hipertensi dan perencanaan pengobatan yang lebih tepat.
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
import scrollRevealInstance from '../../../assets/ScrollReveal/ScrollReveal'
import {
  MicroscopeIcon,
  RunIcon,
  ListDetailsIcon,
  EarIcon,
  ActivityHeartbeatIcon,
  HeartbeatIcon,
  HeartRateMonitorIcon,
  HeartFilledIcon,
  BoltIcon
} from 'vue-tabler-icons'

export default {
  components: {
    MicroscopeIcon,
    RunIcon,
    ListDetailsIcon,
    EarIcon,
    ActivityHeartbeatIcon,
    HeartbeatIcon,
    HeartRateMonitorIcon,
    HeartFilledIcon,
    BoltIcon,
    RouterLink
  },

  mounted() {
    scrollRevealInstance()
  }
}
</script>
