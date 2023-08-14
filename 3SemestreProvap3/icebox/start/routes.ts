import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource("/cursos", "CursosController").apiOnly()
  Route.resource("/alunos", "AlunosController").apiOnly()
})
