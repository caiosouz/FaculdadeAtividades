
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.resource('/categorias', 'CategoriasController').apiOnly()
Route.resource('/clientes', 'ClientesController').apiOnly()
Route.resource('/fornecedores', 'FornecedorsController').apiOnly()
Route.resource('/funcionarios', 'FuncionariosController').apiOnly()
Route.resource('/produtos', 'ProdutosController').apiOnly()
Route.resource('/fornecedorsProdutos', 'FornecedorProdutosController').apiOnly()
Route.resource('/saidaProdutos', 'SaidaProdsController').apiOnly()
