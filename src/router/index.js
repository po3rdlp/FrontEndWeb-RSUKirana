import { createRouter, createWebHistory } from 'vue-router'
import FacilityView from '../views/FacilityView.vue'
import AboutView from '../views/AboutView.vue'
import DoctorSchedule from '../views/Doctor-Schedule.vue'
import RegistrasiView from '../views/RegistrasiView.vue'
import BedStatusView from '../views/BedStatusView.vue'
import NewsView from '../views/NewsView.vue'
import AddNews from '../views/AddNews.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

  routes: [
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
      component: DoctorSchedule
    },
    {
      path: '/registration',
      component: RegistrasiView
    },
    {
      path: '/jumlah-tempat-tidur',
      component: BedStatusView
    },
    {
      path: '/berita-informasi',
      component: NewsView
    },
    {
      path: '/fasilitas',
      component: FacilityView
    },
    {
      path: '/tambah-berita',
      component: AddNews
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
