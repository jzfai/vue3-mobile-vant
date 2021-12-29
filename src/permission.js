import router from './router'
import NProgress from 'nprogress'
import settings from './settings'
router.beforeEach(async (to, from, next) => {
  if (settings.isNeedNprogress) NProgress.start()

  //jump page
  next()
})

router.afterEach(() => {
  if (settings.isNeedNprogress) NProgress.done()
})
