// CADASTER

const clientForm = document.querySelector("#client-form");

    // localStorage.clear()

clientForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clientNameInput = document.querySelector("#tutorName");
    const adressInput = document.querySelector("#adress");
    const phoneInput = document.querySelector("#phone");
    const dateInput = document.querySelector("#date");

    const petNameInput = document.querySelector("#petName");
    const ageInput = document.querySelector("#age");
    const sizeInput = document.querySelector("#size");

    let clientObject = {
        clientName: clientNameInput.value,
        adress: adressInput.value,
        phone: phoneInput.value,
        date: dateInput.value,

        petName: petNameInput.value,
        age: ageInput.value,
        size: sizeInput.value,
    }

    let clientList = JSON.parse(localStorage.getItem("clientData")) || [];

    clientList.push(clientObject);

    localStorage.setItem("clientData", JSON.stringify(clientList))

    window.location.href = "clientList.html";

    // const getClient = localStorage.getItem("clientData")
    // console.log(getClient)
})