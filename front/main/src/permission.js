import router from './router'
import { getPageTitle } from '@/utils'

/* eslint-disable */
router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title)
})

router.afterEach((to, from) => {})
