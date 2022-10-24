import server from './server'
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

server.listen(3000, () => {
    console.log('listening on port 3000')
})

