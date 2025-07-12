// zodiac.js

export const facts = {
    Aries: [...],
    Taurus: [...],
    // ... other signs
    Pisces: [...]
};

export function getRandomFact(sign) {
    let signFacts = facts[sign];
    if (signFacts) {
        return signFacts[Math.floor(Math.random() * signFacts.length)];
    } else {
        return "No facts available for the specified sign.";
    }
}

export function getZodiacSign(month, day) {
    if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) return "Capricorn";
    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) return "Aquarius";
    if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) return "Pisces";
    if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) return "Aries";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return "Taurus";
    if ((month === 4 && day >= 21) || (month === 5 && day <= 22)) return "Gemini";
    if ((month === 5 && day >= 23) || (month === 6 && day <= 22)) return "Cancer";
    if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) return "Leo";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Virgo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 21)) return "Libra";
    if ((month === 9 && day >= 22) || (month === 10 && day <= 21)) return "Scorpio";
    if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) return "Sagittarius";
    return null;
}
