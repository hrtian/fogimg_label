import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Score from '@/components/pages/Score'
import Succeed from '@/components/pages/Succeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
    {
      path: '/succeed',
      name: "Succeed",
      component: Succeed
    }
  ]
})
