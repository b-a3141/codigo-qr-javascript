const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

// new QRCode(contenedorQR, "https://www.instagram.com/code8bits/")

const QR = new QRCode(contenedorQR);

 formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    contenedorQR.innerHTML="";
    new QRCode(contenedorQR, document.getElementById('link').value )
});

