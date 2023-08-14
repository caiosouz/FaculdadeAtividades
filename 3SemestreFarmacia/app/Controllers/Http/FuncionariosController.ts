// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {

    index() {
        return Funcionario.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(FuncionarioValidator)
         return Funcionario.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Funcionario.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        return funcionario.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cpf', 
            'identificacao', 
            'vendasMensais'
        ])

        funcionario.merge(dados)

        return funcionario.save()

    }
}
