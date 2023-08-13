import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
   await Curso.createMany([
      {nome: "RELAÇÕES PÚBLICAS", duracao: 4, modalidade: 'P'},
      {nome: 'DIREITO', duracao: 5, modalidade: 'P'},
      {nome: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS', duracao: 5, modalidade: 'E'},
      {nome: 'ENFERMAGEM', duracao: 10, modalidade: 'P'},
      {nome: 'FARMÁCIA', duracao: 8, modalidade: 'P'},
      {nome: 'PSICOLOGIA', duracao: 8, modalidade: 'P'},
      {nome: 'EDUCAÇÃO FÍSICA', duracao: 8, modalidade: 'H'},
      {nome: 'BIOMEDICINA', duracao: 10, modalidade: 'P'}
    ])
  }
}