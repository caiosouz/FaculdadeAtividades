import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fornecedor_produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('fornecedor_id').unsigned().references('id').inTable('fornecedors').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()

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
