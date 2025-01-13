import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { getUserController } from '../controllers/app-controller'
import 'dotenv/config'

// Configurando a estratégia JWT
passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai o token do cabeçalho Authorization
      secretOrKey: process.env.SECRET_KEY as string // Chave secreta para verificar o token
    },
    async (JWTPayload: any, done: any) => {
      try {
        const user = await getUserController(JWTPayload.id) // Buscar usuário no banco pelo ID presente no payload

        if (user) { // Se o usuário for encontrado, retorna o usuário através do callback `done` para o Passport
          return done(null, user.content)
        } else {
          return done(null, false)
        }
      } catch (error) {
        return done(error, false)
      }
    }
  )
)

export { passport }
