import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Cadastro");
  }

  async getHtml() {
    return `
    <h1>Cadastro</h1>
    <form onsubmit="return false">
        <label class="lbl-cadastro" for="fname">Nome</label>
        <input class="inpt-cadastro" type="text" name="firstname">

        <label class="lbl-cadastro" for="lname">Peso</label>
        <input class="inpt-cadastro" type="number" step="0.01" name="peso">

        <label class="lbl-cadastro" for="sexo">Sexo</label>
        <select id="sexo" name="sexo">
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
        </select>

        <label class="lbl-cadastro" for="lname">Altura</label>
        <input class="inpt-cadastro" type="number" step="0.01" name="altura">

        <label class="lbl-cadastro" for="country">Problemas Anteriores</label>
        <select id="country" name="country">
            <option value="car">Caries</option>
            <option value="geng">Probemas na gengiva</option>
            <option value="siso">Retirada recente de siso</option>
            <option value="dor">Dor no dente</option>
            <option value="outr">Outros</option>
        </select>

        <label class="lbl-cadastro" for="lname">Utima Visita</label>
        <input class="inpt-cadastro" type="date" name="ult-vis">

        <label class="lbl-cadastro" for="fname">Motivo da Visita</label>
        <input class="inpt-cadastro" type="text" name="mot-vis">

        <label class="lbl-cadastro" for="lname">Data da Consulta</label>
        <input class="inpt-cadastro" type="datetime-local" name="prox-vis">

        <button type="submit" class="button-submit">Cadastrar</button>
    </form>
        `;
  }
}
