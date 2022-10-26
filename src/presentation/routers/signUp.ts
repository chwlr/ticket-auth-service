import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/request-validation-error'
import { CreateUserUseCase } from '../../domain/interface/use-cases/user-create-usecase'
// import { DatabaseConnectionError } from '../errors/database-connection-error'

export default function AuthRouter(
  createUserUseCase: CreateUserUseCase
) {
  const router = express.Router()

  router.post('/api/users/signup', async (req: Request, res: Response) => {
      try {
          await createUserUseCase.execute(req.body)
          res.statusCode = 201
          res.json({ message: "Created" })
      } catch (err) {
          res.status(500).send({ message: "Error saving data" })
      }
  })

  return router
}

// const router = express.Router()
// router.post('/api/users/signup', [
//   body('email')
//     .isEmail()
//     .withMessage('Email must be valid'),
//   body('password')
//     .trim()
//     .isLength({ min: 4, max: 20 })
//     .matches(/\d/)
//     .withMessage('Password must be 4+ chars long, and contain a number')
// ], (req: Request, res: Response) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()) {
//     throw new RequestValidationError(errors.array())
//   }
//   const { email, password } = req.body
//   console.log('create a user')

//   // throw new DatabaseConnectionError()

//   res.send({})
// })

// export {router as signUpRouter}