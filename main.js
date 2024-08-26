// Домашняя работа на 11 урок

fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f33649629d4dba1564dbce195d53d110')
.then(function (resp){return resp.json()})
.then(function (data){

    console.log(data);
    console.log(data.main);

    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 274 )) + '°'
    document.querySelector('.desc').innerHTML = data.weather[0].description

    document.querySelector('.wind').innerHTML = data.wind.speed
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.country').innerHTML = data.sys.country
    document.querySelector('.sunrise').innerHTML = data.sys.sunrise
    document.querySelector('.sunset').innerHTML = data.sys.sunset
     
})


