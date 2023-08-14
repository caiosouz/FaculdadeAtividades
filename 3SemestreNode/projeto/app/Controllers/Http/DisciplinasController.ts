import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class CursosController {
    index() {
        return Disciplina.query()
      }
    
      async store({ request }) {
        const dados = await request.validate(DisciplinaValidator);
        return Disciplina.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Disciplina.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const disciplina = await Disciplina.findOrFail(id);
        const dados = request.only(["nome", "horario",]);
        disciplina.merge(dados);
        return disciplina.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const disciplina = await Disciplina.findOrFail(id);
        return disciplina.delete();
      }
}
