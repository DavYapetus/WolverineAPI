
const apiUrl = "https://gateway.marvel.com/v1/public/characters/1009718/comics?ts=1&apikey=0ddb966155a236dfb10abcd76d73c605&hash=7c9aff95111be45f04e565a3f85ca04d"
const pai = document.body
const outputElement = document.createElement('h1');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for (i in data.data.results ){
        console.log(data.data.results[i].id)
        outputElement.appendChild = JSON.stringify(data.data.results[i].id, null, 2);
    }
    pai.appendChild(outputElement)
    if (data.data.results.id) outputElement.textContent = JSON.stringify(data.data.results.id, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });