import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nomeProd:'Aloína 60mg', tipoProd: 'Alopático', valor:'22.50', descricao: 'Aloína é um componente com efeito catártico (laxante), encontrado no extrato da Aloe barbadensis e outras espécies. ', categoriaId: 2},
      {nomeProd:'Ibuprofeno 400mg', tipoProd: 'Genérico', valor:'9.99', descricao: 'Exerce atividades contra a dor e contra a febre.', categoriaId: 5},
      {nomeProd:'Articure', tipoProd: 'Homeopático', valor:'49.90', descricao: 'Manter íntegra a estrutura molecular do colágeno tipo II, é capaz de agir influenciando a sinalização para o desenvolvimento de tolerância imune', categoriaId: 3},
      {nomeProd:'Anastrozol', tipoProd: 'Manipulado', valor:'119.90', descricao: 'Anastrazol pertence a uma classe chamados de inibidores da aromatase', categoriaId: 6},
      {nomeProd:'KISQALI 200mg', tipoProd: 'Alopático', valor:'7696.00', descricao: 'Utilizado em mulheres na pós-menopausa que possuem um tipo de câncer de mama chamado de câncer de mama receptor hormonal positivo', categoriaId: 2},
    ])
  }
}
