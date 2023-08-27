const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultNum = document.getElementById('result');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');

const colorButton = document.getElementById('colorButton');
const timeButton = document.getElementById('timeButton');

let colorIndex = 0;
const colors = ['white', 'purple', 'orange', 'green', 'yellow', 'transparent', '#be7dd8bf'];
let hour;

addBtn.addEventListener('click', () => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    const sum = n1 + n2;
    if (isNaN(sum))
        resultNum.value = "Enter proper Values";
    else
        resultNum.value = sum;
});

resetBtn.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    resultNum.value = '';
});

colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
});

timeButton.addEventListener('click', () => {
    let greeting;
    if (hour >= 0 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else if (hour >= 18 && hour < 21) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }
    alert(`${greeting}`);
});

function updateTime() {
    const now = new Date();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    hour = now.getHours();

    timeButton.innerHTML = `time<br>${hour}:${minute}:${second}`;
}

function formatTime(date) {
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

function padZero(number) {
    return (number < 10) ? `0${number}` : number;
}

updateTime(); // Initial call
setInterval(updateTime, 1000); // Update every second
