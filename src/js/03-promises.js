import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const startBtn = form.querySelector('submit');
const delayInp = form.querySelector('delay');
const stepInp = form.querySelector('step');
const numberInp = form.querySelector('amount');



const delay = Number(delayInp.addEventListener.target.elements.value);
const step = stepInp.addEventListener.target.elements.value;
const position = numberInp.addEventListener.target.elements.value;
console.log(delay)

startBtn.addEventListener('click', foo() )

newDelay = 0
function foo(){
  for(let i=1; i <= position; i += 1){
    position = i;
    function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
       setTimeout(() => {
     const shouldResolve = Math.random() > 0.3;
     if (shouldResolve) {
       resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
     } else {
       reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`))
     }
   }, delay)})}
     delay = delay + step;
    //  console.log(delay)
  }}

function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
  } else {
    reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`))
  }
}, delay)})}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })
