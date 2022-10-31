import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

export const verifyToken = (req: Request, res: Response) => {

	const jwt_secret:string = 'jwt_secret_key'

	const isTokenExist = req.body.token || req.query.token || req.headers['authorization']

	if(!isTokenExist) {
			return res.status(403).send({ 'message' : 'A token is required for authentication' })
	}

	try {
		const token = isTokenExist.split(' ')[1]
    const decoded = jwt.verify(token, jwt_secret);
    return decoded
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
    
}