export default class Random {
    constructor(app, queote) {
        this.app = app;
        this.queote = queote;
    }
    getRandomImage() {
        fetch('https://picsum.photos/200/300', {
            method: 'GET'
        })
            .then(data => {
                this.app.style.background = `url(${data.url})  no-repeat`;
            })
    }
    getRandomQueote() {
        fetch('https://api.adviceslip.com/advice', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.queote.innerHTML = data.slip.advice)
    }
}