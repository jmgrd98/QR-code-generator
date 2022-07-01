const wrapper = document.querySelector("main")
const qrInput = wrapper.querySelector(".form input")
const generateBtn = wrapper.querySelector(".form button")
const qrCode = document.querySelector(".qr-code")
const qrImg = document.querySelector("#qr-code")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if(!qrValue) return;
    generateBtn.innerText = "Gerando QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        qrCode.classList.add("active");
        generateBtn.innerText = "Pronto!"
    })
    qrCode.classList.add("active");
})