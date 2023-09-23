<template>
  <div class="hero min-h-screen img">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-200">
          KETERSEDIAAN TEMPAT TIDUR
        </h1>
        <p class="mb-5">Ketersediaan Jumlah Tempat Tidur RSIA KIRANA MANADO</p>
      </div>
    </div>
  </div>
  <div class="w-full h-full p-5">
    <p class="text-center text-2xl text-gray-600 font-bold mb-5">KETERSEDIAAN TEMPAT TIDUR</p>
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <!-- head -->
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="hover:bg-pink-500 hover:text-gray-100">NAMA KAMAR</th>
            <th class="hover:bg-pink-500 hover:text-gray-100">KAPASITAS</th>
            <th class="hover:bg-pink-500 hover:text-gray-100">TERSEDIA</th>
          </tr>
        </thead>
        <tbody class="text-black">
          <!-- row 1 -->
          <tr>
            <td>KELAS VIP UTAMA</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <td>KELAS VIP</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <td>KELAS I</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>KELAS II</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>KELAS III</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <BedCount />
    </div>
  </div>
</template>

<script setup>
import BedCount from '../components/Molecules/BedCount.vue'
</script>

<style scoped>
.img {
  background-image: url('../components/img/Ruangan/RUANGAN1.jpeg');
}
</style>
