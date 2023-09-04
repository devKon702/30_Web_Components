// API key = f2bed1e6b677d884b338166559551df0
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const apiKey = "f2bed1e6b677d884b338166559551df0";
window.addEventListener("load", eventHandler);

function eventHandler(event) {
    loadData("ho chi minh");
    $(".search").addEventListener("keydown", function (e) {
        if (e.key === "Enter" && this.value.trim()) {
            loadData(this.value.trim());
        }
    })
}

async function loadData(location) {
    let data;
    data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`).then(res => res.json());
    if (data.cod == 200) {
        $(".weather-card").classList.remove("hide");
        $(".weather-card .location").textContent = `${data.name}, ${data.sys.country}`;
        $(".weather-card .time").textContent = new Date(data.dt * 1000).toLocaleString();
        $(".weather-card .temp").textContent = (data.main.temp - 273.15).toFixed(2) + "℃";
        $(".weather-card .weather").textContent = data.weather[0].main;
        switch (data.weather[0].main) {
            case "Rainy": document.body.className = "rainy"; break;
            case "Clouds": document.body.className = "cloudy"; break;
            case "Sunny": document.body.className = "warm"; break;
            default: document.body.className = "cloudy"; break;
        }
        $(".weather-card .details .wind p").textContent = data.wind.speed + "m/s";
        $(".weather-card .details .humi p").textContent = data.main.humidity + "%";
        $(".weather-card .details .visibility p").textContent = data.visibility + "m";
        console.log(data);
    } else {
        $(".weather-card").classList.add("hide");
        $(".weather-card .location").textContent = "?";
    }
}