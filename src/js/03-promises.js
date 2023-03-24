import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const startBtn = form.querySelector('submit');
const delayInp = form.querySelector('delay');
const stepInp = form.querySelector('step');
const numberInp = form.querySelector('amount');

let delayN = delayInp.addEventListener.target.elements.value;
let stepN = stepInp.addEventListener.target.elements.value;
let amountN = numberInp.addEventListener.target.elements.value;

function createPromise(position, delay) {
  return (new Promise((resolve, reject)) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }})
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })