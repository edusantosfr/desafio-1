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

//localStorage.clear()

const divCards = document.querySelector(".cards-container");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalBtn = document.querySelector("#close");

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

window.onload = function loadItems() {
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
        cardName.textContent = "Pet: "+element.petName
        cardData.appendChild(cardName)

        const cardDate = document.createElement("p")
        cardDate.textContent = "Atendimento: "+element.date
        cardData.appendChild(cardDate)

        // MODAL

        card.dataset.uniqueName = element.petName

        card.addEventListener("click", () => openModal(element.petName))

        divCards.appendChild(card)
    })
}

function openModal(uniqueName) {
    let clientList = JSON.parse(localStorage.getItem("clientData")) || [];
    
    let client = clientList.find(element => element.petName === uniqueName);
    
    if (client) {
        toggleModal()

        document.querySelector(".modalPetName").innerHTML = `
            <h2>${client.petName}</h2>
        `
        document.querySelector(".modal-body-tutor").innerHTML = `
            <h2>Tutor</h2>
            <h3>Nome do Tutor: ${client.clientName}</h3>
            <p>Endereço: ${client.adress}</p>
            <p>Telefone: ${client.phone}</p>
            <p>Data: ${client.date}</p>
        `
        document.querySelector(".modal-body-pet").innerHTML = `
            <h2>Pet</h2>
            <p>Idade: ${client.age} ano(s)</p>
            <p>Porte: ${client.size}</p>
        `
    }
}

fade.addEventListener("click", () => toggleModal())

closeModalBtn.addEventListener("click", () => toggleModal())