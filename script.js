function upSizeText(_selector) {
  this.selector = _selector;
  if (this.selector.style.fontSize === "50px"){
    this.selector.style.fontSize = "20px";
  }
  else{
    this.selector.style.fontSize = "50px";
  }
}

function jump(_param) {
  this.param = _param;
  var pos = 300;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 150){
      clearInterval(id);
      pos = 300;
      this.param.style.top = pos + "px";
    }
    else{
      pos --;
      this.param.style.top = pos + "px";
    }
    
  }
}

function upSizeHeight(_param){
  this.param = _param;
  if (this.param.style.height > "300px") {
      this.param.style.height = "100px";
  }
  else{
    this.param.style.height = parseInt(getComputedStyle(this.param).height) + 10 + "px";
  }
}

function colorSwitch(_param, _color){
  this.param = _param;
  this.color = _color;
  this.param.style.backgroundColor = this.color;
}


function initial(_param){
  this.param = _param;
  this.param.style.backgroundColor = "";
}


function disapear(_param){
  this.param = _param;
  this.param.style.backgroundColor = "inherit";
}

function appear(_param){
  this.param = _param;
  this.param.style.backgroundColor = "";
}


var text = document.querySelector("p");
var rectangle = document.getElementById("rectangle");
var button1 = document.getElementById("bouton1");
var button2 = document.getElementById("bouton2");
var button3 = document.getElementById("bouton3");
var button4 = document.getElementById("bouton4");
var button5 = document.getElementById("bouton5");
var button6 = document.getElementById("bouton6");




text.addEventListener("click", function(e){
  upSizeText(text);
});


button1.addEventListener("click", function(e){
  upSizeHeight(rectangle);
})


button2.addEventListener("click", function(e){
  colorSwitch(rectangle, "lightgreen");
})


button3.addEventListener("click", function(e){
  initial(rectangle);
})

button5.addEventListener("click", function(e){
  appear(rectangle);
})
button4.addEventListener("click", function(e){
  disapear(rectangle);
})

button6.addEventListener("click", function(e){
  colorSwitch(rectangle, "red");
})

document.addEventListener("keyup", function(e){
  if(e.keyCode === 38){
    jump(rectangle);
  }
})



