import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome: 'Joaquim', cpf: '123.456.789.11', identificacao: 'AB9075', vendasMensais: '5983.00'},
      {nome: 'Antonio', cpf: '124.456.789.11', identificacao: 'AB8075', vendasMensais: '4983.00'},
      {nome: 'Maria Eduarda', cpf: '321.456.789.11', identificacao: 'AB7075', vendasMensais: '3983.00'},
      {nome: 'Clarisse', cpf: '213.456.789.11', identificacao: 'BB9075', vendasMensais: '4444.00'},
      {nome: 'Elaine', cpf: '333.456.789.11', identificacao: 'BC9075', vendasMensais: '4000.00'},
      {nome: 'Ruan', cpf: '111.456.789.11', identificacao: 'AB4075', vendasMensais: '1122.00'},
    ])
  }
}
