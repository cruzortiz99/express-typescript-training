import { Router } from 'express'
import { error404Handler } from '../../controllers/errors'
const router = Router()

router.use(error404Handler)

export default router
