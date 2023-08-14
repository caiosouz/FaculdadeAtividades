
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome',50).notNullable()
      table.string('cpf',14).notNullable()
      table.string('data_nascimento',20).notNullable()
      table.string('genero',1).notNullable()
      table.integer('endereco_id').notNullable().references('endereco.id').onDelete('cascade')
      table.string('email',100).notNullable().unique()
      table.string('password',255).notNullable().unique()
     

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
