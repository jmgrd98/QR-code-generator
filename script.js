// Declarando as variáveis

const wrapper = document.querySelector("aside")
const qrInput = wrapper.querySelector(".form input")
const generateBtn = wrapper.querySelector(".form button")
const downloadBtn = wrapper.querySelector(".form button")
const qrCode = document.querySelector(".qr-code")
const qrImg = document.querySelector("#qr-code")

// Função que chama a API ao clicar
// no botão e insere o QR Code na tela
// com o valor do link inserido.

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

// Botão de download

downloadBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    let downloadLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    params = {
        data: `${qrValue}`,
        size: '150x150',
        margin: 0,
        download: 1
    };
    window.location.href = downloadLink + params
})

