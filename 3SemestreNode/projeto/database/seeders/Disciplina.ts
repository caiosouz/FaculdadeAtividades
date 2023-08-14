import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'Direito', horario: 337},
      {nome: 'Medicina', horario: 489},
      {nome: 'ADS', horario: 588},
      {nome: 'Enfermagem', horario : 337},
    ])
  }
}
