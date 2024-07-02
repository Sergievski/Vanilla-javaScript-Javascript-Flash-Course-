document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

function celsiusToFahr(temp) {
  let result = temp * 1.8 + 32;
  return result;
}

const greetingText = "Good afternoon !";
const weatherCondition = "Sunny";
const userLocation = "New York";
let temperature = 23.8673;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id === "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id === "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });

setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").textContent = localTime
    .getHours()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=minutes]").textContent = localTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=seconds]").textContent = localTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);

// <span data-time="hours" class="time-number">08</span>


for () {
  
}