<template>
  <div>
    <NavigationBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import NavigationBar from './components/Molecules/NavigationBar.vue'
import Footer from './components/Molecules/FooterView.vue'
</script>
