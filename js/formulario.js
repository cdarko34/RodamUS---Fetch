class Registro {
    empezarRegistro(nombre, telefono, zip, email, confirmarCorreo){
        const infoRegistro = {
            nombre : nombre,
            telefono : telefono,
            zip : zip,
            email : email,
            confirmarCorreo : confirmarCorreo,
        }

        this.guardarRegistroEnLocalStorage(infoRegistro);

        location.href = 'views/paquetes.html';
    }

    guardarRegistroEnLocalStorage(infoRegistro) {
        let registro;

        registro = this.obtenerRegistroLocalStorage();
        
        registro.push(infoRegistro);

        localStorage.setItem('registro', JSON.stringify(registro));
    
    }

    obtenerRegistroLocalStorage(){
        let registroLocalStorage;

        if (localStorage.getItem('registro')===null) {
            
            registroLocalStorage = [];

        }else {
            
            registroLocalStorage = JSON.parse(localStorage.getItem('registro'));

        }
        return registroLocalStorage;
    }


}


const registro = new Registro();


const btnFormulario = document.querySelector('#btn-formulario');


cargarEventos();
function cargarEventos() {
    btnFormulario.addEventListener ('click', verificar);
}

function verificar(e) {
    e.preventDefault();

    // const contenedorDeVerificacion = document.getElementById('contenedor-verificacion');
    
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let zip = document.getElementById('zip').value;
    let email = document.getElementById('email').value;
    let confirmarCorreo = document.getElementById('confirmar_correo').value;


    if (nombre === '' || telefono === '' || zip === '' || email === '' || confirmarCorreo === '') {

        Swal.fire(
            'Opps',
            'Ingresa todos los datos requeridos',
            'error'
          )
        
    } else {
        registro.empezarRegistro(nombre, telefono, zip, email, confirmarCorreo);
    }


}

