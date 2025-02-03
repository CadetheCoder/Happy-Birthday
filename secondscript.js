const array = ["She's an eepy baby 😴", "She's supa smart 🤓", "She has the most beautiful voice 🕊️", "She's the prettiest girl in the whole world 😍", "Shes way older than her boyfriend 😏", "She’s Sudanese 🇮🇩", "She’s 22 🥰", "She loves spicy food 🥵", "Her favorite animal is cats 🐈‍"];
const factsButton = document.getElementById("facts-button");
const funFacts = document.getElementById("fun-facts");

const funFactsFunction = () => {
    funFacts.innerText = array[Math.floor(Math.random() * array.length)];
}

factsButton.addEventListener("click", funFactsFunction);