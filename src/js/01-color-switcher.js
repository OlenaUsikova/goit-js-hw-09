const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerID=null

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function startChangeClr(){
  document.body.style.backgroundColor = getRandomHexColor(); 
    startBtn.setAttribute('disabled', true)
 }

 function stopChangeClr(){
  clearInterval(timerID);
  startBtn.disabled = false;
 }

 startBtn.addEventListener('click', () => timerID = setInterval(startChangeClr, 1000));
 stopBtn.addEventListener('click',stopChangeClr );