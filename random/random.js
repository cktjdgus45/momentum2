export default class Random {
    constructor(app, queote) {
        this.app = app;
        this.queote = queote;
        this.queote.style.color = "#FF6363";
    }
    getRandomImage() {
        const url = 'https://picsum.photos/200/300';
        fetch(url, {
            method: 'GET'
        })
            .then(data => {
                this.app.style.background = `url(${data.url})  center/contain no-repeat`;
            })
    }
    getRandomQueote() {
        const url = 'https://api.adviceslip.com/advice';
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.queote.innerHTML = data.slip.advice)
    }
}