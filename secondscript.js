const array = ["She's an eepy baby 😴", "She's supa smart 🤓", "She has the most beautiful voice 🕊️", "She's the prettiest girl in the whole world 😍", "She's way older than her boyfriend 😏", "She’s Sudanese 🇮🇩", "She’s 22 🥰", "She loves spicy food 🥵", "Her favorite animal is cats 🐈‍", "Dia sangat cantik 💕",  "彼女は本当に美しい ❤️‍🔥"];
const factsButton = document.getElementById("facts-button");
const funFacts = document.getElementById("fun-facts");

const funFactsFunction = () => {
    funFacts.innerText = array[Math.floor(Math.random() * array.length)];
}

factsButton.addEventListener("click", funFactsFunction);