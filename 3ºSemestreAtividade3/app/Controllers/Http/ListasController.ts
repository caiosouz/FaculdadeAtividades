// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class ListasController {
    index(){
        return Curso.all()
    }
    store(){
        const dados = {
            nome: 'ADS', 
            duracao: 5, 
            modalidade: 'P'
        }
        
        return Curso.create(dados)
    
    }
}
