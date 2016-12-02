var  foodCount = 0;
var gameOver = false;
var healths = 70;
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
var animation1 = document.getElementById('animate1')
var animation2 = document.getElementById('animate2')
var timeBegin = Date.now()
var timeStop;
var foodo1 = document.getElementById('fodo1');
var foodo2 = document.getElementById('fodo2');
var foodod2 = Number(animation2.getAttribute("dur" ));
var foodod1 = Number(animation1.getAttribute("dur"));


document.addEventListener("keydown", function(e){

  var batty = document.getElementById('bats');
  var counterF = document.getElementById('spider');
  var counterT = document.getElementById("times")
  var counterH = document.getElementById("health")

  var battyX = Number(batty.getAttribute("x"));
  var battyXw = Number(batty.getAttribute("width"));

  var battyY = Number(batty.getAttribute("y"));
  var battyYh = Number(batty.getAttribute("height"));


  var foodox1 = Number(foodo1.getAttribute("width"));
  var foodoy1 = Number(foodo1.getAttribute("height"));


  var foodox2 = Number(foodo2.getAttribute("width"));
  var foodoy2 = Number(foodo2.getAttribute("height"));



  var Fx = Number(foodo1.getAttribute("x"));
  var Fy = Number(foodo1.getAttribute("y"));
  var Dx = Number(foodo2.getAttribute("x"));
  var Dy = Number(foodo2.getAttribute("y"));
if(gameOver == false){
  if(e.keyCode == 37) {

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
   counterH.textContent = "Health: " + healths;
if(battyX + 75 > Dx && battyX + 75 < Dx + foodox2 && battyY + 75 > Dy && battyY + 75 < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
    animation2.setAttribute("dur",foodod2/1.5)
    foodod2 = foodod2/1.5;
    console.log(foodod2)

   }
   else if(battyX + 75 > Fx && battyX  + 75< Fx + foodox2 && battyY  + 75> Fy && battyY + 75 < Fy + foodoy2 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation1.setAttribute("dur",foodod1/1.5)
     foodod1 = foodod1/1.5;
     console.log(foodod1)
   }

   batty.setAttribute("x", battyX - 25)
    healths = healths - 1;
   battyX = battyX - 25;
  }
  else if(e.keyCode == 39){

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
   counterH.textContent = "Health: " + healths;
    if(battyX + 75 > Dx && battyX + 75 < Dx + foodox2 && battyY + 75 > Dy && battyY + 75 < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation2.setAttribute("dur",foodod2/1.5)
     foodod2 = foodod2/1.5;
     console.log(foodod2)
   }
   else if(battyX + 75 > Fx && battyX  + 75< Fx + foodox2 && battyY  + 75> Fy && battyY + 75 < Fy + foodoy2 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation1.setAttribute("dur",foodod1/1.5)
     foodod1 = foodod1/1.5;
     console.log(foodod1)
   }

   batty.setAttribute("x", battyX + 25)
    healths = healths - 1;
   battyX = battyX + 25;
  }
  else if(e.keyCode == 38){

  /*  if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
   counterH.textContent = "Health: " + healths;
    if(battyX + 75 > Dx && battyX + 75 < Dx + foodox2 && battyY + 75 > Dy && battyY + 75 < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation2.setAttribute("dur",foodod2/1.5)
     foodod2 = foodod2/1.5;
     console.log(foodod2)
   }
   else if(battyX + 75 > Fx && battyX  + 75< Fx + foodox2 && battyY  + 75> Fy && battyY + 75 < Fy + foodoy2 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation1.setAttribute("dur",foodod1/1.5)
     foodod1 = foodod1/1.5;
     console.log(foodod1)
   }

   batty.setAttribute("y", battyY - 25)
 healths = healths - 1;
   battyY = battyY - 25;
  }
  else if(e.keyCode == 40){

    /*if(battyX + battyXw > Fx && battyX + battyXw < Fx + foodox1 && battyY + battyYh > Fy && battyY + battyYh < Fy + foodoy1 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
   }*/
   counterH.textContent = "Health: " + healths;
    if(battyX + 75 > Dx && battyX + 75 < Dx + foodox2 && battyY + 75 > Dy && battyY + 75 < Dy + foodoy2 ){
     foodo2.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation2.setAttribute("dur",foodod2/1.5)
     foodod2 = foodod2/1.5;
     console.log(foodod2)
   }
   else if(battyX + 75 > Fx && battyX  + 75< Fx + foodox2 && battyY  + 75> Fy && battyY + 75 < Fy + foodoy2 ){
     foodo1.setAttribute("x",randomNumber(0,1600))
     console.log("touch")
     healths = healths + 35;
     counterH.textContent = "Health: " + healths;
     foodCount = foodCount + 1;
     counterF.textContent = "Food Count: " + foodCount;
     animation1.setAttribute("dur",foodod1/1.5)
     foodod1 = foodod1/1.5;
     console.log(foodod1)
   }

   batty.setAttribute("y", battyY + 25)
   healths = healths - 1;
   battyY = battyY + 25;
  }
  if(foodCount >= 10 || healths <= 0){
    gameOver = true;
    timeStop = Date.now()
    document.getElementById("canvas").pauseAnimations()
    counterT.textContent = "Time: " + (timeStop - timeBegin)/1000;
    document.getElementById("gg").setAttribute("opacity","1")
  }
else{
}
}
});
