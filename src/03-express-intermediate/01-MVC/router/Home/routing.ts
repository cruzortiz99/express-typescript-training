import { Router } from 'express'
import { home, staticResources } from '../../controllers/home'

const router = Router()

router.get('/', home)
router.use(staticResources)

export default router
