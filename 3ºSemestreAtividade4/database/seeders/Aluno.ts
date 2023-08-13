import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      {nome: "Letícia", cpf: 17633401117, matricula: "123456789", email: "lele02@gmail.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "13A", bairro: "Ceilândia Sul" },
      {nome: "Marcos", cpf: 27625288102, matricula: "1234567891", email: "marcos.sms@hotmail.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "23", bairro: "Ceilândia Sul" },
      {nome: "Caio", cpf: 12800708117, matricula: "1234567892", email: "caio.ads@yahoo.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "20", bairro: "Ceilândia Sul" },
      {nome: "Leandro", cpf: 56613292109, matricula: "1234567893", email: "leander.2000@iesb.edu.br", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "22", bairro: "Ceilândia Sul" },
      {nome: "Isaías", cpf: 53662101190, matricula: "1234567894", email: "isaqcode@outlook.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "30", bairro: "Ceilândia Sul" },
      {nome: "Sérgio", cpf: 69767169121, matricula: "1234567895", email: "sergin8000@4mail.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "14", bairro: "Ceilândia Sul" },
      {nome: "Gisele", cpf: 50306279100, matricula: "1234567896", email: "gisa.estud@bing.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "18", bairro: "Ceilândia Sul" },
      {nome: "Cailane", cpf: 14905558115, matricula: "1234567897", email: "cailanemodas@gmail.com", telefone: "61998703394", cep: 72215244, logradouro: "Setor M", complemento: "Castelo Forte", numero: "16", bairro: "Ceilândia Sul" },
    ])
  }
}