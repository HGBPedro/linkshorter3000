import { request, Request, Response } from 'express'
import link from '../models/linkshorter-schema'
import { isValidObjectId, ObjectId } from 'mongoose'

const test = function (req: Request, res: Response) {
  res.send("Musica boa aqui: https://open.spotify.com/track/4hBQtVSJt5fZ2VZGECVe3N?si=82a38a24ec634451")
}

function createLink (req: Request, res: Response, next: any) {
  link.create(req.body).then(function(response: any){
    res.send(response);
  }).catch(next)
  return true
}

function linkDetails (req: Request, res: Response) {
  link.find({_id: req.params.id}).then(function(response: any){
    res.send(response);
    })
  return true
}

export { createLink, linkDetails, test }
