import { createRouter, createWebHistory } from 'vue-router'
import FacilityView from '../../views/FacilityView.vue'
import AboutView from '../../views/AboutView.vue'

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
      component: () => import('../../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/jadwal-dokter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/Doctor-Schedule.vue')
    },
    {
      path: '/registration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/RegistrasiView.vue')
    },
    {
      path: '/jumlah-tempat-tidur',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/BedStatusView.vue')
    },
    {
      path: '/berita-informasi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/NewsView.vue')
    },
    {
      path: '/fasilitas',
      component: FacilityView
    }
  ]
})

export default router
