import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");

    document.querySelectorAll(".hud").forEach((element) => {
      element.style.display = "none";
    });
  }

  async getHtml() {
    return `
    <div id="login">
        <div class="centro">
            <div>
                <H2 class="title-logo">Login</H2>
                <form class="form-login" onsubmit="return false">
                    <input class="input-login" id="user" type="text" placeholder="Login" required>
                    <input class="input-login" id="senha" type="password" placeholder="Senha" required>
                    <button type="submit" onclick="login()" class="button-submit">Sign up</button>
                </form>
            <div>
        </div>
    </div>`;
  }
}
