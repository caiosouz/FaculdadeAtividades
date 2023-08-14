import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {aulaId: 1, alunosId: 2, presenca: "P"},
      {aulaId: 2, alunosId: 2, presenca: "P"},
      {aulaId: 3, alunosId: 2, presenca: "P"},
      {aulaId: 4, alunosId: 2, presenca: "P"},
      {aulaId: 5, alunosId: 2, presenca: "P"},
      {aulaId: 6, alunosId: 2, presenca: "F"},
      {aulaId: 7, alunosId: 2, presenca: "F"}
    ])
  }
}