import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/index')
        },
        {
          path: 'notice',
          meta: {
            title: '通知早知道',
            type: 2
          },
          component: () => import('@/views/notice')
        },
        {
          path: 'user',
          component: () => import('@/views/user')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/newseyes',
      meta: {
        title: '信工新闻眼',
        type: 0
      },
      component: () => import('@/views/news')
    },
    {
      path: '/oneclick',
      meta: {
        title: '党建一点通',
        type: 3
      },
      component: () => import('@/views/news')
    },
    {
      path: '/showidentity',
      meta: {
        title: '党员亮身份',
        type: 5
      },
      component: () => import('@/views/news')
    },
    {
      path: '/anytimestudy',
      meta: {
        title: '随时随地学',
        type: 6
      },
      component: () => import('@/views/news')
    },
    {
      path: '/systemconstruction',
      meta: {
        title: '制度建设',
        type: 4
      },
      component: () => import('@/views/news')
    },
    {
      path: '/activity',
      meta: {
        title: '特色活动',
        type: 1
      },
      component: () => import('@/views/news')
    },
    {
      path: '/politicalstudy',
      meta: {
        title: '政治学习',
        type: 8
      },
      component: () => import('@/views/news')
    },
    {
      path: '/newsDetail',
      component: () => import('@/views/newsDetail')
    },
    {
      path: '/life',
      meta: {
        title: '掌上组织生活'
      },
      component: () => import('@/views/life')
    },
    {
      path: '/interactive',
      meta: {
        title: '党友云互动',
        type: 0
      },
      component: () => import('@/views/interactive')
    },
    {
      path: '/interactivereply',
      meta: {
        title: '党友云互动'
      },
      component: () => import('@/views/interactivereply')
    },
    {
      path: '/historyToday',
      meta: {
        title: '党史上的今天'
      },
      component: () => import('@/views/historyToday')
    },
    {
      path: '/anytimePhoto',
      meta: {
        title: '随时随地拍',
        type: 7
      },
      component: () => import('@/views/anytimePhoto')
    },
    {
      path: '/personInfo',
      meta: {
        title: '个人信息'
      },
      component: () => import('@/views/personInfo')
    },
    {
      path: '/updataInfo',
      meta: {
        title: '修改个人信息'
      },
      component: () => import('@/views/updataInfo')
    },
    {
      path: '/personScore',
      meta: {
        title: '个人量化积分'
      },
      component: () => import('@/views/personScore')
    },
    {
      path: '/scoreDetail',
      meta: {
        title: '积分明细'
      },
      component: () => import('@/views/scoreDetail')
    },
    {
      path: '/changePass',
      meta: {
        title: '修改密码'
      },
      component: () => import('@/views/changePass')
    },
    {
      path: '/pay',
      meta: {
        title: '缴纳党费'
      },
      component: () => import('@/views/pay')
    },
    {
      path: '/findGroup',
      meta: {
        title: '流动党员找组织'
      },
      component: () => import('@/views/findGroup')
    },
  ]
})

export default router;
