import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Jogo from 'App/Models/Jogo'

export default class extends BaseSeeder {
  public async run () {
    await Jogo.createMany([
      {nome: 'Sly cooper', descricao: 'Ladrão que rouba ladrões', fabricante: 'playstation', data_lancamento: new Date(2002,2,10), qtd_download: 20000},
      {nome: 'God of war', descricao: 'Deus que mata deuses', fabricante: 'playstation', data_lancamento: new Date(2002,12,11), qtd_download: 50000},
      {nome: 'halo', descricao: 'aliens contra humanos fps', fabricante: 'xbox 360', data_lancamento: new Date(2012,5,6), qtd_download: 9000},
      {nome: 'spy vs spy', descricao: ' espiões irmãos gemeos na guerra fria em lados opostos', fabricante: 'playstation', data_lancamento: new Date(2002,6,30), qtd_download: 6000},
      {nome: 'cod', descricao: 'terceira guerra mundial', fabricante: 'playstation', data_lancamento: new Date(2006,10,5), qtd_download: 100000},
    ])
  }
}
