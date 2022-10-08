const textInput = document.querySelector("#txt-input");
const output = document.querySelector("#output");
const form = document.querySelector("#form");

let URL = "https://api.funtranslations.com/translate/vulcan.json";

const getURL = (text) => `${URL}?text=${text}`;

function errorHandler(error){
  alert("Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂")
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputText = textInput.value;

  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch(errorHandler);
});
