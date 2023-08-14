import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string


  @column()
  public cnpj: string


  @column()
  public contato: string
  

  @column()
  public empresa: string

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
