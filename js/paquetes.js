const infoRegistro = JSON.parse(localStorage.getItem('registro'));

console.log(infoRegistro);

function mostrarDatosRegistro() {
     const contenedorInfo = document.getElementById('infoRegistro');
     contenedorInfo.innerHTML = "";

     const textoRegistro = document.createElement('p');
     textoRegistro.innerHTML = `
     <h1> Información de Registro </h1>
     <p>Nombre: ${infoRegistro.nombre}</p>

     `;

     
     contenedorInfo.appendChild(textoRegistro);


     };


mostrarDatosRegistro();