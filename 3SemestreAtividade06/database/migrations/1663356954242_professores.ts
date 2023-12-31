import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'professores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.integer('CPF').notNullable()
      table.string('matricula', 20)
      table.string('salario', 100)
      table.string('email', 100)
      table.string('telefone', 15)
      table.integer('cep')
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.string('numero', 20)
      table.string('bairro', 100)

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
