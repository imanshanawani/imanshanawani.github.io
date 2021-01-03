
//Typing on about page
var i = 0;
var text = "Hi, my name is Iman!";
var speed = 130;

function typeWords() {
   if (i < text.length) {
        document.getElementById("intro-hi").innerHTML += text.charAt(i);
        i++;
   }
   setTimeout(typeWords, speed);
}