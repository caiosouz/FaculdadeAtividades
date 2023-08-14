import { DateTime } from 'luxon'
import { BaseModel, hasMany, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public preco: number

  @hasMany(() => Aluno)
  public aluno: HasMany<typeof Aluno>;
}
