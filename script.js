const introButton = document.getElementById("intro-button");
const header = document.getElementById("header");
const note = document.getElementById("note");

const changeText = () => {
    note.innerText = "I love you"
    header.innerText = "Happy Birthday!"
    introButton.style.display = "none"
}

introButton.addEventListener("click", changeText)

