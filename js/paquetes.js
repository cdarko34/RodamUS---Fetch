

function crearContador() {
    const contenedorDeContador = document.querySelector('contenedor-contador');
    contenedorDeContador.innerHTML = `
    <button class="counter-minus">-</button>
    <p class="counter-input">0</p>
    <button class="counter-plus">+</button>    
    `;

    let counterMinusBoton = document.querySelector('.counter-minus');
    let counterInput = document.querySelector('.counter-input');
    let counterPlusBoton = document.querySelector('.counter-plus');
    let count = 0;
    
    actualizarInput();

    counterPlusBoton.addEventListener("click",()=>{
        count++;
        actualizarInput();
    });

    counterMinusBoton.addEventListener("click",()=>{
        count--;
        updateDisplay();
    });

    function actualizarInput(){
        counterInput.innerHTML = count;
    };
    
}


//Estructura para los paquetes del evento
class paquete {
    constructor(titulo, caracteristicas, precio){
        this.titulo = titulo;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
};


//Nuevos paquetes
const paquete1 = new paquete('Golden Pass', 'Entrada al evento, hospedaje en el destino, comida, bebidas, playera, vaso y parche conmemorativos.', '3000');
const paquete2 = new paquete('Silver Pass', 'Entrada al evento, hospedaje en el destino, comida y bebidas', '2000');


//Array de paquetes
const paquetes = [];

//Se agregan los paquetes nuevos al array
paquetes.push(paquete1);
paquetes.push(paquete2);

  
  
  
  //Crea un div en el que se muestran las características de los paquetes junto con el botón seleccionar
  function mostrarPaquetes(paquetes) {

    
      const contenedorDePaquetes = document.getElementById('contenedor-de-paquetes');
      contenedorDePaquetes.innerHTML = "";
  
      paquetes.forEach(paquete => {
          const divPaquete = document.createElement("div"); // <div></div>
          divPaquete.classList.add('paquete');// <div class='paquete'></div>
          divPaquete.innerHTML = `
          <h3>${paquete.titulo}</h3>
          <p>${paquete.caracteristicas}</p>
          <p>$ ${paquete.precio}</p>
            <div class="contenedor-contador"></div>
          `;

          
  
       // ==========        

        const contador = crearContador(paquete);

        divPaquete.appendChild(contador);

       contenedorDePaquetes.append(divPaquete);

      });    
  }
  
  
  //Publica la sección de paquetes para el evento
  mostrarPaquetes(paquetes);