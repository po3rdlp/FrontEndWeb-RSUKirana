<template>
  <main>
    <div>
      <div>
        <SectionIntro />
      </div>
      <div>
        <SectionFacilities />
      </div>
    </div>
  </main>
</template>

<script>
import SectionIntro from '../components/Molecules/SectionView/SectionIntro.vue'
import SectionFacilities from '../components/Molecules/SectionView/SectionFacilities.vue'
export default {
  components: { SectionIntro, SectionFacilities },
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
