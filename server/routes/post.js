import { Router } from 'express'
import { getAllPosts, createAPost } from '../controllers/post.js'

const router = Router()

router.get('/', getAllPosts)

router.post('/', createAPost)

export default router
