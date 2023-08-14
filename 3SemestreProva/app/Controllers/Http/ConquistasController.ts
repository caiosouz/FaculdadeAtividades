import Conquista from "App/Models/Conquista";


export default class ConquistasController {
    index() {
        return Conquista .query()
      }
    
      async store({ request }) {
        const dados = await request.validate(Conquista);
        return Conquista.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Conquista.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const conquista = await Conquista.findOrFail(id);
        const dados = request.only(["nome", "descricao", "data_conquista", "valor",]);
        conquista.merge(dados);
        return conquista.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const conquista = await Conquista.findOrFail(id);
        return conquista.delete();
      }
}
