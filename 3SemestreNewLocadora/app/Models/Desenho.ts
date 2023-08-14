import { DateTime } from 'luxon'
import { BaseModel, column,manyToMany,ManyToMany,belongsTo,BelongsTo, } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Desenho extends BaseModel {
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
  public Cliente: ManyToMany<typeof Cliente>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

}
