//import {v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Desenho from 'App/Models/Desenho'
import DesenhoValidator from 'App/Validators/DesenhoValidator'








/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class DesenhosController {


  public async index({ response }: HttpContextContract) {
    const desenhos = await Desenho.query().preload("Cliente")

     response.status(201)
     return{
       message: 'Listagem do Desenhos:',
       data: desenhos
     }
   }
  /////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response }: HttpContextContract,  ){
                                                                                          //sucesso       
    
  

    const body = await request.validate(DesenhoValidator)
      //@ts-ignore
    const desenhos = await Desenho.create(body)


    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return {
      message: `Cadastro do ,Criado com sucesso!!`,
      Date: desenhos,
    }

  }

  show({ request }: HttpContextContract) {

    const id = request.param("id")

    return Desenho.findOrFail(`${id}`)

  }

  public async update({ params, request }: HttpContextContract) {
   
    const body = await request.validate(DesenhoValidator)

    const desenhos = await Desenho.findOrFail(params.id);

    desenhos.nome = body.nome
    desenhos.classificao = body.classificao
    desenhos.genero = body.genero
    desenhos.genero = body.genero
    desenhos.preco = body.preco
    desenhos.disponibilidade = body.disponibilidade
    desenhos.clientesId = body.clientesId

    await desenhos.save()

    return {

      message: `Update dos dados do Desenhos realizado com sucesso`,


      data: desenhos,
    }
  }

  public async destroy({ params, response }: HttpContextContract) {

    const desenhos = await Desenho.findOrFail(params.id)

    if (desenhos.id != desenhos.id) {
      return response.status(401);
    }

    await desenhos.delete()
    return {

      message: `Desenhos  Excluído com sucesso!`,
      descrição: desenhos

    }

  }
}
