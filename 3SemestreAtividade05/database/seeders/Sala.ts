import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Sala from "App/Models/Sala";

export default class extends BaseSeeder {
  public async run() {
    await Sala.createMany([{ nome: "sala", capacidade: 35, tipo: "H" }]);
  }
}
