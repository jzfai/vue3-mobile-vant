/** When your routing table is too long, you can split it into small modules**/
const exampleRouter = [
  {
    path: '/hook',
    component: () => import('@/views/example/hook/Hook.vue'),
    name: 'Hook',
    meta: { title: 'Hook-Demo' }
  },
  {
    path: '/vuex-use',
    component: () => import('@/views/example/vuex-use/VuexUse.vue'),
    name: 'VuexUse',
    meta: { title: 'Vuex-Demo' }
  },
  {
    path: '/mock-test',
    component: () => import('@/views/example/mock-test/MockTest.vue'),
    name: 'MockTest',
    meta: { title: 'Mock-Demo' }
  },
  {
    path: '/svg-icon',
    component: () => import('@/views/example/svg-icon/SvgIcon.vue'),
    name: 'SvgIcon',
    meta: { title: 'Svg-Demo' }
  },
  {
    path: '/keep-alive',
    component: () => import('@/views/example/keep-alive'),
    name: 'KeepAlive',
    //cachePage: cachePage when page enter, default false
    //leaveRmCachePage: remove cachePage when page leave, default false
    meta: { title: 'Keep-Alive', cachePage: true, leaveRmCachePage: false }
  },
  {
    path: '/router-demo-f',
    name: 'routerDemoF',
    hidden: true,
    component: () => import('@/views/example/keep-alive/RouterDemoF.vue'),
    meta: { title: 'RouterDemo-F', activeMenu: '/writing-demo/keep-alive' }
  },
  {
    path: '/router-demo-s',
    name: 'routerDemoS',
    hidden: true,
    component: () => import('@/views/example/keep-alive/RouterDemoS.vue'),
    meta: { title: 'RouterDemo-S', activeMenu: '/writing-demo/keep-alive' }
  }
]

export default exampleRouter
