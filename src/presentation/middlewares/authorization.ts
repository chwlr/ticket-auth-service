import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import { createUserToken } from './create-user-token'
import { GetUserUseCase } from '../../domain/interface/use-cases/user-get-usecase'

// export const verifyToken = (req: Request, res: Response) => {

// 	const jwt_secret:string = 'jwt_secret_key'

// 	const isTokenExist = req.body.token || req.query.token || req.headers['authorization']

// 	if(!isTokenExist) {
// 			return res.status(403).send({ 'message' : 'A token is required for authentication' })
// 	}

// 	try {
// 		const token = isTokenExist.split(' ')[1]
//     const decoded = jwt.verify(token, jwt_secret);
//     return decoded
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
    
// }


export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    jwt.verify(token, "jwt_secret_key");
    return next();
  } catch {
    return res.sendStatus(403);
  }
};


