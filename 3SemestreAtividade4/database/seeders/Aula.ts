import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Aula.createMany([
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Processos", turmaId: 1},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Manuseio", turmaId: 2},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Arquivamento", turmaId: 3},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Gerenciamento", turmaId: 4},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Liderança", turmaId: 2},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Atendimento", turmaId: 3},
      {data: DateTime.local(2022, 2, 12, 22, {locale: "br"}), conteudo: "Gestão", turmaId: 1}
    ])
  }
}