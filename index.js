

async function checkWeather() {
    try {
      const apiKey = "126b57871c2293f0d38e426b8f75531f";
      var cityEntered = document.getElementById("input").value;
      console.log(cityEntered);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityEntered}`;
  
      const response = await fetch(apiUrl + `&appid=${apiKey}`);
  
      if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
  
        console.log("Invalid City Name");
      } else {
        var data = await response.json();
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  
        if (data.weather[0].main == "Haze") {
          document.getElementById("weather-image").src = "images/clouds.png";
        } else if (data.weather[0].main == "Clouds") {
          document.getElementById("weather-image").src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
          document.getElementById("weather-image").src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
          document
            .getElementById("weather-image")
            .setAttribute("src", "images/drizzle.png");
        } else if (data.weather[0].main == "Rain") {
          document
            .getElementById("weather-image")
            .setAttribute("src", "images/rain.png");
        } else if (data.weather[0].main == "Mist") {
          document
            .getElementById("weather-image")
            .setAttribute("src", "images/mist.png");
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
  }
  