class Weather{
   constructor(city){
       this.key = '89ef360a8d07f111f98094056ed1a1c2';
       this.city = city;
   }
   // fetch api

async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.key}`);

    const responseData = await response.json();

    return responseData;
}

// change location
changeLocation(city){
    this.city = city;
}
}

