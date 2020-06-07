console.log("Welcome to ProgSea.com (for beginners and above!)");
console.log("%cI hope you like the web!", "color: blue; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("%c:)", "color: blue; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;")

function tryOutJavaScript() {
   alert("See! This is javascript. This is called an alert in javascript. You should probably learn javascript!");
}

var i=0, text;
text = "Free Programming For Beginners and Advanced!";

function typing() {
   if(i<text.length) {
      document.getElementById("showcase-content-title").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
   }
}
typing();

const textFancy = document.querySelector('.fancy');
const strText = textFancy.textContent;
const splitText = strText.split("");
textFancy.textContent = "";
for(let i = 0; i < splitText.length; i++){
   textFancy.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick (){
   const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++;
   if(char === splitText.length) {
      complete();
      return;
   }
}

function complete(){
   clearInterval(timer);
   timer = null;
}
