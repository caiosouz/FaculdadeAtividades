import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nomeProd: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alpha(),
    ]),
    tipoProd: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alphaNum(),
    ]),
    valor: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ]),
    descricao: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(1000),
      rules.alpha(),
    ]),
    categoriaId: schema.number([
      rules.exists({ table: 'categorias', column: 'id'})
    ])
  })

  
  public messages: CustomMessages = {}
}
