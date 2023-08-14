import Aluno from "App/Models/Aluno";
import AlunoValidator from "App/Validators/AlunoValidator";

export default class AlunosController {
    index() {
        return Aluno.query()
      }
    
      async store({ request }) {
        const dados = await request.validate(AlunoValidator);
        return Aluno.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Aluno.findOrFail(id);
      }
    
      async update({ request }) {
        const id = request.param("id");
        const aluno = await Aluno.findOrFail(id);
        const dados = request.only(["nome", "cpf",]);
        aluno.merge(dados);
        return aluno.save();
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const aluno = await Aluno.findOrFail(id);
        return aluno.delete();
      }
}
