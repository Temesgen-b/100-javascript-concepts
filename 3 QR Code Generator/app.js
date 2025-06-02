const qrContainer = document.getElementById('qrcode');
const generateBtn = document.getElementById('generate');



generateBtn.addEventListener('click', () => {
    const text = document.getElementById('text').value.trim();
    if (!text) {
        alert('Please enter some text or URL to generate QR code.');
        return;
    }

    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorLight: '#000000',
        colorDark: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click()
        console.log(e.key); 
    }
})