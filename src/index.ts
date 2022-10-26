import server from './server'
import mongoose from 'mongoose'
import AuthRouter from './presentation/routers/authRouters'
import { CreateUser } from './domain/use-cases/user/create-user'
import { UserRepositoryImpl } from './domain/repositories/user-repository'
import { MongoDBUserDataSource } from './data/data-sources/mongodb/mongodb-data-source'
import { NoSQLDatabaseWrapper } from './data/interface/data-sources/nosql-database-wrapper'
import { GetUsers } from './domain/use-cases/user/get-users'
// import {currentUserRouter} from './presentation/routers/currentUser'
// import {signInRouter} from './presentation/routers/signIn'
// import {signUpRouter} from './presentation/routers/signUp'
// import {signOutRouter} from './presentation/routers/signOut'
// import {errorHandler} from './presentation/middlewares/error-handler'

// server.use(signUpRouter)
// server.use(signInRouter)
// server.use(signOutRouter)
// server.use(currentUserRouter)

// server.use(errorHandler)

const start = async () => {
  // try {
  //   const db = await mongoose.connect('mongodb://auth-mongo-clusterip-srv:27017/auth')
  //   console.log('connected')
  // } catch (error) {
  //   console.log(error)
  // }
  const client = await mongoose.connect('mongodb://auth-mongo-clusterip-srv:27017/auth')
  const schema = new mongoose.Schema({
    name: String
  });
  const db = client.model('auth', schema)
  const userDatabase: NoSQLDatabaseWrapper = {
    insertOne: (doc) => db.collection.insertOne(doc),
    find: (query) => db.collection.find(query).toArray()
  }

  const RouteMiddleware = AuthRouter(
    new CreateUser(new UserRepositoryImpl(new MongoDBUserDataSource(userDatabase))),
    new GetUsers(new UserRepositoryImpl(new MongoDBUserDataSource(userDatabase)))
  )
  server.use('/', RouteMiddleware)
  server.listen(3000, () => {
    console.log('listening on port 3000')
  })
}

start()



