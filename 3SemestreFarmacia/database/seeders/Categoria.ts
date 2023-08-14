import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'

export default class extends BaseSeeder {
  public async run () {
     await Categoria.createMany([
      {categoriaProd: 'Fitoterápico'},
      {categoriaProd: 'Alopático'},
      {categoriaProd: 'Homeopático'},
      {categoriaProd: 'Similar'},
      {categoriaProd: 'Genérico'},
      {categoriaProd: 'Manipulado'},
    ])
  }
}
