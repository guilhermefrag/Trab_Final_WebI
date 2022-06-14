function fecharJanela() {
  window.open(location, "_self").close();
}

function login() {
  user = document.forms[0].elements[0].value;
  senha = document.forms[0].elements[1].value;

  if (user == "123" && senha == "123") {
    logado = document.querySelectorAll(".hud");
    logado.forEach((element) => {
      element.style.display = "flex";
    });

    document.getElementById("Login").style.display = "none";
    window.location.href = "/agendamentos";
  }
}

function changeurl(url, title) {
  var new_url = "/" + url;
  window.history.pushState("data", title, new_url);
}

function logout() {
  logado = document.querySelectorAll(".hud");
  logado.forEach((element) => {
    element.style.display = "none";
  });

  document.getElementById("Login").style.display = "flex";

  alert("Logout efetuado!");
}
