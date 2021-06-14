// endpoint para leer la hora (alojado en la misma maquina)
const horaEndpoint = "/hora" 

// donde pintarla
const contenedorFecha = "#horaWrapper"

// obtener la fecha desde WS (primera vez)
let getFechaFromWS = async (dest) => {
    fetch(horaEndpoint).then(response => {
        if(response.ok)
          response.json().then( data => {
            console.log(`Obtenida hora de ${horaEndpoint} = ${data.fecha}`)
            document.querySelector(dest).innerHTML= new Date(data.fecha)
        })
        else
          console.log('Respuesta de red OK pero respuesta HTTP no OK');
      })
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
};

// actualizar la fecha
const updateFecha = (dest=contenedorFecha) => {

    let fechaActual;
    const el = document.querySelector(dest);

    console.log("Actualizando fecha...");
    fechaActual = new Date(el.innerHTML);
    fechaActual.setSeconds(fechaActual.getSeconds() + 1);
    el.innerHTML = fechaActual;
};

// cuando el DOM esté listo, leer la fecha...
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    getFechaFromWS(contenedorFecha);
    let myVar = setInterval(updateFecha, 1000);
});