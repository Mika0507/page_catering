
    // window.onload = function () {
    //     // Variables
    //     const IMAGENES = [
    //         $imagen.src = 'assets/img/foto1-pase1.jpg',
    //         $imagen.src = 'assets/img/foto2-pase2.jpg',
    //         $imagen.src = 'assets/img/foto3-pase3.jpg',
    //     ];
    // const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    // let posicionActual = 0;
    // let $botonRetroceder = document.querySelector('#retroceder');
    // let $botonAvanzar = document.querySelector('#avanzar');
    // let $imagen = document.querySelector('#imagen');
    // let intervalo;
    //    // Funciones

    //         /**
    //          * Funcion que cambia la foto en la siguiente posicion
    //          */
    //          function pasarFoto() {
    //             if(posicionActual >= IMAGENES.length - 1) {
    //                 posicionActual = 0;
    //             } else {
    //                 posicionActual++;
    //             }
    //             renderizarImagen();
    //         }

    //         /**
    //          * Funcion que cambia la foto en la anterior posicion
    //          */
    //         function retrocederFoto() {
    //             if(posicionActual <= 0) {
    //                 posicionActual = IMAGENES.length - 1;
    //             } else {
    //                 posicionActual--;
    //             }
    //             renderizarImagen();
    //         }
    //     } 
window.onload = function(){
  
  let FOTOS = [`foto1-pase1.jpg`, `foto2-pase2.jpg`, `foto3-pase3.jpg`];

  let DESCRIPCION = [
    `Foto 1`,
    `Foto 2`,
    `Foto 3`
  ];

  let posicionActual = 0;
  let descripcionActual = 0;

  let botonRetroceder = document.getElementById("retroceder");
  let botonAvanzar = document.getElementById("avanzar");

  function pasarFoto(){
    if((posicionActual >= FOTOS.length -1) && (descripcionActual >= DESCRIPCION.length -1)){
      posicionActual = 0;
      descripcionActual = 0;
    }else{
      posicionActual ++;
      descripcionActual ++;
    }

    renderizarImagen();

  }

  function retrocederFoto(){
    if((posicionActual <= 0) && (descripcionActual <= 0)){
      posicionActual = FOTOS.length -1;
      descripcionActual = DESCRIPCION.length -1;
    }else{
      posicionActual --;
      descripcionActual --;
    }
    
    renderizarImagen();

  }

  function renderizarImagen(){
    document.querySelector(".imagenes").innerHTML = `<img src="assets/img/${FOTOS[posicionActual]}" alt="${DESCRIPCION[descripcionActual]}">`;
  }

  botonAvanzar.addEventListener(`click`, pasarFoto);
  botonRetroceder.addEventListener(`click`, retrocederFoto);

  renderizarImagen();

}