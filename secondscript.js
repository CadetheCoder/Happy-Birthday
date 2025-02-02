const array = ["She's Sundanese", "She's 22"];
const factsButton = document.getElementById("facts-button");
const funFacts = document.getElementById("fun-facts");

const funFactsFunction = () => {
    funFacts.innerText = array[Math.floor(Math.random() * array.length)];
}

factsButton.addEventListener("click", funFactsFunction);