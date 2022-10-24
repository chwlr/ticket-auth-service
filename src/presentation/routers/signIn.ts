import express, { Request, Response } from 'express'

const router = express.Router()
router.post('/api/users/signin', (req: Request, res: Response):void => {
  res.send('this is sign in route')
})

export {router as signInRouter}