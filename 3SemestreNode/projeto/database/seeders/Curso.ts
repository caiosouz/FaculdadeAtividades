import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'Direito', preco: 337},
      {nome: 'Medicina', preco: 489},
      {nome: 'ADS', preco: 588},
      {nome: 'Enfermagem', preco: 337},
    ])
  }
}
