//localStorage.clear()

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalBtn = document.querySelector("#close");

document.querySelectorAll(".cart").forEach((element) => {
    element.addEventListener("click", (e) => {
        const product = e.target.closest(".product");
        const nameLabel = product.querySelector(".title").textContent;
        const priceLabel = product.querySelector(".value").textContent;
        const sizeLabel = product.querySelector(".size").textContent;

        const productObject = {
            name: nameLabel,
            price: priceLabel,
            size: sizeLabel
        }

        let productList = JSON.parse(localStorage.getItem("cart")) || [];

        productList.push(productObject)

        localStorage.setItem("cart", JSON.stringify(productList))

        openModal(productObject.name)
    })
})

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

function openModal(uniqueName) {
    let productList = JSON.parse(localStorage.getItem("cart")) || [];

    let product = productList.find((element) => element.name === uniqueName);

    if (product) {
        toggleModal()

        document.querySelector(".modal-body-product").innerHTML = `
            <h2>Produto</h2>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.size}</p>
        `
    }
}

fade.addEventListener("click", () => toggleModal())

closeModalBtn.addEventListener("click", () => toggleModal())