import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany,ManyToMany,belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Desenho from './Desenho'
import Filme from './Filme'
import Series from './Series'
import Musica from './Musica'
import Endereco from './Endereco'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string
  @column()
  public cpf: string
  @column()
  public data_nascimento: string
  @column()
  public genero:string
  @column()
  public endereco_id: number
  @column()
  public email: string
  @column()
  public password: string
  @column()
  public  YouToken: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() =>Desenho)
  public Desenho: ManyToMany<typeof Desenho>

  @manyToMany(() => Filme)
  public filmes: ManyToMany<typeof Filme>

  @manyToMany(() =>Series)
  public series: ManyToMany<typeof Series>

  @manyToMany(() => Musica)
  public Musica: ManyToMany<typeof Musica>

  @belongsTo(() => Desenho)
  public desenho: BelongsTo<typeof Desenho>

  @belongsTo(() => Filme)
  public Filme: BelongsTo<typeof Filme>

  @belongsTo(() => Series)
  public Series: BelongsTo<typeof Series>

  @belongsTo(() => Musica)
  public musica: BelongsTo<typeof Musica>

  @belongsTo(() => Endereco)
  public Endereco: BelongsTo<typeof Endereco>

}
