const searchCity = document.getElementById("searchCity");
const searchCityBtn  = document.getElementById("searchCityBtn");




const ApiKey = "cb32577cac83c077f4f280ffe3f646bd";

async function checkWeather(cityName){
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`
    const response = await fetch(ApiUrl);
    const data = await response.json();
    displayData(data)
}
    function displayData(data){
        const tempMain = document.getElementById("tempMain");
        tempMain.innerHTML = Math.round(data.main.temp) + "°C";

        const cityMain = document.getElementById("cityMain");
        cityMain.innerHTML = data.name;


        const humidityMain = document.getElementById("humidityMain");
        humidityMain.innerHTML = data.main.humidity + "%";

        const windMain = document.getElementById("windMain");
        windMain.innerHTML = data.wind.speed + "m/s";

        const weatherIconImage = document.getElementById("weatherIconImage");
        if(data.weather[0].main === "Clouds"){
            weatherIconImage.src = "images/clouds.png"

        }else if(data.weather[0].main === "Rain"){
            weatherIconImage.src = "images/rain.png"

        }else if(data.weather[0].main === "Clear"){
            weatherIconImage.src = "images/clear.png"

        }else if(data.weather[0].main === "Snow"){
            weatherIconImage.src = "images/snow.png"

            }else if(data.weather[0].main === "Wind"){
                weatherIconImage.src = "images/wind.png"
            }
            else if(data.weather[0].main === "Drizzle"){
                weatherIconImage = "images/drizzle.png"
            }else{
                weatherIconImage.src = "images/mist.png"
            }
            
    }
 searchCityBtn.onclick = function(){
    const cityName = searchCity.value;
    checkWeather(cityName);
}




