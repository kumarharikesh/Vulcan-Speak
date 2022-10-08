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
