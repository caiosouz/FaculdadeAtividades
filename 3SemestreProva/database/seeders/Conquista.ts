import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Conquista from 'App/Models/Conquista'

export default class extends BaseSeeder {
  public async run () {
    await Conquista.createMany([
      {nome: 'ladrão de honra', descricao: 'roube o baile chique', data_conquista: new Date(2022,22,10), valor: 50},
      {nome: 'o mata mata', descricao: 'mate 5 inimigos em um ataque', data_conquista: new Date(2016,12,11), valor: 45},
      {nome: 'traidor', descricao: 'poupe um alien', data_conquista: new Date(2013,5,13), valor: 25},
      {nome: 'artimanha', descricao: 'faça uma armadilha para o seu irmão', data_conquista: new Date(2011,6,1), valor: 100},
      {nome: 'o artilheiro', descricao: 'mate 1 inimigo a 200 metros de distancia com um rifle', data_conquista: new Date(2016,1,1), valor: 55},
    ])
  }
}
