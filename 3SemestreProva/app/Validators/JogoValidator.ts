import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class JogoValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    
    nome: schema.string([
      rules.required(),
    ]),
    descricao: schema.string([
      rules.required(),
    ]),
    fabricante: schema.string([
      rules.required(),
    ]),
    data_lancamento: schema.string([
      rules.required(),
    ]),
    qtd_download: schema.number([
      rules.required(),
    ]),
  })

 
  public messages: CustomMessages = {
    'required': 'Campo {{ options.required }} obrigatorio ! ',
  }
}
