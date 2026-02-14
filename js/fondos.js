if (window.innerWidth >= 768){
   let i = Math.floor(Math.random()*5)+1;
   switch (i){
      case 1:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_1.jpg')";
         break;
      case 2:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_2.jpg')";
         break;
      case 3:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_3.jpg')";
         break;
      case 4:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_4.jpg')";
         break;
      case 5:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/horizontal/horizontal_5.jpg')";
         break;
   }
}else{
   let i = Math.floor(Math.random()*8)+1;
   switch (i){
      case 1:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_1.jpg')";
         break;
      case 2:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_2.png')";
         break;
      case 3:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_3.png')";
         break;
      case 4:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_4.jpg')";
         break;
      case 5:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_5.jpg')";
         break;
      case 6:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_6.jpg')";
         break;
      case 7:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_7.jpg')";
         break;
      case 8:
         document.getElementById("fondo").style.backgroundImage = "url('../images/fondos/vertical/vertical_8.jpg')";
         break;
   }
}

