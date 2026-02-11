let i = Math.floor(Math.random()*5)+1;
//let dispositivo = matchMedia;

switch (i){
   case 1:
      document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_1.png')";
      break;
   case 2:
      document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_2.png')";
      break;
   case 3:
      document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_3.png')";
      break;
   case 4:
      document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_4.png')";
      break;
   case 5:
      document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_5.png')";
      break;
}