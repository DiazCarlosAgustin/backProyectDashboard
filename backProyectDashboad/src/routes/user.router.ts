import {Router} from 'express'
import {getUsers, createUser} from '../controllers/user.controller'

const router = Router()

router.route('/')
    .get(getUsers)
    .post(createUser)
    
export default router