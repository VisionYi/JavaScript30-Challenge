const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setTimeClock() {
    // 取得 時、分、秒 的時間
    const now = new Date();
    const [seconds, mins, hours] = [now.getSeconds(), now.getMinutes(), now.getHours()];

    // 以下都是將時間轉為角度
    const secondsDegrees = seconds * (360 / 60);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minsDegrees = (mins * (360 / 60)) + (secondsDegrees / 60);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hoursDegrees = (hours * (360 / 12)) + (minsDegrees / 12);
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTimeClock, 1000);
