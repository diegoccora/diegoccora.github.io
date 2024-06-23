/*let img=document.getElementById("imgPrueba");
console.log(img.getAttribute("src"));
img.setAttribute("width","300px");
img.setAttribute("heigth","300px");

function disminuir(){
    img.setAttribute("width","50px");
    img.setAttribute("width","50px");
}

function aumentar(){
    img.setAttribute("width","500px");
    img.setAttribute("height","500px");
}

*/


let altoInicial = 100;
let anchoInicial = 100;
let a_o_r_dim = 30;


let btnMin=document.getElementById("btnMin");
let btnMax=document.getElementById("btnMax");
let btnOtro=document.getElementById("btnOtro");
let imgPrueba=document.getElementById("imgPrueba");



btnMin.addEventListener("click",function(){
    let ancho = imgPrueba.getAttribute("width");
    let alto = imgPrueba.getAttribute("height");

    let anchosinPX = parseInt(ancho.replace("px",""));
    let altosinPX = parseInt(alto.replace("px",""));
    console.log("anchosinPX: "+anchosinPX);
    console.log("altosinPX: "+altosinPX);


    imgPrueba.setAttribute("width", 
        fn_formatMedidaPx(anchosinPX - a_o_r_dim));
    imgPrueba.setAttribute("height",
        fn_formatMedidaPx(altosinPX - a_o_r_dim));

});



btnMax.addEventListener("click",function(){
    let ancho = imgPrueba.getAttribute("width");
    let alto = imgPrueba.getAttribute("height");

    let anchosinPX = parseInt(ancho.replace("px",""));
    let altosinPX = parseInt(alto.replace("px",""));
    console.log("anchosinPX: "+anchosinPX);
    console.log("altosinPX: "+altosinPX);


    imgPrueba.setAttribute("width", 
        fn_formatMedidaPx(anchosinPX + a_o_r_dim));
    imgPrueba.setAttribute("height",
        fn_formatMedidaPx(altosinPX + a_o_r_dim));

});

function fn_formatMedidaPx(dimension){
    return dimension + "px";
}




btnOtro.addEventListener("click", fn_dimension_inicial);
function fn_dimension_inicial(){//Método para la medida por defecto
        imgPrueba.setAttribute("width",fn_formatMedidaPx(anchoInicial));
        imgPrueba.setAttribute("height",fn_formatMedidaPx(altoInicial));

}




