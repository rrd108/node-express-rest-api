import { validateToken } from '../models/users.js'

const noAuthResources = {
  GET: ['/products'],
  POST: ['/users/login'],
  PATCH: [],
  DELETE: [],
}

const authMiddleware = (req, res, next) => {
  if (noAuthResources[req.method].find(url => url == req.url)) {
    return next()
  }

  if (req.headers.token) {
    validateToken(req.headers.token, (err, user) => {
      if (err) {
        throw err
      }
      if (user) {
        return next()
      } else {
        res.status(401).send('Authentication error')
      }
    })
    return
  }

  res.status(401).send('Authentication error')
}

export default authMiddleware
