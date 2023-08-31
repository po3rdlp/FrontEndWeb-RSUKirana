<template>
  <div class="flex justify-evenly transition-shadow bg-[#cc0088]">
    <div class="flex w-3/6 p-2 space-x-5 text-white text-xs">
      <p class="flex items-center">HUBUNGI KAMI</p>
      <p class="flex items-center">|</p>
      <p class="flex items-center gap-2"><BrandWhatsappIcon /> +000 000 000</p>
      <p class="flex items-center gap-2"><BrandInstagramIcon />RSIA KIRANA</p>
      <p class="flex items-center gap-2"><BrandFacebookIcon />RSIA KIRANA MANADO</p>
      <p class="flex items-center gap-2"><MailCheckIcon />example@gmail.com</p>
    </div>
    <div class="flex justify-center items-center">
      <Button class="btn btn-sm flex bg-purple-300 border-none text-xs"
        ><AmbulanceIcon /> Emergency Calls : +000 000 000
      </Button>
    </div>
  </div>
</template>

<script setup>
import {
  BrandWhatsappIcon,
  BrandInstagramIcon,
  BrandFacebookIcon,
  MailCheckIcon,
  AmbulanceIcon
} from 'vue-tabler-icons'
</script>
