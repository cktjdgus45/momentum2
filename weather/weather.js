export default class Weather {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
    fetchWeatherApi() {
        const location = document.querySelector('.location');
        const weather = document.querySelector('.weather');
        const API_KEY = '175f516a65aad231d8b2b5d1abb46438';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${API_KEY}`;

        fetch(url, {
            method: 'GET'
        })//
            .then(response => response.json()) //
            .then(data => {
                this.print(data.name, data.weather[0].main)
            })
    }
    print(location, weather) {
        const locationElement = document.querySelector('.location');
        const weatherElement = document.querySelector('.weather');
        locationElement.innerText = location
        weatherElement.innerText = weather
    }
}