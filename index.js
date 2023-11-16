var listaFilmes = [];

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  var inputFilme = document.getElementById("filme");
  if (isImage(filme)) {
    listaFilmes.push(filme);
    const list = document.getElementById("listaFilmes");
    const task = document.createElement("img");

    for (let i = 0; i < listaFilmes.length; i++) task.src = `${listaFilmes[i]}`;

    list.appendChild(task);
    inputFilme.value = "";
  } else {
    alert("URL inválida");
    inputFilme.value = "";
  }
}

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
