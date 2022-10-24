import express, { Request, Response } from 'express'

const router = express.Router()
router.post('/api/users/signout', (req: Request, res: Response):void => {
  res.send('this is sign out route')
})

export {router as signOutRouter}