import express from 'express'
import { createLink, updateLink, linkDetails, deleteLink } from '../controller/linksController'

const router = express.Router()

router.post('/create', createLink)
router.get('/details/:id', linkDetails)
router.put('/update/:id', updateLink)
router.delete('/delete/:id', deleteLink)

module.exports = router