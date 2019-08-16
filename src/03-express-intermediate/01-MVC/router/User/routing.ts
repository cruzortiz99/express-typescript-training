import { Router } from 'express'
import { getUser, postUser } from '../../controllers/user'

const router = Router().use('/user')

router.get('/form', getUser)
router.post('/form', postUser)

export default router
