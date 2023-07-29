<template>
  <div>
    <div class="absolute top-0 w-full">
      <NavigationBar />
    </div>
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Molecules/FooterView.vue'
import NavigationBar from './components/Molecules/NavigationBar.vue'
</script>
