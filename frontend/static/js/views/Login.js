import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
            <div id="login">
            <h1>Login</h1>
            <form class="input-group-mb-3" onsubmit="return false">
                <span class="input-group-text" id="user">Usuario</span>
                <input type="text" class="form-control" aria-describedby="basic-addon1">
            
                <span class="input-group-text" id="senha">Senha</span>
                <input type="password" class="form-control" aria-describedby="basic-addon1">
                
                <button type="submit" onclick="login()" class="button2">Enviar</button>
            </form>
            </div>
            
        `;
    }
}