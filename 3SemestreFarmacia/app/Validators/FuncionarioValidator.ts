import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alpha(),
    ]),
    cpf: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
    ]),
    identificacao: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(20),
    ]),
    vendas_mensais: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ])
  })

  
  public messages: CustomMessages = {}
}
