class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.img = document.getElementById('w-icon');
        this.string = document.getElementById('w-string');
        this.temperature = document.getElementById('w-temperature');
        this.wind = document.getElementById('w-wind');
        this.humidity = document.getElementById('w-humidity');
    }

    paint(weather){
        console.log('inside paint '+weather.weather[0].icon);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.img.setAttribute('src',weather.weather[0].icon)
        this.string.textContent = weather.weather[0].main;
        this.temperature.textContent = weather.main.temp;
        this.wind.textContent = weather.wind.speed;
        this.humidity.textContent = weather.main.humidity;
    }
}