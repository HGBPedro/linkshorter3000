import { request, Request, Response } from 'express'
import link from '../models/linkshorter-schema'
import { isValidObjectId, ObjectId } from 'mongoose'
import Link from '../models/linkshorter-schema'

interface ILink {
  _id: string
  name: string
  url: string
}

const test = function (req: Request, res: Response) {
  res.redirect("https://open.spotify.com/track/4hBQtVSJt5fZ2VZGECVe3N?si=82a38a24ec634451")
}

async function createLink (req: Request, res: Response, next: any) {
  await link.create(req.body).then((response: ILink) => {
    res.send({ message: 'Link criado', _id: response._id })
    return
  }).catch(next)
}

function linkDetails (req: Request, res: Response) {
  link.find({_id: req.params.id}).then(function(response: any){
    res.send(response)
    return
  })
}

function redirectToUrl (req: Request, res: Response) {
  if (req.params === null) res.status(402).send('Id de link não enviado.')
  Link.findOne({ _id: req.params.id }, 'url', (error, linkDocument: ILink) => {
    if (error?.name === 'CastError') {
      res.status(402).send('Link não encontrado')
      return
    }
    res.redirect(linkDocument.url)
    return
  })
}

export { createLink, linkDetails, test, redirectToUrl }
