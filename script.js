/*function upSizeText(_class){
  this.class = _class;
  this.class.style.fontSize = "4em";
}

var text = document.querySelector("p");
text.addEventListener("click", upSizeText(text));
*/
var text = document.querySelector("p");
text.addEventListener("click", function (e){
  if (text.style.fontSize === "50px"){
    text.style.fontSize = "20px";
  }
  else{
    text.style.fontSize = "50px";
  }
})


/*
function upSizeText(_selector) {
  this.selector = _selector;
  this.selector.style.fontSize = "50px";
}
var text = document.querySelector("p");

text.addEventListener("click", upSizeText(text));

*/
