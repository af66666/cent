import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import articles from '@/pages/articles'
import insure from '@/pages/insure'
import market from '@/pages/market'
import customer from '@/pages/customer'
import message from '@/pages/message'
import articledetail from '@/pages/articleDetail'
import results from '@/pages/results'


Vue.use(Router)

export default new Router({
  mode: 'history',//去掉router中的#号
  routes: [
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
      path: '/articles',
      name: 'articles',
      component: articles,
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
    {
      path: '/customer',
      name: 'customer',
      component: customer,
    },
    {
      path: '/message',
      name: 'message',
      component: message,
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      component: articledetail,
    },
    {
      path: '/results',
      name: 'results',
      component: results,
    },
  ]
})
