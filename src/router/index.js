import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    // {
    //   path: '/film',
    //   component: Film,
    //   children:[
    //     {
    //       path: 'play',
    //       component: Play,
    //       name:'myplay',
    //     },
    //     {
    //       path: 'soon',
    //       component: Soon
    //     },
    //     {
    //       path:'/film',
    //       redirect:{name:'myplay'},
    //
    //     },
    //
    //   ]
    // },
    // {
    //   path: '/card',
    //   component: Card
    // },
    {
      path:"/",
      redirect:"/home",
    },
    // {
    //   path:'/detail/:xx',
    //   component: Detail
    //
    // }
  ]
})
