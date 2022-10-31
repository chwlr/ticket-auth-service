import server from './server'
import mongoose from 'mongoose'
import UserRouter from './presentation/routers/userRouter'
import { CreateUser } from './domain/use-cases/user/create-user'
import { UserRepositoryImpl } from './domain/repositories/user-repository'
import { MongoDBUserDataSource } from './data/data-sources/mongodb/mongodb-data-source'
import { NoSQLDatabaseWrapper } from './data/interface/data-sources/nosql-database-wrapper'
import { GetUsers } from './domain/use-cases/user/get-users'
import { GetUser } from './domain/use-cases/user/get-user'
import { verifyToken } from './presentation/middlewares/verify-token'

const start = async () => {
  const client = await mongoose.connect('mongodb://auth-mongo-clusterip-srv:27017/auth')
  const schema = new mongoose.Schema({
    name: String
  });
  const db = client.model('auth', schema)
  const userDatabase: NoSQLDatabaseWrapper = {
    insertOne: (doc) => db.collection.insertOne(doc),
    find: (query) => db.collection.find(query).toArray(),
    findOne: (email: string) => db.collection.findOne({email})
  }

  const RouteMiddleware = UserRouter(
    new CreateUser(new UserRepositoryImpl(new MongoDBUserDataSource(userDatabase))),
    new GetUsers(new UserRepositoryImpl(new MongoDBUserDataSource(userDatabase))),
    new GetUser (new UserRepositoryImpl(new MongoDBUserDataSource(userDatabase))),
  )
  server.use('/',verifyToken, RouteMiddleware)
  server.listen(3000, () => {
    console.log('listening on port 3000')
  })
}

start()



