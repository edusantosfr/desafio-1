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