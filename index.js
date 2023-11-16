var filme1 =
  "https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg";
var filme2 =
  "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg";
var filme3 =
  "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg";

var listaFilmes = [];
listaFilmes.push(filme1, filme2, filme3);

for (let i = 0; i < listaFilmes.length; i++)
  document.write("<img src=" + listaFilmes[i] + ">");
