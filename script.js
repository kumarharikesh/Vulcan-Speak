const textInput = document.querySelector("#txt-input");
const output = document.querySelector("#output");
const form = document.querySelector("#form");

let URL = "https://api.funtranslations.com/translate/yoda.json";

const getURL = (text) => `${URL}?text=${text}`;

const errorHandler = (error) => alert(`Error occured: ${error}`);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputText = textInput.value;

  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch(errorHandler);
});
