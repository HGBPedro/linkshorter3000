import express from 'express'
import { createLink, updateLink, linkDetails, deleteLink, test } from '../controller/linksController'

const router = express.Router()

router.get('/test', test)
router.post('/create', createLink)
router.get('/details/:id', linkDetails)
router.put('/update/:id', updateLink)
router.delete('/delete/:id', deleteLink)

export default router