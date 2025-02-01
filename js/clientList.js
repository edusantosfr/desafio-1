const searchBar = document.querySelector(".search-bar");

const getSearchedTodos = (search) => {
    const all = document.querySelectorAll(".card");

    all.forEach((card) => {
        const petName = card.querySelector("h2").innerText.toLowerCase();

        card.style.display = "flex";

        console.log(petName);

        if (!petName.includes(search)) {
            card.style.display = "none";
        }
    });
};

searchBar.addEventListener("keyup", (e) => {
    const search = e.target.value;

    getSearchedTodos(search);
});


const divCards = document.querySelector(".cards-container");

window.onload = function carregarItens() {
    let clientList = JSON.parse(localStorage.getItem("clientData")) || [];

    clientList.forEach((element) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const cardImage = document.createElement("div")
        cardImage.classList.add("image")
        card.appendChild(cardImage)

        const image = document.createElement("img")
        image.src = "./css/assets/clients/dog.png"
        image.alt = ""
        image.async = true
        cardImage.appendChild(image)

        const cardData = document.createElement("div")
        cardData.classList.add("data")
        card.appendChild(cardData)

        const cardName = document.createElement("h2")
        cardName.textContent = element.petName
        cardData.appendChild(cardName)

        const cardDate = document.createElement("p")
        cardDate.textContent = element.date
        cardData.appendChild(cardDate)

        divCards.appendChild(card)
    })
}

// MODAL

const cardButton = document.querySelectorAll(".card");
const closeModalBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

cardButton.forEach((element) => {
    element.addEventListener("click", () => toggleModal())
})

fade.addEventListener("click", () => toggleModal())

closeModalBtn.addEventListener("click", () => toggleModal())