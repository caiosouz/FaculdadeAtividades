import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {
    index() {
        return Curso.query()
      }
    
      async store({ request }) {
        const dados = await request.validate(CursoValidator);
        return Curso.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Curso.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const curso = await Curso.findOrFail(id);
        const dados = request.only(["nome", "preco",]);
        curso.merge(dados);
        return curso.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const curso = await Curso.findOrFail(id);
        return curso.delete();
      }
}
