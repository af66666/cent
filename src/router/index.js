import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import insure from '@/pages/insure'
import market from '@/pages/market'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉router中的#号
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/insure',
      name: 'insure',
      component: insure,
    },
    {
      path: '/market',
      name: 'market',
      component: market,
    },
  ]
})
