import server from './server'
import currentUser from './presentation/routers/currentUser'
import signIn from './presentation/routers/signIn'
import signUp from './presentation/routers/signUp'
import signOut from './presentation/routers/signOut'



server.use('/api/users/signup', signUp)
server.use('/api/users/signin', signIn)
server.use('/api/users/signout', signOut)
server.use('/api/users/currentuser', currentUser)

server.listen(3000, () => {
    console.log('listening on port 3000')
})

