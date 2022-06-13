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
                <div class="mapouter"><div class="gmap_canvas"><iframe width="800" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Av.%20S%C3%A3o%20Jo%C3%A3o,%205%20-%20Centro%20Hist%C3%B3rico%20de%20S%C3%A3o%20Paulo,%20S%C3%A3o%20Paulo%20-%20SP,%2001010-001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:800px;}</style><a href="https://www.embedgooglemap.net">google map on web site</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:800px;}</style></div></div>
            </div>
            `;
  }
}
