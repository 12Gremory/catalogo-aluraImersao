var listaFilmes = [];

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  listaFilmes.push(filme);
  const list = document.getElementById("listaFilmes");
  const task = document.createElement("img");

  for (let i = 0; i < listaFilmes.length; i++) task.src = `${listaFilmes[i]}`;

  list.appendChild(task);
}
