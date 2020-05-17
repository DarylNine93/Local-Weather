$(document).ready(function () {

    const image = document.querySelector('#image');
    const description = document.querySelector('#description');
    const temp = document.querySelector("#temp");
    const humidity = document.querySelector("#humidity");
    const temp_min = document.querySelector("#temp_min");
    const temp_max = document.querySelector("#temp_max");
    const show_error = document.querySelector("#error");
    const town = document.querySelector("#town");
    const loader = document.querySelector("#loader");
    const box = document.querySelector("#box");

    function show_weather() {
        loader.classList.add("loader");
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
            $.ajax({
                url: url,
                success: function (result) {
                    console.log(result);
                    image.src = result.weather[0].icon;
                    description.innerHTML = result.weather[0].description;
                    temp.innerHTML = result.main.temp + " °C";
                    humidity.innerHTML = "HUMIDITY: " + result.main.humidity + "%";
                    temp_min.innerHTML = "TEMP_MIN: " + result.main.temp_min + " °C";
                    temp_max.innerHTML = "TEMP_MAX: " + result.main.temp_max + " °C";
                    town.innerHTML = result.name;
                    loader.classList.remove("loader");
                    box.classList.add("box");
                },
                error: function (error) {
                    console.log(error);
                }

            })

        }

        function error() {
            console.log('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            console.log("Your navigator does not support geolocalisation")

        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }

    }

    document.querySelector('#show_weather').addEventListener('click', show_weather);

})


















