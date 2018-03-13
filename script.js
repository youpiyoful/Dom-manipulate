// function upSizeText(_class){
//   this.class = _class;
//   this.class.style.font-size = 4em;
// }
var text = document.querySelector("p");

text.addEventListener("click", function (e){

  if (text.style.fontSize === "50px"){
    text.style.fontSize ="20px";
  } 

  else{

  text.style.fontSize = "50px";
  }


})
