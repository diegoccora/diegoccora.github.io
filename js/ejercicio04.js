
//inicio, condición, incremento
//for(let i=1; i<=40; i++){
//    console.log("Número: " + i);
//    alert("El número es " + i);
// }

/*
//Forma 1 de usar while
console.log("************");
let contador = 1;
while (contador <=30){
    console.log("Número: "+contador);
    contador = contador + 1;
    
}

//Forma 2 de usar while
console.log("*************");
let contador2 = 1;
while(contador2 <= 30){
    console.log("Número :" + contador2);
    contador2++;

}


//Usando el do while
console.log("**************");
let contador3 = 0;
do{
    contador3++;
    console.log("Número: " + contador3);
}
while(contador3<=30)

*/

//Ejemplo con break
console.log("*************");
let contador4 = 1;
while(contador4 <= 30){
    console.log("Número :" + contador4);
    if(contador4==20){
        break;
    }

    contador4++;
}

//Ejemplo con continue. Con eso se omite el número de la condición. En este caso es 15.
console.log("***************");
let contador5 = 0;
while(contador5<=30){
    contador5++;
    if(contador5===15){
        continue;
    }
    console.log("Número: "+contador5);
}

