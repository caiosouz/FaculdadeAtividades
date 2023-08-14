import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SaidaProd from 'App/Models/SaidaProd'

export default class extends BaseSeeder {
  public async run () {
    await SaidaProd.createMany([
      {valorProd: '22.50', funcionarioId: 2, produtoId: 1, categoriaId: 2, clienteId: 1},
      {valorProd: '9.99', funcionarioId: 3, produtoId: 2, categoriaId: 5, clienteId: 3},
      {valorProd: '49.90', funcionarioId: 1, produtoId: 3, categoriaId: 3, clienteId: 4},
      {valorProd: '119.90', funcionarioId: 2, produtoId: 4, categoriaId: 6, clienteId: 2},
      {valorProd: '7696.00', funcionarioId: 4, produtoId: 5, categoriaId: 2, clienteId: 1},
    ])
  }
}
