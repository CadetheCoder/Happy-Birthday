const introButton = document.getElementById("intro-button");
const header = document.getElementById("header");
const note = document.getElementById("note");

const changeText = () => {
    note.innerText = `Congratulations baby, you're turning 22 woohoo!! You're the most amazing girlfriend that anyone could ever ask for. Words could not even begin to describe how beautiful your love is. You’re kind, you’re caring, you're sweet. You're everything I’ve ever wanted and even more. Everyday your beauty grows and I become more in love with you than the last. I’m so proud of everything you’ve done. You're such an amazing woman it leaves me grasping for words. Happy Birthday baby, you deserve the world!`
    header.innerText = "Happy Birthday!"
    introButton.style.display = "none"
}

introButton.addEventListener("click", changeText)
