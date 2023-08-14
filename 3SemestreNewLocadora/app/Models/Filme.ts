import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo,BelongsTo,manyToMany,ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: string
  @column()
  public classificao: string
  @column()
  public genero: string
  @column()
  public preco: number
  @column()
  public disponibilidade: boolean
  @column()
  public clientesId: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Cliente)
  public cliente: ManyToMany<typeof Cliente>

  @belongsTo(() => Cliente)
  public Cliente: BelongsTo<typeof Cliente>
}
