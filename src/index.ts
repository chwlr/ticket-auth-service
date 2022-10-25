import server from './server'
import mongoose from 'mongoose'
import {currentUserRouter} from './presentation/routers/currentUser'
import {signInRouter} from './presentation/routers/signIn'
import {signUpRouter} from './presentation/routers/signUp'
import {signOutRouter} from './presentation/routers/signOut'
import {errorHandler} from './presentation/middlewares/error-handler'

server.use(signUpRouter)
server.use(signInRouter)
server.use(signOutRouter)
server.use(currentUserRouter)

server.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-clusterip-srv:27017/auth')
    } catch (error) {
        console.log(error)
    }
}

server.listen(3000, () => {
    console.log('listening on port 3000')
})

