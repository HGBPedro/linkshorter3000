import express from 'express'
import { createLink, linkDetails, redirectToUrl, test } from '../controller/linksController'

const router = express.Router()

router.get('/test', test)
router.post('/create', createLink)
router.get('/details/:id', linkDetails)
router.get('/redirect/:id', redirectToUrl)

export default router