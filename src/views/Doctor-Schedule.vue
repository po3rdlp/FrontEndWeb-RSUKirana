<template>
  <div class="hero min-h-screen imgg">
    <div class="hero-overlay backdrop-blur-[2px]"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
          JADWAL PRAKTEK DOKTER SPESIALIS
        </h1>
        <p class="mb-5">
          Anda dapat melihat Jadwal Dokter di bawah. Jadwal Dokter Terkini dan Terupdate.
        </p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button
      @click="showContent('ALL')"
      type="button"
      class="hover:text-white border hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 bg-gray-300"
    >
      All categories
    </button>
    <button
      @click="showContent('PENYAKITDALAM')"
      type="button"
      class="bg-slate-300 border border-white hover:border-gray-200 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800"
    >
      PENYAKIT DALAM
    </button>
    <button
      @click="showContent('KANDUNGAN')"
      type="button"
      class="bg-slate-300 border border-white hover:border-gray-200 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800"
    >
      KEBIDANAN & KANDUNGAN
    </button>
    <button
      @click="showContent('JANTUNG')"
      type="button"
      class="bg-slate-300 border border-white hover:border-gray-200 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800"
    >
      JANTUNG
    </button>
    <button
      @click="showContent('ANAK')"
      type="button"
      class="bg-slate-300 border border-white hover:border-gray-200 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800"
    >
      ANAK
    </button>
    <button
      @click="showContent('BEDAH')"
      type="button"
      class="bg-slate-300 border border-white hover:border-gray-200 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800"
    >
      BEDAH
    </button>
  </div>

  <div v-if="activeContent === 'ALL' || activeContent === 'KANDUNGAN'" class="p-5 md:p-7 lg:p-10">
    <p class="text-center text-2xl mb-5 font-bold">Kebidanan & Kandungan</p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr._Meiske_runkat.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Yuniar.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Joel_Osbert.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Jennifer.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
    </div>
  </div>

  <div
    v-if="activeContent === 'ALL' || activeContent === 'PENYAKITDALAM'"
    class="p-5 md:p-7 lg:p-10"
  >
    <p class="text-center text-2xl mb-5 font-bold">PENYAKIT DALAM</p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img
          src="../components/img/jadwal/Jadwal_r_arthur.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr._novita_tanasal.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Bisuk_sedli.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
    </div>
  </div>

  <div v-if="activeContent === 'ALL' || activeContent === 'ANAK'" class="p-5 md:p-7 lg:p-10">
    <p class="text-center text-2xl mb-5 font-bold">ANAK</p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Irene.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Jane.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_Novie_Rampengan.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
        />
      </div>
    </div>
  </div>

  <div v-if="activeContent === 'ALL' || activeContent === 'JANTUNG'" class="p-5 md:p-7 lg:p-10">
    <p class="text-center text-2xl mb-5 font-bold">JANTUNG & PEMBULUH DARAH</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:3 gap-4">
      <div>
        <img
          src="../components/img/jadwal/Jadwal_prof_Starry_Rampengan.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
          onclick="modal.showModal()"
        />
      </div>
    </div>
  </div>

  <div v-if="activeContent === 'ALL' || activeContent === 'BEDAH'" class="p-5 md:p-7 lg:p-10">
    <p class="text-center text-2xl mb-5 font-bold">BEDAH</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:3 gap-4">
      <div>
        <img
          src="../components/img/jadwal/Jadwal_dr_maria_kaunang.webp"
          alt="Dr"
          class="h-auto max-w-full rounded-lg"
          onclick="openModal()"
        />
      </div>
    </div>
  </div>

  <dialog class="modal modal-bottom sm:modal-middle" :open="isModalOpen">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn" @click="closeModal">Close</button>
      </div>
    </form>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      activeContent: 'ALL',
      isModalOpen: false
    }
  },
  methods: {
    showContent(content) {
      this.activeContent = content === this.activeContent ? 'ALL' : content
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }
  }
}
</script>

<style scoped>
.imgg {
  background-image: url('../components/img/Ruangan/doctor-discuss.webp');
}
</style>
