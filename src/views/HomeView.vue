<template>
  <main>
    <div>
      <div class="bg-[url('../components/img/tiomothy-swope.jpg')] bg-cover bg-accent-focus">
        <SectionIntro />
      </div>
    </div>

    <div class="font-mono">
      <section class="h-screen bg-cover bg-center bg-opacity-75 flex justify-center items-center">
        <div>
          <h1
            class="text-3xl md:text-3xl lg:text-6xl text-slate-300 subpixel-antialiased shadow-md text-center mb-8"
          >
            RUMAH SAKIT IBU DAN ANAK <br />
            KIRANA MANADO
          </h1>
          <strong class="text-white">COMING SOON</strong>
        </div>
      </section>
      <hr class="section-divider" />
    </div>
  </main>
</template>

<script>
import SectionIntro from '../components/Molecules/SectionView/SectionIntro.vue'
export default {
  components: { SectionIntro },
  data() {
    return {}
  },
  methods: {
    prevSlide() {
      console.log('okok')
    },
    nextSlide() {
      console.log('ok1')
    }
  }
}
</script>
