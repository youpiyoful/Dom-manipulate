function upSizeText(_class){
  this.class = _class;
  this.class.style.font-size = 4em;
}

var text = document.getElementByClassName("text");
var textBig = document.getElementByClassName("text").addEventListener(onclick, upSizeText("text"));
