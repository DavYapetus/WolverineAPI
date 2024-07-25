
var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/1009718/series?ts=1&apikey=0ddb966155a236dfb10abcd76d73c605&hash=7c9aff95111be45f04e565a3f85ca04d&offset=00"

function pesquisa(){
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for (i in data.data.results ){
        const novaDiv = document.createElement("div");
        const titulo = document.createElement("h5");
        const capaDaComic = document.createElement('img');
        titulo.innerHTML = data.data.results[i].title;
        if (data.data.results[i].thumbnail.path) {
          console.log(data.data.results[i].thumbnail.path)
          capaDaComic.src = data.data.results[i].thumbnail.path + "." + data.data.results[i].thumbnail.extension;}
        else {
          console.log(data.data.results[i].images[0].path)
          capaDaComic.src = data.data.results[i].images.path + "." + data.data.results[i].thumbnail.extension;}
        console.log(data.data.results[i])
        capaDaComic.style.height = "480px";
        capaDaComic.style.width = "320px";
        novaDiv.appendChild(titulo);
        novaDiv.appendChild(capaDaComic);
        document.body.appendChild(novaDiv);
    }
    if (data.data.results.id) outputElement.textContent = JSON.stringify(data.data.results.id, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}
var incremento = 0;
  botaoPesquisa.onclick = function() {
      pesquisa()}
  botaoProx.onclick = function() {
    incremento += 20;
    var strIncremento = incremento.toString();
    apiUrl = apiUrl.slice(0, -2)
    apiUrl = apiUrl+strIncremento
    console.log(apiUrl)
    pesquisa()}
