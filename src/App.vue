<template>
  <div class="hidden lg:block">
    <UpperNavbar />
  </div>
  <div class="sticky z-50 top-0 w-full">
    <NavigationBar />
  </div>
  <div>
    <RouterView />
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
