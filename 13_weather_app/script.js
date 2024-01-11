const date = new Date();
let dateString = date.toDateString();

let day = dateString.slice(0, 3);
let month = dateString.slice(4, 8);
let dateOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
if(minutes < 10) {
    minutes = '0' + minutes;
}
let amPm = "AM";

if(hours > 12) {
    amPm = "PM";
}

if(hours >= 12) {
    hours -= 12;
}
else if(hours == 0) {
    hours = 12;
}

let dateEle = document.getElementsByClassName('date')[0];
let text;
text = `${day} | ${month} ${dateOfMonth} | ${hours}:${minutes}${amPm}`;
dateEle.innerText = text;

setInterval(()=> {
    const date = new Date();
    let dateString = date.toDateString();

    let day = dateString.slice(0, 3);
    let month = dateString.slice(4, 8);
    let dateOfMonth = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    let amPm = "AM";

    if(hours > 12) {
        amPm = "PM";
    }

    if(hours >= 12) {
        hours -= 12;
    }
    else if(hours == 0) {
        hours = 12;
    }
    text = `${day} | ${month} ${dateOfMonth} | ${hours}:${minutes}${amPm}`;
    dateEle.innerText = text;
    changeTempAndWeather();
}, 60000);

// technical thapa has used "requests" module/package
let p = fetch("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=aaf2961731f45d86aed9297a28251dbc");

let minTemp = null;
let maxTemp = null;
let temp = null;
let weather = null;
let country = null;
let city = null;
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((data) => {
    console.log(data);
    console.log(typeof data.main.feels_like);
    console.log("Feels like: ", data.main.feels_like);
    console.log("Celsius: ", (data.main.feels_like - 273.15));
    temp = (data.main.feels_like - 273.15);
    minTemp = (data.main.temp_min - 273.15);
    maxTemp = (data.main.temp_max - 273.15);;
    weather = data.weather[0].main;
    country = data.sys.country;
    city = data.name;

    temp = temp.toFixed(2);
    minTemp = minTemp.toFixed(2);
    maxTemp = maxTemp.toFixed(2);
}).then(() => {
    console.table([temp, minTemp, maxTemp, weather, country, city]);
    // module.exports = {minTemp, maxTemp, temp, weather, country, city};
}).then(() => {
    changeTempAndWeather();
})

let tempEle = document.querySelector('.temp');
let minMaxTemp = document.querySelector('.tempMinMax');
function changeTempAndWeather() {
    tempEle.innerHTML = `${temp}&deg;C`;
    minMaxTemp.innerHTML = `MIN ${minTemp}&deg;C | Max ${maxTemp}&deg;C`

    const weatherIconEle = document.getElementById("weatherIcon");

    if(weather == "Sunny") {
        weatherIconEle.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
    }
    else if(weather == "Clouds") {
        weatherIconEle.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6"></i>`
    }
    else if(weather == "Rainy") {
        weatherIconEle.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>`
    }
    else {
        weatherIconEle.innerHTML = `<i class="fas fa-cloud" style="color: #eccc68"></i>`
    }

}