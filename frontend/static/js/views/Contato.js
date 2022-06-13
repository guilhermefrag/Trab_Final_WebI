import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contato");
    }

    async getHtml() {
        return `
            <div class="contatos">
                <h1>Contato</h1>
                <p>consultoriodentista@dentasso.com.br</p>
                <p>(48) 92232-9090</p>
                <p>Rua São João, nº 5, Centro, São Paulo - SP</p>
            </div>
            `;
    }
}
