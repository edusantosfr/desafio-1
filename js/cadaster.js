const clientForm = document.querySelector("#client-form");
const submitFormBtn = document.querySelector(".login-button");
const formInput = document.querySelectorAll("input[required]");
const formRadio = document.querySelectorAll("input[type='radio'][name='pet']");

let verifyInput = () => {
    const inputRadio = [...formRadio].some(input => input.checked);
    const input = [...formInput].every(input => input.value !== "");

    submitFormBtn.disabled = !(inputRadio && input);
}
formInput.forEach(input => input.addEventListener("input", verifyInput));
formRadio.forEach(input => input.addEventListener("change", verifyInput));

//localStorage.clear()

clientForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clientNameInput = document.querySelector("#tutorName");
    const adressInput = document.querySelector("#adress");
    const phoneInput = document.querySelector("#phone");
    const dateInput = document.querySelector("#date");

    const petNameInput = document.querySelector("#petName");
    const ageInput = document.querySelector("#age");
    const sizeInput = document.querySelector("#size");
    const petRadio = document.querySelector('input[name="pet"]:checked');

    let clientObject = {
        clientName: clientNameInput.value,
        adress: adressInput.value,
        phone: phoneInput.value,
        date: dateInput.value,

        petName: petNameInput.value,
        age: ageInput.value,
        size: sizeInput.value,
        pet: petRadio.value
    }

    let clientList = JSON.parse(localStorage.getItem("clientData")) || [];

    clientList.push(clientObject)

    localStorage.setItem("clientData", JSON.stringify(clientList))

    window.location.href = "clientList.html";
})