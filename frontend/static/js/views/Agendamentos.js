import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Agendamentos");

    document.querySelectorAll(".hud").forEach((element) => {
      element.style.display = "flex";
    });
    document.querySelector("#Login").style.display = "none";
  }

  async getHtml() {
    return `
            <h1>Agendamentos</h1>
            <section class="container">
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Peso(kg)</th>
							<th>Sexo</th>
							<th>Altura(m)</th>
							<th>Problemas Anteriores</th>
                            <th>Utima Visita</th>
							<th>Motivo da Visita</th>
                            <th>Horario Agendado</th>
						</tr>
					</thead>
					<tbody id="tabela-pacientes">
						<tr class="paciente" >
							<td>Paulo</td>
							<td>100</td>
							<td>Masculino</td>
							<td>2.00</td>
							<td>Dores no dente</td>
							<td>27/01/2021</td>
                            <td>Rotina</td>
                            <td>27/01/2022 13:00</td>
						</tr>

						<tr class="paciente" >
							<td>João</td>
							<td>80</td>
							<td>Masculino</td>
							<td>1.72</td>
							<td>Caries</td>
							<td>21/06/2020</td>
                            <td>Rotina</td>
                            <td>27/01/2022 15:00</td>
						</tr>

						<tr class="paciente" >
							<td>Erica</td>
							<td>54</td>
							<td>Feminino</td>
							<td>1.64</td>
							<td>Caries</td>
							<td>11/01/2017</td>
                            <td>Rotina</td>
                            <td>28/01/2022 9:00</td>
						</tr>

						<tr class="paciente">
							<td>Douglas</td>
							<td>85</td>
							<td>Masculino</td>
							<td>1.73</td>
							<td>Probemas na gengiva</td>
							<td>02/11/2018</td>
                            <td>Arrancar Siso</td>
                            <td>28/01/2022 11:00</td>
						</tr>
						<tr class="paciente" >
							<td>Tatiana</td>
							<td>46</td>
							<td>Feminino</td>
							<td>1.55</td>
							<td>Dor no dente</td>
							<td>15/01/2022</td>
                            <td>Rotina</td>
                            <td>28/01/2022 14:00</td>
						</tr>
					</tbody>
				</table>

			</section>
        `;
  }
}
