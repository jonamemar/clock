let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function setDate() {
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
