function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;

    // Ocultar las etiquetas que quieres esconder
    hidePlaceholder();
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;

    // Ocultar las etiquetas que quieres esconder
    hidePlaceholder();
}

function hidePlaceholder() {
    // Ocultar las etiquetas
    let imgPlaceholder = document.querySelector('.right-panel img');
    let msg1Placeholder = document.querySelector('.right-panel p:first-of-type');
    let msg2Placeholder = document.querySelector('.right-panel p:last-of-type');

    imgPlaceholder.style.display = 'none';
    msg1Placeholder.style.display = 'none';
    msg2Placeholder.style.display = 'none';
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

