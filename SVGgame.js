




var batty = document.getElementById('bats');

var battyX = Number(batty.getAttribute("x"));

var battyY = Number(batty.getAttribute("y"));

document.addEventListener("keydown", function(e){
  if(e.keyCode == 37) {
    batty.setAttribute("x", battyX - 25)
    battyX = battyX - 25;
  }
  else if(e.keyCode == 39){
    batty.setAttribute("x", battyX + 25)
    battyX = battyX + 25;
  }
  else if(e.keyCode == 38){
    batty.setAttribute("y", battyY - 25)
    battyY = battyY - 25;
  }
  else if(e.keyCode == 40){
    batty.setAttribute("y", battyY + 15)
    battyY = battyY + 25;
  }
});
