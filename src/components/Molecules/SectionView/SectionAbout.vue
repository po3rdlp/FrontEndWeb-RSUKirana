<template>
  <div class="hero min-h-screen xl:h-full 2xl:h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="relative p-5 lg:p-10 headline">
        <img
          src="../../img/Gedung/RSIAKIRANA1.webp"
          loading="lazy"
          class="w-96 md:max-w-md lg:max-w-lg rounded-lg shadow-2xl transition ease-in-out delay-150 hover:scale-95 hover:bg-indigo-500 duration-300 text-neutral-content"
        />
        <img
          src="../../img/Gedung/RSIAKIRANA3.webp"
          loading="lazy"
          class="absolute bottom-1 left-1 w-36 h-36 md:w-52 md:h-52 lg:w-52 lg:h-52 rounded-lg shadow-2xl transition ease-in-out delay-150 hover:scale-95 hover:bg-indigo-500 duration-300 text-neutral-content"
        />
        <img
          src="../../img/Gedung/RSIAKIRANA1.webp"
          loading="lazy"
          class="absolute top-1 right-1 w-36 h-36 md:w-52 md:h-52 lg:w-52 lg:h-52 rounded-lg shadow-2xl transition ease-in-out delay-150 hover:scale-95 hover:bg-indigo-500 duration-300 text-neutral-content"
        />
      </div>
      <div class="headline">
        <h1 class="flex items-center gap-3 text-5xl font-bold">
          <InfoCircleIcon class="mr-2" /> TENTANG KAMI
        </h1>
        <p class="py-6">
          Rumah Sakit Ibu dan Anak Kirana adalah rumah sakit khusus tipe C yang berlokasi di pusat
          kota Manado. Kami berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat sesuai
          dengan visi dan misi kami. Kami melayani pasien umum, BPJS, dan asuransi untuk memberikan
          pelayanan kesehatan berkualitas. Kami mengundang dukungan, kritik, dan saran dari berbagai
          pihak guna terus meningkatkan kualitas pelayanan kami di RSIA Kirana Manado.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.471808626158!2d124.84486337413826!3d1.4886011611158851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328775476b387401%3A0x75d133f85e64a146!2sRumah%20Sakit%20Ibu%20%26%20Anak%20Kirana%20Manado!5e0!3m2!1sen!2sid!4v1692374911517!5m2!1sen!2sid"
          class="w-72 h-44 md:w-full lg:w-full rounded-lg pb-5"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <RouterLink to="/about" class="btn btn-primary">SELENGKAPNYA</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { InfoCircleIcon } from 'vue-tabler-icons'
import scrollRevealInstance from '../../../assets/ScrollReveal/ScrollReveal'

onMounted(() => {
  scrollRevealInstance()
})
</script>
