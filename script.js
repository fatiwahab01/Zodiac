
let fact = document.getElementById("button");
let sign = document.getElementById("your-sign");

const facts = {
    Aries: [
        "Energetic: You bring so much energy and enthusiasm to everything you do!",
        "Courageous: I admire your bravery and willingness to take on challenges head-on",
        "Dynamic: You have such a dynamic personality that lights up any room you're in."
    ],
    Taurus: [
        "Reliable: You're incredibly reliable and always there when I need you.",
        "Patient: Your patience is truly admirable, especially in difficult situations.",
        "Loyal: Your loyalty to your friends and family is unmatched."
    ],
    Gemini: [
        "Versatile: I'm always amazed by how versatile and adaptable you are in different situations.",
        "Intelligent: Your intelligence shines through in every conversation we have.",
        "Witty: Your wit and sense of humor always brighten my day.",

    ],
    Cancer:[
        "Nurturing: You have such a nurturing and caring nature that makes everyone feel loved.",
        "Intuitive: Your intuition is incredible; you always seem to know exactly what others need.",
        "Empathetic: Your empathy and compassion make you such a wonderful friend to have.",
    ],
    Leo: [
        "Confident: Your confidence is inspiring, and it's one of the things I admire most about you.",
        "Generous: Your generosity knows no bounds, and it's truly heartwarming to see.",
        "Charismatic: Your charisma draws people to you, and it's no wonder you have such a wide circle of friends.",
    ],
    Virgo:[
        "Analytical: Your analytical mind is impressive, and it helps you find solutions to even the most complex problems.",
        "Organized: Your organizational skills are top-notch, and it's clear how much effort you put into everything you do.",
        "Reliable: I always know I can count on you to get things done with precision and reliability.",
    ],
    Libra:[
        "Diplomatic: Your diplomacy and ability to see both sides of a situation are invaluable.",
        "Charming: Your charm and grace make you such a pleasure to be around",
        "Fair-minded: Your fairness and sense of justice make you a trusted confidant and mediator.",
    ],
    Scorpio: [
        "Passionate: Your passion for life and your interests is truly inspiring.",
        "Loyal: Your loyalty knows no bounds, and I'm grateful to have you in my life.",
        "Determined: Your determination to succeed in everything you do is admirable and inspiring.",
    ],
    Sagittarius:[
        "Adventurous: Your adventurous spirit is contagious, and I love going on new experiences with you.",
        "Optimistic: Your optimism is uplifting, and it helps me see the bright side even in tough times.",
        "Honest: Your honesty is refreshing, and I appreciate that I can always trust your word.",
    ],
    Capricorn:[
        "Ambitious: Your ambition and drive to succeed inspire me to push myself harder.",
        "Responsible: Your sense of responsibility and reliability make you someone I can always depend on.",
        "Disciplined: Your discipline in achieving your goals is admirable and sets a great example for others.",
    ],
    Aquarius:[
        "Innovative: Your innovative ideas and unique perspective always bring something fresh to the table.",
        "Independent: Your independence and self-reliance are truly admirable.",
        "Humanitarian: Your commitment to making the world a better place through your activism is inspiring.",
    ],
    Pisces:[
        "Compassionate: Your compassion for others is one of your most beautiful qualities.",
        "Creative: Your creativity knows no bounds, and I'm constantly amazed by your artistic talents.",
        "Intuitive: Your intuition is spot-on, and it's like you have a sixth sense about people and situations.",
    ],
}

function getRandomFact(sign) {
    let signFacts = facts[sign];
    if (signFacts) {
        return signFacts[Math.floor(Math.random() * signFacts.length)];
    } else {
        return "No facts available for the specified sign.";
    }
}

function getFact() {
    let getDate = document.getElementById("date-picker").value;
    let dateObject = new Date(getDate);
    let month = dateObject.getMonth()
    let date = dateObject.getDate()
    let sign = document.getElementById("your-sign");
    let zodiacFact = document.getElementById("fact");
    let imageElement = document.getElementById("zodiac-img");

    console.log("Button Clicked");
    console.log(month);
    console.log(date)
    console.log("Date is " + getDate);

    if ((month === 11 && date >= 22) || (month === 0 && date <=19)){
        console.log("Capricorn")
        sign.textContent = "Capricorn"
        let randomFact =getRandomFact( "Capricorn");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Capricorn.png";
        imageElement.style.display = "block";

    } else if ((month === 0 && date >= 20) || (month === 1 && date <= 18)) {
        console.log("Aquarius");
        sign.textContent= "Aquarius";
        let randomFact =getRandomFact( "Aquarius");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Aquarius.png";
        imageElement.style.display = "block";
    } else if ((month === 2 && date >= 21) || (month === 3 && date <= 19)) {
        console.log("Pisces");
        sign.textContent= "Pisces";
        let randomFact =getRandomFact( "Pisces");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Pisces.png";
        imageElement.style.display = "block";
    } else if ((month === 2 && date >= 20) || (month === 3 && date <= 20)) {
        console.log("Aries");
        sign.textContent= "Aries";
        let randomFact =getRandomFact( "Aries");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Aries.png";
        imageElement.style.display = "block";
    } else if ((month === 3 && date >= 21) || (month === 4 && date <= 20)) {
        console.log("Taurus");
        sign.textContent= "Taurus";
        let randomFact =getRandomFact( "Taurus");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Taurus.png";
        imageElement.style.display = "block";
    } else if ((month === 4 && date >= 21) || (month === 5 && date <= 22)) {
        console.log("Gemini");
        sign.textContent= "Gemini";
        let randomFact =getRandomFact( "Gemini");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Gemini.png";
        imageElement.style.display = "block";
    } else if ((month === 5 && date >= 23) || (month === 6 && date <= 22)) {
        console.log("Cancer");
        sign.textContent= "Cancer";
        let randomFact =getRandomFact( "Cancer");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Cancer.png";
        imageElement.style.display = "block";
    } else if ((month === 6 && date >= 23) || (month === 7 && date <= 22)) {
        console.log("Leo");
        sign.textContent= "Leo";
        let randomFact =getRandomFact( "Leo");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Leo.png";
        imageElement.style.display = "block";
    } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
        console.log("Virgo");
        sign.textContent= "Virgo";
        let randomFact =getRandomFact( "Virgo");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Virgo.png";
        imageElement.style.display = "block";
    } else if ((month === 8 && date >= 23) || (month === 9 && date <= 21)) {
        console.log("Libra");
        sign.textContent= "Libra";
        let randomFact =getRandomFact( "Libra");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/libra.png";
        imageElement.style.display = "block";
    } else if ((month === 9 && date >= 22) || (month === 10 && date <= 21)) {
        console.log("Scorpio");
        sign.textContent= "Scorpio";
        let randomFact =getRandomFact( "Scorpio");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Scorpio.png";
        imageElement.style.display = "block";
    } else {
        console.log("Sagittarius");
        sign.textContent= "Sagittarius";
        let randomFact =getRandomFact( "Sagittarius");
        console.log(randomFact)
        zodiacFact.textContent = randomFact;
        imageElement.src = "images/Sagittarius.png";
        imageElement.style.display = "block";
    }

}