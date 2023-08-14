import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run () {
     await Fornecedor.createMany([
      {nome:'Clara', cnpj:'05.763.425/0001-76', contato:'(62)99378-8762', empresa:'SB Comercio LTDA'},
      {nome:'Carlos', cnpj:'05.763.425/0001-76', contato:'(11)99378-8762', empresa:'American Farma LTDA'},
      {nome:'Lucas', cnpj:'05.763.425/0001-76', contato:'(21)99378-8762', empresa:' IMIFARMA Produtos Farmacêuticos e Cosméticos S/A'},
      {nome:'Laura', cnpj:'05.763.425/0001-76', contato:'', empresa:''},
      {nome:'Felipe', cnpj:'05.763.425/0001-76', contato:'', empresa:'Rondomed Distribuidora e Comércio de Medicamentos LTDA.'},
      {nome:'Marcos', cnpj:'05.763.425/0001-76', contato:'(38)99378-8762', empresa:'Macromed Distribuidora de Medicamentos LTDA'},
    ])
  }
}
