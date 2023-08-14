import { DateTime } from 'luxon'
import { BaseModel, hasMany, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Conquista from './Conquista'

export default class Jogo extends BaseModel {
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
  public fabricante: string

  @column()
  public data_lancamento: Date

  @column()
  public qtd_download: number

  @hasMany(() => Conquista)
public conquista: HasMany<typeof Conquista>;
}
