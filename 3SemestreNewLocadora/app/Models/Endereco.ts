import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public cep: number
  @column()
  public logradouro: string
  @column()
  public bairro: string
  @column()
  public cidade: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Cliente)
  public Clientes: HasMany<typeof Cliente>
}
