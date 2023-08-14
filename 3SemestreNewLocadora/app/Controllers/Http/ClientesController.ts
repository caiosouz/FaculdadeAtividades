
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/cliente";

import ClienteValidator from 'App/Validators/ClienteValidator';

export default class ClientesController {


  public async index({ response }: HttpContextContract) {
    const clientes = await Cliente.query().preload("Desenho").preload("Musica").preload("filmes").preload("series")

     response.status(201)
     return{
       message: 'Listagem do clientes:',
       data: clientes
     }
   }
 
  public async store({request, response }: HttpContextContract,  ){

    const body = await request.validate(ClienteValidator)
      //@ts-ignore
    const cliente = await Cliente.create(body)


    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return {
      message: `Cadastro do ,Criado com sucesso!!`,
      Date: cliente,
    }

  }

  show({ request }: HttpContextContract) {

    const id = request.param("id")

    return Cliente.findOrFail(`${id}`)

  }

  public async update({ params, request }: HttpContextContract) {
   
    const body = await request.validate(ClienteValidator)

    const cliente = await Cliente.findOrFail(params.id);

    cliente.nome = body.nome
    cliente.cpf = body.cpf
    cliente.data_nascimento = body.data_nascimento
    cliente.genero = body.genero
    cliente.endereco_id = body.endereco_id
    cliente.email = body.email
    cliente.password = body.password

    await cliente.save()

    return {

      message: `Update dos dados do cliente realizado com sucesso`,


      data: cliente,
    }
  }

  public async destroy({ params, response }: HttpContextContract) {

    const cliente = await Cliente.findOrFail(params.id)

    if (cliente.id != cliente.id) {
      return response.status(401);
    }

    await cliente.delete()
    return {

      message: `Cliente  Excluído com sucesso!`,
      descrição: cliente

    }

  }
}
