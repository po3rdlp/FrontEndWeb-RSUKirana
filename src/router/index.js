import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../assets/store/State'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jadwal-dokter',
    name: 'jadwal-dokter',
    component: () => import('../views/Doctor-Schedule.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrasiView.vue')
  },
  {
    path: '/jumlah-tempat-tidur',
    name: 'jumlah-tempat-tidur',
    component: () => import('../views/BedStatusView.vue')
  },
  {
    path: '/berita-informasi',
    name: 'berita-informasi',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/fasilitas',
    name: 'fasilitas',
    component: () => import('../views/FacilityView.vue')
  },
  {
    path: '/berita-informasi/:id',
    component: () => import('../views/NewsFullView.vue'),
    props: true
  },
  {
    path: '/indikator-mutu',
    component: () => import('../views/QualityIndicatorview.vue')
  },
  {
    path: '/tambah-berita',
    component: () => import('../views/AddNews.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if (authStore.isUserLoggedIn) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 95, behavior: 'smooth' }
    }
  },

  routes
})

export default router
