import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: 'Marcia', cpf: 456},
      {nome: 'Gregorio', cpf: 631},
      {nome: 'Carla', cpf: 555},
      {nome: 'Iris', cpf: 954},
    ])
  }
}
