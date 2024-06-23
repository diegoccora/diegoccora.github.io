
//Esto solo se ejecuta una vez
//setTimeout()

setTimeout(mostrarDatos,5000);
function mostrarDatos(){
    let date=new Date();
    console.log("Hora Actual: "+date.toLocaleTimeString());
    console.log("Ejemplo");
}

//Esto se ejecuta de manera ilimitada
//setInterval()

setInterval(mostrarImg,1000);


function mostrarImg(){
    let date=new Date();
    console.log("Hora Actual: "+date.toLocaleTimeString());
    console.log("Ejemplo 02");
}