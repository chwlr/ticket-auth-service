import express, { Request, Response } from 'express'
import { CreateUserUseCase } from '../../domain/interface/use-cases/user-create-usecase'
import { GetUsersUseCase } from '../../domain/interface/use-cases/users-get-usecase'
import { GetUserUseCase } from '../../domain/interface/use-cases/user-get-usecase'
import { createUserToken } from '../middlewares/create-user-token'
import { verifyToken } from '../middlewares/verify-token'


export default function UserRouter(
  createUserUseCase: CreateUserUseCase,
  getUsersUseCase: GetUsersUseCase,
  getUserUseCase: GetUserUseCase,
) {
  const router = express.Router()

  router.get('/api/users',async (req: Request, res: Response) => {
    try {
      const users = await getUsersUseCase.execute()
      res.send({users})
    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.get('/api/users/?email',async (req: Request, res: Response) => {
    const email = req.params.email
    try {
      const user = await getUserUseCase.execute(email)
      res.send({user})
    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }
  })

  router.post('/api/users/signup', async (req: Request, res: Response) => {
    const user = await getUserUseCase.execute(req.body.email) 
    if (!user) {
      try {
        const user = await createUserUseCase.execute(req.body)
        const token = createUserToken(user._id)
        res.status(201).json({ 
          status: 201,
          token,
          data: {
            user
          }
        })
      } catch (err) {
          console.log(err)
          // res.status(500).send({ message: "Error saving data" })
      }
    } else {
      res.status(400).send({ message: "Email registered" })
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