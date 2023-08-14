import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
     await Cliente.createMany([
      {nome:'Carla', cpf:'123.987.456.00', desconto: '5%'},
      {nome:'Joana', cpf:'234.987.456.00', desconto: '6%'},
      {nome:'Francisco', cpf:'543.987.456.00', desconto: '10%'},
      {nome:'João', cpf:'', desconto: '5%'},
      {nome:'Luana', cpf:'897.987.456.00', desconto: ''},
      {nome:'Raquel', cpf:'', desconto: '8%'},
    ])
  }
}
