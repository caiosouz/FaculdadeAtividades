import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: "FRONTEND", cursoId: 3},
      {nome: "BACKEND", cursoId: 3},
      {nome: "LEI ORGANICA DF", cursoId: 2},
      {nome: "ANATOMIA", cursoId: 4}
    ])
  }
}
