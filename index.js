
const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};


class CountdownTimer{
    constructor({selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;
    }

    timerId = setInterval(() => {
        let currentDate = Date.now();
        let timerDate = this.targetDate - currentDate;
        changeTime(timerDate);
        stopInterval(timerDate);
    }, 1000)
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function changeTime(time) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
};

function stopInterval() {
    if (timerDate < 0) {
        clearInterval(this.timerId);
        alert("Today Irynka has BIRTHDAY!!!")
    }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 15, 2021 00:00:00'),
});
 