
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource("/jogos", "JogosController").apiOnly()
  Route.resource("/conquistas", "ConquistasController").apiOnly()
})
