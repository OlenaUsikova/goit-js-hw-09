import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');
console.log(daysField);

startBtn.setAttribute('disabled', true);

let interval = null;
let ourDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    ourDate = selectedDates[0];
    if (selectedDates[0] > new Date()) {
      startBtn.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputDate, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function insertDates(a) {
  daysField.innerHTML = a.days;
  hoursField.innerHTML = a.hours;
  minutesField.innerHTML = a.minutes;
  secondsField.innerHTML = a.seconds;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    const difDates = ourDate - new Date();
    let arrayDays = convertMs(difDates);
    insertDates(arrayDays);
    console.log(difDates);
    if (difDates < 1000) {
      clearInterval(interval);
    }
  }, 1000);
});
