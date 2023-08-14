import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorProdValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    fornecedorId: schema.number([
      rules.exists({ table: 'fornecedors', column: 'id'})
    ]),
    produtoId: schema.number([
      rules.exists({ table: 'produtos', column: 'id'})
    ]),
    categoriaId: schema.number([
      rules.exists({ table: 'categorias', column: 'id'})
    ])

  })

  
  public messages: CustomMessages = {}
}
