import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.required(),
    ]),
    preco: schema.number([
      rules.required(),
    ]),
  })

  public messages: CustomMessages = {   
    'required': 'Campo {{ options.required }} obrigatorio ! ',
  }
}
