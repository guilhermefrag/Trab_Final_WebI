import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Sair");
    }

    async getHtml() {
        return `
        <button type="submit" id="btnsair" onclick="fecharJanela()">Sair</button>
        `;
    }
}