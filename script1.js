const cityname = document.querySelector(".cityname");
const datetime = document.querySelector(".date");
const fulldate = document.querySelector(".fulldate");
const searchdiv = document.querySelector("#searchdiv");
const searchinput = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#searchbtn");
const temp = document.querySelector(".temp");
const skysit = document.querySelector(".skysit");
const skyicon = document.querySelector(".skysiticon");
const skysituation = document.querySelector(".skysituation");
const region = document.querySelector(".region");
const speed = document.querySelector(".speed");
const humidite = document.querySelector(".humidite");
const presuare = document.querySelector(".presuare");
const sunset = document.querySelector(".sunsettime");
const sunrise = document.querySelector(".sunrisetime");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const backgroundimg = document.querySelector("#backgroundimg");
function currentTime() {
    let date = new Date();
    let weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let currentfulldate =
        weekdays[date.getDay()] +
        " " +
        date.getDate() +
        " ," +
        date.toLocaleString("default", { month: "short" }) +
        " " +
        date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh == 0) {
        hh = 12; 
    } else if (hh == 12) {
        session = "PM";
    } else if (hh > 12) {
        hh = hh - 12;
        session = "PM"; 
    }
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    let time = hh + " : " + mm + " : " + ss + " " + session;
    datetime.innerText = time;
    fulldate.innerText = currentfulldate;
    setTimeout(function () {
        currentTime();
    }, 1000);
}
currentTime();
function fetching(term, ee) {
    let ApiKey = "8a84ea5f93efbc7c269dad9d3cf888b2";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${term}&lang=${ee}&appid=${ApiKey}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const timestamp = new Date().getTime();
            cityname.textContent = data.name;
            temp.innerHTML = `${data.main.temp}°<span>C</span>`;
            skysituation.textContent = data.weather[0].description;
            if (data.main.temp > 25) {
                skysit.style.color = "#ffff70";
                skyicon.classList.replace("fa-snowflake", "fa-sun");
            } else if (data.main.temp > 15) {
                skysit.style.color = "#7c7892";
                skyicon.classList.replace("fa-sun", "fa-cloud");
            } else {
                skysit.style.color = "#a4e6fe";
                skyicon.classList.replace("fa-cloud", "fa-snowflake");
            }
            max.textContent = `${data.main.temp_max}°`;
            min.textContent = `${data.main.feels_like}°`;
            region.textContent = data.sys.country;
            speed.textContent = `${data.wind.speed} km/h`;
            humidite.textContent = `${data.main.humidity} %`;
            presuare.textContent = `${data.main.pressure} kPa`;
            sunrise.textContent = new Date(
                data.sys.sunrise * 1000
            ).toLocaleTimeString();
            sunset.textContent = new Date(
                data.sys.sunset * 1000
            ).toLocaleTimeString();
        });
}
fetching("relizane", "en");
let c = {
    coord: { lon: 3.042, lat: 36.7525 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
    base: "stations",
    main: {
        temp: 13.9,
        feels_like: 12.99,
        temp_min: 13.9,
        temp_max: 13.9,
        pressure: 1028,
        humidity: 63,
    },
    visibility: 10000,
    wind: { speed: 1.54, deg: 80 },
    clouds: { all: 0 },
    dt: 1672514924,
    sys: {
        type: 1,
        id: 1060,
        country: "DZ",
        sunrise: 1672470009,
        sunset: 1672504861,
    },
    timezone: 3600,
    id: 2507480,
    name: "Algiers",
    cod: 200,
};
let imgarr = [
    "https://img.freepik.com/premium-photo/dusk-falling-howe-sound-mountains-generative-ai_722401-52344.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?t=st=1729837046~exp=1729840646~hmac=85d086fad5a85decafa4551deddaa78f8e8996ce0c60c963e32981100eba9dc9&w=826",
    "https://img.freepik.com/free-photo/photorealistic-tree-with-branches-trunk-outside-nature_23-2151478131.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/lac-du-pontet-alps_181624-25842.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/lac-du-pontet-alps_181624-25842.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/forest-landscape-lake-with-mountains-nature-background-wallpaper_761413-3784.jpg?w=740",
    "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787966.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/snow-covered-mountain-daytime_155999-31.jpg?t=st=1729839263~exp=1729842863~hmac=b226a47b9abe0d07e488ca3e29a338e5d110d9616ff7b22b841b2d15d3c16280&w=826",
    "https://img.freepik.com/free-photo/beautiful-ai-natural-landscape_23-2151839262.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/mount-mont-blanc-covered-snow-reflecting-water-evening-chamonix-france_181624-33408.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787970.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-sunrise-bukhansan-national-park-seoul-south-korea_335224-305.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478116.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/beautiful-volcanic-crater_23-2151739365.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/view-starry-night-sky-with-nature-mountains-landscape_23-2151614765.jpg?ga=GA1.1.2134806613.1728962710&semt=ais_hybrid",
];
searchinput.addEventListener("keyup", (e) => {
    let value = e.target.value.trim();
    if (e.keyCode === 13 && value !== "") {
        backgroundimg.src = imgarr[Math.floor(Math.random() * imgarr.length)];
        fetching(value);
    }
});
searchbtn.addEventListener("click", (e) => {
    let value = searchinput.value.trim();
    if (value !== "") {
        fetching(value);
    }
});
window.addEventListener("click", (e) => {
    searchinput === document.activeElement
        ? searchdiv.classList.add("activesearch")
        : searchdiv.classList.remove("activesearch");
});
window.addEventListener("load", (e) => {
    backgroundimg.src = imgarr[Math.floor(Math.random() * imgarr.length)];
});