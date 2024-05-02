

function clock() {
const hrDots = document.getElementById('hrDots');
const minDots = document.getElementById('minDots');
const secDots = document.getElementById('secDots');
var date = new Date();
var hrs =date.getHours() % 12;//convetring 24 hour to 12 hour
hrs = hrs === 0 ? 12 : hrs;
var min = date.getMinutes();
var sec = date.getSeconds();
var amPm = date.getHours() >= 12 ? "PM" : "AM";
// secondsDots
var secondsDots = '';
for (var i =1 ;i<61;i++){
    var rotation = i * 6;//rotateing the dots buy 6 degrees
    if (i === sec){
        secondsDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    }else{
        secondsDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        
    }
}
//minutesDots
var minutesDots = '';
for (var i =1 ;i<61;i++){
    var rotation = i * 6;//rotateing the dots buy 6 degrees
    if (i === min){
        minutesDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    }else{
        minutesDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        
    }
}
//hoursDots
var hoursDots = '';
for (var i =1 ;i<13;i++){
    var rotation = i * 30;//rotateing the dots buy 6 degrees
    if (i === hrs){
        hoursDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    }else{
        hoursDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
    }
}

function zero(number) {
    if(number < 10){
        return '0' + number
    }
    return number
}


secDots.innerHTML = `${secondsDots}<b>${amPm}</b><h2>${zero(sec)}<br><span>seconds</span></h2>`;
hrDots.innerHTML = `${hoursDots}<h2>${zero(hrs)}<br><span>hours</span></h2>`;
minDots.innerHTML = `${minutesDots}<h2>${zero(min)}<br><span>minutes</span></h2><h2><span> </h2>`;
}
setInterval(clock, 1000);


// for ticking sound

function playAudio() {
    var audio = new Audio('./audio.mp3'); 
    audio.loop = true;
    audio.play();
   
  }
  playAudio();
  
  
  setInterval(playAudio,1000);








