import {Router} from 'express'
import {user} from '../controllers/user.controller'

const router = Router()

router.route('/')
    .get(user)

export default router