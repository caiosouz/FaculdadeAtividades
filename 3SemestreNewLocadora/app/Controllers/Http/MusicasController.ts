//import {v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Musica from 'App/Models/Musica'
import MusicaValidator from 'App/Validators/MusicaValidator'

export default class MusicasController {


  public async index({ response }: HttpContextContract) {
    const musicas = await Musica.query().preload("Cliente")

     response.status(201)
     return{
       message: 'Listagem do musicas:',
       data: musicas
     }
   }

  public async store({request, response }: HttpContextContract,  ){
                                                                                          //sucesso       
    
  

    const body = await request.validate(MusicaValidator)
      //@ts-ignore
    const musicas = await Musica.create(body)


    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return {
      message: `Cadastro do ,Criado com sucesso!!`,
      Date: musicas,
    }

  }

  show({ request }: HttpContextContract) {

    const id = request.param("id")
    //sucesso
    return Musica.findOrFail(`${id}`)

  }

  public async update({ params, request }: HttpContextContract) {
    //sucesso
    const body = await request.validate(MusicaValidator)

    const musicas = await Musica.findOrFail(params.id);

    musicas.nome = body.nome
    musicas.classificao = body.classificao
    musicas.genero = body.genero
    musicas.genero = body.genero
    musicas.preco = body.preco
    musicas.disponibilidade = body.disponibilidade
    musicas.clientesId = body.clientesId

    await musicas.save()

    return {

      message: `Update dos dados do musicas realizado com sucesso`,


      data: musicas,
    }
  }

  public async destroy({ params, response }: HttpContextContract) {

    const musicas = await Musica.findOrFail(params.id)

    if (musicas.id != musicas.id) {
      return response.status(401);
    }

    await musicas.delete()
    return {

      message: `musicas  Excluído com sucesso!`,
      descrição: musicas

    }

  }
}
