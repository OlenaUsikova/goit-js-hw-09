import Notiflix from 'notiflix';

const form = document.querySelector('form');
const delayInp = form.querySelector('input[name=delay]');
const stepInp = form.querySelector('input[name=step]');
const numberInp = form.querySelector('input[name=amount]');

delayInp.addEventListener('input', onDalayInput);
stepInp.addEventListener('input', onStepInput);
numberInp.addEventListener('input', onAmountInput);

let delay = 0;
function onDalayInput(ev) {
  delay = Number(ev.target.value);
}
let step = 0;
function onStepInput(ev) {
  step = Number(ev.target.value);
}
let position = 0;
function onAmountInput(ev) {
  position = Number(ev.target.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', foo);

function foo(ev) {
  ev.preventDefault();
  for (let i = 1; i <= position; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay = delay + step;
  }
  form.reset();
}
