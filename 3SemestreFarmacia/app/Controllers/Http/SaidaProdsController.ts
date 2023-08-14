// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SaidaProd from "App/Models/SaidaProd"
import SaidaProdValidator from "App/Validators/SaidaProdValidator"

export default class SaidaProdsController {

    index() {
        return SaidaProd.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(SaidaProdValidator)
         return SaidaProd.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return SaidaProd.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const saidaProd = await SaidaProd.findOrFail(id)

        return saidaProd.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const saidaProd = await SaidaProd.findOrFail(id)

        const dados = request.only([
            'valor_prod',
            'funcionarioId',
            'produtoId',
            'categoriaId',
            'clienteId'
        ])

        saidaProd.merge(dados)

        return saidaProd.save()

    }
}
