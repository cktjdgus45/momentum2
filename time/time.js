export default class Time {
    handleIntervalTime() {
        const timeSpan = document.querySelector('.times');
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const seconds = new Date().getSeconds();
        timeSpan.innerHTML = `
        ${hours < 10 ? `0${hours}` : hours}:
        ${minutes < 10 ? `0${minutes}` : minutes}:
        ${seconds < 10 ? `0${seconds}` : seconds}
        `;
    }
}