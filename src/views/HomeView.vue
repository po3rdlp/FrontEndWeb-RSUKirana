<template>
  <main>
    <div>
      <div class="bg-[url('../components/img/tiomothy-swope.jpg')] bg-cover bg-accent-focus">
        <SectionIntro />
      </div>
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
