import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    nome: schema.string([
      rules.required(),
    ]),
    cpf: schema.number([
      rules.required(),
    ]),
  })
 
  public messages: CustomMessages = {
    'required': 'Campo {{ options.required }} obrigatorio ! ',
  }
}
