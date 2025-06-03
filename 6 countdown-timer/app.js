const btn = document.querySelector('button');
const container = document.querySelector('.container');
const timerContainer = document.querySelector('.timer-container');
const dateInput = document.querySelector('.dateinput');
const texts = document.querySelector('.texts')


let title = document.querySelector('.title');
let day = document.querySelector('.day');
let hour = document.querySelector('.Hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let intervalId;





function show() {
    const target = new Date(dateInput.value);
    if (isNaN(target)) {
        alert('pls enter valid date');
    };

    const DatesNow = new Date();
    const difference = target - DatesNow;

    if (difference <= 0) {
        clearInterval(intervalId);
        alert('please enter the valid date')
        return;
    }

    const seconds = difference / 1000;
    const days = Math.floor(seconds / 86400);
    const Hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    title.textContent = texts.value;
    day.textContent = days;
    hour.textContent = Hours;
    minute.textContent = minutes;
    second.textContent = remainingSeconds;
}

function countDown() {
    intervalId = setInterval(show, 1000);
}

btn.addEventListener('click', () => { 

    if (dateInput.value === '' || texts.value === '') {
        alert('Please enter both date and title before starting.');
        return;
    }
    container.style.display = 'none';
    timerContainer.style.display = 'block';
    countDown()
});

function stop() {
    clearInterval(intervalId);
};

function resetCounter() {
    dateInput.value = "";
    texts.value = "";
    title.textContent = "Counter title";
    day.textContent = hour.textContent = minute.textContent = second.textContent = "0";
    clearInterval(intervalId)
    container.style.display = 'flex';
    timerContainer.style.display = 'none'; 

};

function start() {
    countDown()
};



