import link from '../models/linkshorter-schema'

const test = function (req, res) {
  res.send("Musica boa aqui: https://open.spotify.com/track/4hBQtVSJt5fZ2VZGECVe3N?si=82a38a24ec634451")
}

function createLink (req, res) {
  return true
}

function linkDetails (req, res) {
  return true
}

function updateLink (req, res) {
  return true
}

function deleteLink (req, res) {
  return true
}

export { createLink, updateLink, linkDetails, deleteLink, test }
