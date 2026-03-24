const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8){
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16)+
            0.3965 * temp *Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

const temp= 25;
const wind= 5;

const windChill =calculateWindChill( temp,wind);

document.querySelector("#windchill").textContent = windChill ;