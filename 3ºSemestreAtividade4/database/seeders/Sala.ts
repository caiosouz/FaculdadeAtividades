import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: "Sala 01", capacidade: 30, tipo: "E"},
      {nome: "Sala 02", capacidade: 40, tipo: "P"},
      {nome: "Sala 03", capacidade: 50, tipo: "H"},
      {nome: "Sala 04", capacidade: 60, tipo: "L"},
      {nome: "Sala 05", capacidade: 70, tipo: "A"},
      {nome: "Sala 06", capacidade: 80, tipo: "G"}
    ])
  }
}