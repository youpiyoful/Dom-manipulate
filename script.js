/*function upSizeText(_class){
  this.class = _class;
  this.class.style.fontSize = "4em";
}

var text = document.querySelector("p");
text.addEventListener("click", upSizeText(text));
*/
/*var text = document.querySelector("p");
text.addEventListener("click", function (e){
  if (text.style.fontSize === "50px"){
    text.style.fontSize = "20px";
  }
  else{
    text.style.fontSize = "50px";
  }
})

var rectangle = document.getElementByClassName("rectangle");
button1 = document.getElementById("bouton1");
button2 = document.getElementById("bouton2");
button3 = document.getElementById("bouton3");
button4 = document.getElementById("bouton4");
button5 = document.getElementById("bouton5");

button1.addEventListener("click", function(upSizeHeight){

})*/





function upSizeText(_selector) {
  this.selector = _selector;
  if (this.selector.style.fontSize === "50px"){
    this.selector.style.fontSize = "20px";
  }
  else{
    this.selector.style.fontSize = "50px";
  }
}

var text = document.querySelector("p");

text.addEventListener("click", function(e){
  upSizeText(text);
  });


