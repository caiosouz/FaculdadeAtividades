//import {v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Filme from 'App/Models/Filme'
import FilmeValidator from 'App/Validators/FilmeValidator'


export default class FilmesController {


  public async index({ response }: HttpContextContract) {
    const filmes = await Filme.query().preload("Cliente")

     response.status(201)
     return{
       message: 'Listagem do filmes:',
       data: filmes
     }
   }

  public async store({request, response }: HttpContextContract,  ){
                                                                                          //sucesso       
    
  

    const body = await request.validate(FilmeValidator)
      //@ts-ignore
    const filmes = await Filme.create(body)


    response.status(201)  

    return {
      message: `Cadastro do ,Criado com sucesso!!`,
      Date: filmes,
    }

  }

  show({ request }: HttpContextContract) {

    const id = request.param("id")
    //sucesso
    return Filme.findOrFail(`${id}`)

  }

  public async update({ params, request }: HttpContextContract) {
    //sucesso
    const body = await request.validate(FilmeValidator)

    const filmes = await Filme.findOrFail(params.id);

    filmes.nome = body.nome
    filmes.classificao = body.classificao
    filmes.genero = body.genero
    filmes.genero = body.genero
    filmes.preco = body.preco
    filmes.disponibilidade = body.disponibilidade
    filmes.clientesId = body.clientesId

    await filmes.save()

    return {

      message: `Update dos dados do filmes realizado com sucesso`,


      data: filmes,
    }
  }

  public async destroy({ params, response }: HttpContextContract) {

    const filmes = await Filme.findOrFail(params.id)

    if (filmes.id != filmes.id) {
      return response.status(401);
    }

    await filmes.delete()
    return {

      message: `filmes  Excluído com sucesso!`,
      descrição: filmes

    }

  }
}
