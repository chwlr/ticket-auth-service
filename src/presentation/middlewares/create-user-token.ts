import jwt from 'jsonwebtoken'

const jwt_secret:string = 'jwt_secret_key'

export const createUserToken = (_id:string) => {
  console.log(_id)
  const token = jwt.sign({ _id }, jwt_secret, {
    expiresIn: '1h'
  })
  return token
}