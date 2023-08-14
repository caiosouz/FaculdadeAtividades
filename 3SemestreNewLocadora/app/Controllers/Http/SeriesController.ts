//import {v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Series from 'App/Models/Series'
import SeriesValidator from 'App/Validators/SeriesValidator'


export default class SeriessController {


  public async index({ response }: HttpContextContract) {
    const series = await Series.query().preload("Cliente")

     response.status(201)
     return{
       message: 'Listagem do series:',
       data: series
     }
   }

  public async store({request, response }: HttpContextContract,  ){
                                                                                          //sucesso       
    
  

    const body = await request.validate(SeriesValidator)
      //@ts-ignore
    const series = await Series.create(body)


    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return {
      message: `Cadastro do ,Criado com sucesso!!`,
      Date: series,
    }

  }



  show({ request }: HttpContextContract) {

    const id = request.param("id")
    
    return Series.findOrFail(`${id}`)

  }

  public async update({ params, request }: HttpContextContract) {
   
    const body = await request.validate(SeriesValidator)

    const series = await Series.findOrFail(params.id);

    series.nome = body.nome
    series.classificao = body.classificao
    series.genero = body.genero
    series.genero = body.genero
    series.preco = body.preco
    series.disponibilidade = body.disponibilidade
    series.clientesId = body.clientesId

    await series.save()

    return {

      message: `Update dos dados do series realizado com sucesso`,


      data: series,
    }
  }

  public async destroy({ params, response }: HttpContextContract) {

    const series = await Series.findOrFail(params.id)

    if (series.id != series.id) {
      return response.status(401);
    }

    await series.delete()
    return {

      message: `series  Excluído com sucesso!`,
      descrição: series

    }

  }
}
