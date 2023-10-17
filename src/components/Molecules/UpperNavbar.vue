<template>
  <div class="transition-shadow bg-[#cc0088] p-2">
    <div class="flex justify-center w-full gap-20">
      <div class="flex items-center gap-2 text-white text-xs">
        <p class="flex items-center text-xs btn btn-ghost hover:bg-[#cc0088] cursor-default">
          HUBUNGI KAMI
        </p>

        <button class="flex items-center gap-2" @click="whatsappClick">
          <BrandWhatsappIcon color="white" :size="25" stroke-width="0.9" /> 081388888898
        </button>
        <button class="flex items-center gap-2" @click="instagramClick">
          <BrandInstagramIcon color="white" :size="25" stroke-width="0.9" />RSIA KIRANA
        </button>
        <button class="flex items-center gap-2" @click="facebookClick">
          <BrandFacebookIcon color="white" :size="25" stroke-width="0.9" />Rumah Sakit Kirana
        </button>
        <p class="flex items-center gap-2">
          <MailCheckIcon color="white" :size="25" stroke-width="0.9" />rskirana94@gmail.com
        </p>
      </div>
      <div class="flex justify-center items-center" @click="whatsappEmergencyClick">
        <button
          class="btn btn-sm rounded-xl flex btn-ghost text-slate-300 border border-gray-200 text-xs"
        >
          <AmbulanceIcon :size="20" :color="white" /> Emergency Calls : 082234567899
        </button>
      </div>
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

const whatsappClick = () => {
  window.open('https://wa.me/6281388888898', '_blank')
}

const whatsappEmergencyClick = () => {
  window.open('https://wa.me/6282234567899', '_blank')
}

const instagramClick = () => {
  window.open('https://www.instagram.com/rsiakirana_manado/', '_blank')
}

const facebookClick = () => {
  window.open('https://m.facebook.com/profile.php?id=141344839259693', '_blank')
}
</script>
