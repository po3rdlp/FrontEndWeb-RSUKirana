<template>
  <div class="flex justify-end transition-shadow bg-[#cc0088]">
    <div class="flex flex-wrap text-white">
      <p class="btn btn-ghost normal-case text-xs"><PhoneCallIcon /> +000 000 000</p>
      <p class="btn btn-ghost normal-case text-xs"><AtIcon />Example@gmail.com</p>
      <p class="btn btn-ghost hover:bg-none normal-case text-xs">
        <ClockFilledIcon />07.00 - 20.00 (Senin-Sabtu)
      </p>
    </div>
  </div>
</template>

<script setup>
import { AtIcon, PhoneCallIcon, ClockFilledIcon } from 'vue-tabler-icons'
</script>
