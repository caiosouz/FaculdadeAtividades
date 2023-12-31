import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'saida_prods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('valor_prod', 10).notNullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()


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
