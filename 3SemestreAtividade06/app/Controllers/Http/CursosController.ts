import Curso from "App/Models/Curso";

export default class CursosController {
  index() {
    return Curso.query().preload('disciplinas');
  }

  store({ request }) {
    const dados = request.only(["nome", "duracao", "modalidade"]);

    return Curso.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Curso.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);
    return curso.delete();
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);
    const dados = request.only(["nome", "duracao", "modalidade"]);
    curso.merge(dados);
    return curso.save();
  }
}
