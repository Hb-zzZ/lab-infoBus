import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from '@/views/page-a'
import PageB from '@/views/page-b'

Vue.use(VueRouter)

const routes = [
  {
    path: '/a',
    name: 'PageA',
    component: PageA
  },
  {
    path: '/b',
    name: 'PageB',
    component: PageB
  }
]

const router = new VueRouter({
  routes
})

export default router
