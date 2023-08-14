// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FornecedorProduto from "App/Models/FornecedorProduto"
import FornecedorProdValidator from "App/Validators/FornecedorProdValidator"

export default class FornecedorProdutosController {

    index() {
        return FornecedorProduto.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(FornecedorProdValidator)
         return FornecedorProduto.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return FornecedorProduto.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const fornecedorProduto = await FornecedorProduto.findOrFail(id)

        return fornecedorProduto.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const fornecedorProduto = await FornecedorProduto.findOrFail(id)

        const dados = request.only([
            'fornecedorId', 
            'produtoId',
            'categoriaId'
        ])

        fornecedorProduto.merge(dados)

        return fornecedorProduto.save()

    }
}
