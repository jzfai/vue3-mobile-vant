import router from './router'
router.beforeEach(async (to, from, next) => {
  //jump page
  next()
})

router.afterEach(() => {})
