import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FornecedorProduto from 'App/Models/FornecedorProduto'

export default class extends BaseSeeder {
  public async run () {
     await FornecedorProduto.createMany([
     {fornecedorId: 1, produtoId: 2, categoriaId: 1},
     {fornecedorId: 3, produtoId: 1, categoriaId: 2},
     {fornecedorId: 4, produtoId: 4, categoriaId: 3},
     {fornecedorId: 1, produtoId: 3, categoriaId: 1},
     {fornecedorId: 2, produtoId: 1, categoriaId: 4},
     {fornecedorId: 4, produtoId: 3, categoriaId: 2},
    ])
  }
}
