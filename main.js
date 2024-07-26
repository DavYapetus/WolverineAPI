var strIncremento = 0
var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/1009718/series?ts=1&apikey=0ddb966155a236dfb10abcd76d73c605&hash=7c9aff95111be45f04e565a3f85ca04d&offset=0"+strIncremento

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
      novaDiv.setAttribute("id", "comic")
      const titulo = document.createElement("h5");
      const capaDaComic = document.createElement('img');
      titulo.innerHTML = data.data.results[i].title;
      if (data.data.results[i].thumbnail.path) {
        capaDaComic.src = data.data.results[i].thumbnail.path + "." + data.data.results[i].thumbnail.extension;}
      else {
        capaDaComic.src = data.data.results[i].images.path + "." + data.data.results[i].thumbnail.extension;}
      capaDaComic.style.height = "480px";
      capaDaComic.style.width = "320px";
      novaDiv.appendChild(titulo);
      novaDiv.appendChild(capaDaComic);
      document.body.insertBefore(novaDiv, botaoProx);
    }
    if (data.data.results.id) outputElement.textContent = JSON.stringify(data.data.results.id, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}
var contador = 0;
var incrementoNum = 0;
function incremento(){
  contador += 1;
  tesoura = -2;
  if (contador > 5){
    tesoura -=1;
  }
  if (contador > 50){
    tesoura -=1;
  }
  incrementoNum += 20;
  var strIncremento = incrementoNum.toString();
  apiUrl = apiUrl.slice(0, tesoura);
  apiUrl = apiUrl+strIncremento;
}

botaoPesquisa.onclick = function() {
  pesquisa()}
botaoProx.onclick = function() {
  incremento()
  pesquisa()}
function posicaoScroll(){
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;
  return scrollPosition >= documentHeight;
}
window.addEventListener("scroll",()=>{
  setTimeout(function(){if(posicaoScroll()){
    incremento();
    pesquisa();
  }
  },5000);
})