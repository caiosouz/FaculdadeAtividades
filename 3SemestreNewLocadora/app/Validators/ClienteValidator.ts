import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({

    nome: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.alpha({allow: ['space']})
    ]),
    cpf: schema.string([
      rules.required(),
      rules.minLength(14),
      rules.maxLength(22),
      rules.unique({ table: 'clientes', column: 'cpf' })
           

    ]),
    data_nascimento: schema.string(),
    genero: schema.string(),
    endereco_id: schema.number(),
    email: schema.string(
      
    ),
    
  
    password: schema.string()
   








  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {


 
    'confirmed': 'Senha não confere',
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'O Campo e obrigatorio',
    'unique': 'O valor do campo  inserido já existe.',
    'alpha':'O campo inserido não permitir numeral '
    



  }
}
