import { createRouter, createWebHistory } from 'vue-router'
import FacilityView from '../views/FacilityView.vue'
import AboutView from '../views/AboutView.vue'
import DoctorSchedule from '../views/Doctor-Schedule.vue'
import RegistrasiView from '../views/RegistrasiView.vue'
import BedStatusView from '../views/BedStatusView.vue'
import NewsView from '../views/NewsView.vue'
import AddNews from '../views/AddNews.vue'
import NotFound from '../views/NotFound.vue'
import NewsFullView from '../views/NewsFullView.vue'
import QualityIndicator from '../views/QualityIndicatorview.vue'
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
    component: AboutView
  },
  {
    path: '/jadwal-dokter',
    name: 'jadwal-dokter',
    component: DoctorSchedule
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrasiView
  },
  {
    path: '/jumlah-tempat-tidur',
    name: 'jumlah-tempat-tidur',
    component: BedStatusView
  },
  {
    path: '/berita-informasi',
    name: 'berita-informasi',
    component: NewsView
  },
  {
    path: '/fasilitas',
    name: 'fasilitas',
    component: FacilityView
  },
  {
    path: '/berita-informasi/:id',
    component: NewsFullView,
    props: true
  },
  {
    path: '/indikator-mutu',
    component: QualityIndicator
  },
  {
    path: '/tambah-berita',
    component: AddNews,
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
    component: NotFound
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
