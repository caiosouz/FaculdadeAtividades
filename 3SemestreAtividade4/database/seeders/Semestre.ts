import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Semestre.createMany([
      {nome: "6", dataInicio: DateTime.local(2022, 2, 25, 12, {locale: "br"}), dataFim: DateTime.local(2030, 12, 2, 12, {locale: "br"})},
      {nome: "5", dataInicio: DateTime.local(2017, 5, 15, 12, {locale: "br"}), dataFim: DateTime.local(2023, 12, 1, 12, {locale: "br"})},
      {nome: "4", dataInicio: DateTime.local(2018, 3, 1, 12, {locale: "br"}), dataFim: DateTime.local(2024, 12, 1, 12, {locale: "br"})},
      {nome: "3", dataInicio: DateTime.local(2019, 9, 2, 12, {locale: "br"}), dataFim: DateTime.local(2025, 12, 1, 12, {locale: "br"})},
      {nome: "2", dataInicio: DateTime.local(2020, 7, 18, 12, {locale: "br"}), dataFim: DateTime.local(2026, 12, 1, 12, {locale: "br"})},
      {nome: "1", dataInicio: DateTime.local(2021, 6, 22, 12, {locale: "br"}), dataFim: DateTime.local(2027, 12, 1, 12, {locale: "br"})}
    ])
  }
}