import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'psicologia', preco: 500},
      {nome: 'Medicina', preco: 1000},
      {nome: 'ADS', preco: 600},
      {nome: 'Enfermagem', preco: 300},
    ])
  }
}
