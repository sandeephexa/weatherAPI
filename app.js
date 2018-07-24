// initialize storage
const storage = new Storage();
const weatherLoc = storage.getCityAndState();
// initiate weather object
const weather = new Weather(weatherLoc.city, weatherLoc.state);
// initiate UI
const ui = new UI();
// get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// change location
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  console.log(city +" "+state);
  weather.changeLocation(city,state);

  storage.setCityAndState(city,state);
  // get weather
  getWeather();
  // close modal
  $('#locModal').modal('hide');
});



function getWeather(){
    weather.getWeather()
.then(res => ui.paint(res))
.catch(err => console.log(err))
}