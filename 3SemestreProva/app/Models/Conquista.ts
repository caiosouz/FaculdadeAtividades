import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Jogo from './Jogo'

export default class Conquista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public data_conquista: Date

  @column()
  public valor: number

  @belongsTo(() => Jogo)
public jogos: BelongsTo<typeof Jogo>;
}
