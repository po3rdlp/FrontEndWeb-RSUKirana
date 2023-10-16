<template>
  <div class="hidden lg:block">
    <UpperNavbar />
  </div>
  <div class="sticky z-50 top-0 w-full shadow-xl">
    <NavigationBar />
  </div>
  <div>
    <router-view v-slot="{ Component, route }">
      <Transition name="slide-fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Molecules/FooterView.vue'
import NavigationBar from './components/Molecules/NavigationBar.vue'
import UpperNavbar from './components/Molecules/UpperNavbar.vue'
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(0.5em);
  opacity: 0;
}
</style>
