// const textInput = document.querySelector("#txt-input");
// const output = document.querySelector("#output");
// const form = document.querySelector("#form");

// let URL = "https://api.funtranslations.com/translate/vulcan.json";

// const getURL = (text) => `${URL}?text=${text}`;

// function errorHandler(error){
//   alert("Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂")
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const inputText = textInput.value;

//   fetch(getURL(inputText))
//     .then((response) => response.json())
//     .then((json) => (output.innerText = json.contents.translated))
//     .catch(errorHandler);
// });

let url = "https://api.funtranslations.com/translate/vulcan.json"
let translate=document.querySelector("#translate");
let erase=document.querySelector("#clear");

erase.addEventListener("click",function vanila(){
 document.querySelector("#txt-input").value = "";
 document.querySelector("#output").innerHTML = "";
})

translate.addEventListener("click",function vanila(){
  let EnglishInput=document.querySelector("#txt-input").value;
  var finalURL = buildFinalURL(EnglishInput);
  fetch(finalURL)
    .then(function x(response){
    return response.json()})
    .then(function y(json){
       let vulcan = json.contents.translated;
       document.querySelector("#output").innerHTML = vulcan;
    }).catch(errorHandler)
})

function errorHandler(error){
  alert("Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂")
}

function buildFinalURL(EnglishInput) {
 var encodedURI = encodeURI(EnglishInput);
 console.log("Encoded URI: " + encodedURI);
 return `${url}?text=${encodedURI}`;
}
