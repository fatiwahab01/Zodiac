import { getZodiacSign, getRandomFact } from './script.js';

document.getElementById("button").addEventListener("click", () => {
    let dateInput = document.getElementById("date-picker").value;
    let dateObject = new Date(dateInput);
    let month = dateObject.getMonth();
    let day = dateObject.getDate();

    let signText = document.getElementById("your-sign");
    let factText = document.getElementById("fact");
    let imageElement = document.getElementById("zodiac-img");

    const sign = getZodiacSign(month, day);
    const fact = getRandomFact(sign);

    signText.textContent = sign;
    factText.textContent = fact;
    imageElement.src = `images/${sign.toLowerCase()}.png`;
    imageElement.style.display = "block";
});
