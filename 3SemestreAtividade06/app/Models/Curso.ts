import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Disciplina from "./Disciplina";

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public nome: string;

  @column()
  public duracao: number;

  @column()
  public modalidade: string;

  @hasMany(() => Disciplina)
  public disciplinas: HasMany<typeof Disciplina>;
}
