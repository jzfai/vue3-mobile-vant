import router from './router'
import settings from './settings'
router.beforeEach(async (to, from, next) => {
  //jump page
  next()
})

router.afterEach(() => {})
