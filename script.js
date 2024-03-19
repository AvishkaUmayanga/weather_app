const apiKey = "f3c66b9e818fd4bd44fb0c4ee45d8828";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox = document.querySelector(".search input")
const  searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weatherIcon")
const weatherDetails = document.querySelector(".weather")
const errorMessage = document.querySelector(".error")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        errorMessage.style.display = "block"
        weatherDetails.style.display = "none"
    }
    else{
        let data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " &#8451;"
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png"
                break;
            default:
                weatherIcon.src = "images/clear.png"
                break;
    }

    weatherDetails.style.display = "block"
    errorMessage.style.display = "none"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})