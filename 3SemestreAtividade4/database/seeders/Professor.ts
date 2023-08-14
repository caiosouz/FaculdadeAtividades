import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run() {
    await Professor.createMany([
      {nome: "Orion", cpf: 67183064107, matricula: "123456789", salario: "25000", email: "email@hotmail.com", telefone: "61998703394", cep: 72215244, logradouro: "Rua", complemento: "Esquina", numero: "7", bairro: "QNM 23"},
      {nome: "Cícero", cpf: 24791347170, matricula: "123456788", salario: "40000", email: "email@gmail.com", telefone: "61998703394", cep: 72130600, logradouro: "Rua", complemento: "Cruzamento", numero: "2", bairro: "QNH 10"},
      {nome: "Elias", cpf: 53718309106, matricula: "123456787", salario: "7000", email: "email@outlook.com", telefone: "61998703394", cep: 70713030, logradouro: "Rua", complemento: "Barbearia", numero: "1", bairro: "SCN 3"},
      {nome: "Regiano", cpf: 88673519152, matricula: "123456786", salario: "5000", email: "email@yahoo.com", telefone: "61998703394", cep: 70818900, logradouro: "Rua", complemento: "Conveniencia", numero: "90", bairro: "SCEN 2"},
      {nome: "Raquel", cpf: 92057692159, matricula: "123456785", salario: "30000", email: "email@bing.com", telefone: "61998703394", cep: 72460110, logradouro: "Rua", complemento: "Distribuidora", numero: "157", bairro: "Setor Leste"},
      {nome: "Max", cpf: 38393830133, matricula: "123456784", salario: "9000", email: "email@gmail.com", telefone: "61998703394", cep: 71740043, logradouro: "Rua", complemento: "Oficina", numero: "1553", bairro: "SMPW 12"},
      {nome: "Sarah", cpf: 17894099180, matricula: "123456783", salario: "15000", email: "email@4mail.com", telefone: "61998703394", cep: 70832400, logradouro: "Rua", complemento: "AutoDetalhe", numero: "98", bairro: "EQN 202/203"},
      {nome: "Vitória", cpf: 72917360135, matricula: "123456782", salario: "20000", email: "email@iesb.edu.br", telefone: "61998703394", cep: 72020024, logradouro: "Rua", complemento: "Padaria", numero: "12", bairro: "QSD 2"}
    ])
  }
}