import { Router } from 'express'
import { generateImage } from '../controllers/dalle.js'

const router = Router()

router.post('/', generateImage)

export default router
