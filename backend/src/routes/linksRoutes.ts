import express from 'express'
import { createLink, linkDetails, test } from '../controller/linksController'

const router = express.Router()

router.get('/test', test)
router.post('/create', createLink)
router.get('/details/:id', linkDetails)

export default router