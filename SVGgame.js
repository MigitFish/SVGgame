

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener("keydown", function(e){
  var batty = document.getElementById('bats');

  var battyX = Number(batty.getAttribute("x"));
  var battyXw = Number(batty.getAttribute("width"));

  var battyY = Number(batty.getAttribute("y"));
  var battyYh = Number(batty.getAttribute("height"));

  var foodo1 = document.getElementById('fodo1');
  var foodox1 = Number(foodo1.getAttribute("width"));
  var foodoy1 = Number(foodo1.getAttribute("height"));

  var foodo2 = document.getElementById('fodo2');
  var foodox2 = Number(foodo2.getAttribute("width"));
  var foodoy2 = Number(foodo2.getAttribute("height"));


  var Fx = Number(foodo1.getAttribute("x"));
  var Fy = Number(foodo1.getAttribute("y"));
  var Dx = Number(foodo2.getAttribute("x"));
  var Dy = Number(foodo2.getAttribute("y"));

  if(e.keyCode == 37) {

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/

if(battyX > Dx && battyX < Dx + foodox2 && battyY > Dy && battyY < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   else if(battyX > Fx && battyX < Fx + foodox2 && battyY > Fy && battyY < Fy + foodoy2 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   batty.setAttribute("x", battyX - 25)
   battyX = battyX - 25;
  }
  else if(e.keyCode == 39){

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
    if(battyX > Dx && battyX < Dx + foodox2 && battyY > Dy && battyY < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   else if(battyX > Fx && battyX < Fx + foodox1 && battyY > Fy && battyY < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   batty.setAttribute("x", battyX + 25)
   battyX = battyX + 25;
  }
  else if(e.keyCode == 38){

  /*  if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
    if(battyX > Dx && battyX < Dx + foodox2 && battyY > Dy && battyY < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   else if(battyX > Fx && battyX < Fx + foodox1 && battyY > Fy && battyY < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   batty.setAttribute("y", battyY - 25)

   battyY = battyY - 25;
  }
  else if(e.keyCode == 40){

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
    if(battyX > Dx && battyX < Dx + foodox2 && battyY > Dy && battyY < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }
   else if(battyX > Fx && battyX < Fx + foodox1 && battyY > Fy && battyY < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }

   batty.setAttribute("y", battyY + 25)

   battyY = battyY + 25;
  }

});
