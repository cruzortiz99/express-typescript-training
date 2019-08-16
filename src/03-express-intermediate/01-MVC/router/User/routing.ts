import { Router } from 'express'
import { getUser, postUser } from '../../controllers/user'

const router = Router()

router.get('/form', getUser)

router.post('/form', postUser)

export default router
