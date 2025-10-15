import response from "./data.js";

const container = document.getElementById("container");
const sun = document.getElementById("sun");
const weather = document.createElement("weather");
const citySelect = document.createElement("select");

container.appendChild(weather);
container.appendChild(citySelect);

response.forEach((city, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = city.name;
    citySelect.appendChild(option);
});

const render = (index = 0) => {
    const city = response[index];
    weather.innerHTML = `
        <h1>${city.name}</h1>
        <p>${city.description}</p>
        <h3>${city.temperature} °C</h3>
    `;
};
render(0);

citySelect.addEventListener("change", (e) => {
    render(e.target.value);
});

const setTheme = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 18 || currentTime < 6) {
        container.classList.add("moon");
        sun.classList.add("moon");
    }
    else {
        container.classList.remove("moon");
        sun.classList.remove("moon");
    }
};
setTheme();
setInterval(setTheme, 60000);