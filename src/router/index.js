import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import ArticleList from '@/view/ArticleList/ArticleList'
import ArticleDetail from "../view/ArticleDetail/ArticleDetail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/articleList',
      component: ArticleList
    },
    {
      path: '/articleDetail',
      component: ArticleDetail
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
      path: "/",
      redirect: "/home",
    },
    // {
    //   path:'/detail/:xx',
    //   component: Detail
    //
    // }
  ]
})
