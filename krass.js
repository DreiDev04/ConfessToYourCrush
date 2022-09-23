
//Main Buttons
const btn_no = document.getElementById("btn_no");
const btn_yes = document.getElementById("btn_yes");


//Arrow
const arrow_up = document.getElementById("arrow_up");

//Video 
const COMA = document.getElementById("COMA");

//Gif
const sad_cat1 = document.getElementById("sad_cat1");
const sadboi = document.getElementById("sadboi");
const rain_sad = document.getElementById("rain_sad");
const sad_draw = document.getElementById("sad_draw");


//Buttons 1

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');

//Buttons 2

const bttn1 = document.getElementById('bttn1');
const bttn2 = document.getElementById('bttn2');
const bttn3 = document.getElementById('bttn3');
const bttn4 = document.getElementById('bttn4');
const bttn5 = document.getElementById('bttn5');
const bttn6 = document.getElementById('bttn6');
const bttn7 = document.getElementById('bttn7');
const bttn8 = document.getElementById('bttn8');
const bttn9 = document.getElementById('bttn9');
const bttn10 = document.getElementById('bttn10');
const bttn11 = document.getElementById('bttn11');
const bttn12 = document.getElementById('bttn12');

btn_no.addEventListener("click", function () {
  console.log("Button Pressed");
  btn_no.style.opacity = '0';
  btn11.style.opacity = '1';
  
});

btn11.addEventListener("click", function(){
  btn11.style.opacity = '0';
  btn12.style.opacity = '1';
  sad_cat1.style.opacity = '1';
});
btn12.addEventListener("click", function(){
  btn12.style.opacity ='0';
  btn10.style.opacity ='1';
  arrow_up.style.opacity = '1';
});
btn10.addEventListener("click", function(){
  btn10.style.opacity ='0';
  btn5.style.opacity ='1';
  COMA.style.opacity = "1";
  COMA.play();
  COMA.volume = .2;
  
});
btn5.addEventListener("click", function(){
  btn5.style.opacity ='0';
  btn9.style.opacity ='1';
  sadboi.style.opacity = '1';
});
btn9.addEventListener("click", function(){
  btn9.style.opacity ='0';
  bttn3.style.opacity ='1';
  btn_yes.style.width="10rem";
  btn_yes.style.height="6rem";
  btn_yes.style.fontSize = "43px";
  arrow_up.style.top = "100%";
  arrow_up.style.left = "20%";
  rain_sad.style.opacity = "1";

});
bttn3.addEventListener("click", function(){
  bttn3.style.opacity ='0';
  btn8.style.opacity ='1';
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  sad_draw.style.opacity = '1';
});
btn8.addEventListener("click", function(){
  btn4.style.opacity ='1';
  btn3.style.opacity ='1';
  btn7.style.opacity ='1';
  btn11.style.opacity ='1';
  btn12.style.opacity ='1';
});
btn7.addEventListener("click", function(){
  btn1.style.opacity = '1';
  btn2.style.opacity = '1';
  btn3.style.opacity = '1';
  btn4.style.opacity = '1';
  btn5.style.opacity = '1';
  btn6.style.opacity = '1';
  btn7.style.opacity = '1';
  btn8.style.opacity = '1';
  btn9.style.opacity = '1';
  btn10.style.opacity = '1';
  btn11.style.opacity = '1';
  btn12.style.opacity = '1';
});
bttn1.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});
bttn2.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});
bttn6.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});
bttn7.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});
bttn8.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});
bttn4.addEventListener("click", function(){
  bttn1.style.opacity = '1';
  bttn2.style.opacity = '1';
  bttn3.style.opacity = '1';
  bttn4.style.opacity = '1';
  bttn5.style.opacity = '1';
  bttn6.style.opacity = '1';
  bttn7.style.opacity = '1';
  bttn8.style.opacity = '1';
  bttn9.style.opacity = '1';
  bttn10.style.opacity = '1';
  bttn11.style.opacity = '1';
  bttn12.style.opacity = '1';
});