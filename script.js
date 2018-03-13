function upSizeText(_selector) {
  this.selector = _selector;
  if (this.selector.style.fontSize === "50px"){
    this.selector.style.fontSize = "20px";
  }
  else{
    this.selector.style.fontSize = "50px";
  }
}



function upSizeHeight(_param){
  this.param = _param;
  if (this.param.style.height > "300px") {
      this.param.style.height = "100px";
  }
  else{
    var temp = this.param.style.height;
    temp += "10px";
    this.param.style.height = temp;
  }
}

function colorSwitch(_param){
  this.param = _param;
  this.param.style.backgroundColor = "lightgreen";
}

function colorSwitch2(_param){
  this.param = _param;
  this.param.style.backgroundColor = "red";
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


button2.addEventListener("click", function(event){
  colorSwitch(rectangle);
})


button3.addEventListener("click", function(event){
  initial(rectangle);
})

button5.addEventListener("click", function(event){
  appear(rectangle);
})
button4.addEventListener("click", function(event){
  disapear(rectangle);
})

button6.addEventListener("click", function(event){
  colorSwitch2(rectangle);
})





// button6.addEventListener("click", function (event){
//   colorSwitch(rectangle);
// })

