import { Router } from 'express'
import { getUser, postUser, getUsers } from '../../controllers/user'

const router = Router()

router.get('/user/form', getUser)
router.post('/user/form', postUser)
router.get('/users', getUsers)
export default router
