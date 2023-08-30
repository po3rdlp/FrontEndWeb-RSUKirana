<template>
  <main>
    <div>
      <div>
        <SectionIntro />
      </div>
      <div>
        <SectionNews />
      </div>
      <div>
        <SectionAbout />
      </div>
      <div>
        <SectionFacilities />
      </div>
      <div>
        <SectionMission />
      </div>
      <div>
        <SectionAsk />
      </div>
      <div>
        <SectionSponsor />
      </div>
    </div>
  </main>
</template>

<script>
import SectionIntro from '../components/Molecules/SectionView/SectionIntro.vue'
import SectionFacilities from '../components/Molecules/SectionView/SectionFacilities.vue'
import SectionAbout from '../components/Molecules/SectionView/SectionAbout.vue'
import SectionMission from '../components/Molecules/SectionView/SectionMission.vue'
import SectionAsk from '../components/Molecules/SectionView/SectionAsk.vue'
import SectionNews from '../components/Molecules/SectionView/SectionNews.vue'
import SectionSponsor from '../components/Molecules/SectionView/SectionSponsor.vue'

export default {
  components: {
    SectionIntro,
    SectionFacilities,
    SectionAbout,
    SectionMission,
    SectionAsk,
    SectionNews,
    SectionSponsor
  },
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
