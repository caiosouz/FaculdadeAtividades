import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FornecedorProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fornecedorId: number

  
  @column()
  public produtoId: number

  
  @column()
  public categoriaId: number



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
