const introButton = document.getElementById("intro-button");
const header = document.getElementById("header");
const note = document.getElementById("note");

const changeText = () => {
    header.innerText = "Happy Birthday!";
    introButton.style.display = "none";
    note.style.display = "block";
}

introButton.addEventListener("click", changeText);

