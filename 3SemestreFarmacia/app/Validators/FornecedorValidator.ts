import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alpha(),
    ]),
    cnpj: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
    ]),
    contato: schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alphaNum(),
    ]),
    empresa: schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alphaNum(),
    ])
  })

  
  public messages: CustomMessages = {}
}
