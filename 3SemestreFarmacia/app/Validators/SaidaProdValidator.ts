import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SaidaProdValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    valorProd: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ]),
    funcionarioId: schema.number([
      rules.exists({ table: 'funcionarios', column: 'id'})
    ]),
    produtoId: schema.number([
      rules.exists({ table: 'produtos', column: 'id'})
    ]),
    categoriaId: schema.number([
      rules.exists({ table: 'categorias', column: 'id'})
    ]),
    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id'})
    ])
  })

 
  public messages: CustomMessages = {}
}
