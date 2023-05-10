// document.querySelector("#btnSomar").addEventListener("click",somarValores);

// function somarValores(){
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
//     var soma = n1+n2;
//     document.querySelector("#resultado").value = soma;
// }


// document.querySelector("#btnSomar").addEventListener("click", function
// (){
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
//     var soma = n1+n2;
//     document.querySelector("#resultado").value = soma;
// });


const bSomar = document.querySelector("#btnSomar");

bSomar.addEventListener("click", () =>{
    var p1 = parseFloat(document.querySelector("#numero1").value);
    var p2 = parseFloat(document.querySelector("#numero2").value);
    somar(p1, p2); 
});

 function somar (p1, p2) {
     var soma = p1 + p2;
     document.querySelector("#resultado").value = soma
 }


document.querySelector("#btnImc").addEventListener("click", function
 (){
     var peso = parseFloat(document.querySelector("#pesoI").value);
     var altura = parseFloat(document.querySelector("#alturaI").value);
     var calcular = peso/ (altura*altura); 
     document.querySelector("#result").value = calcular;
 });

 const bLimpar = document.querySelector("#btnLimpar");

 bLimpar.addEventListener("click", () =>{
    document.querySelector("#pesoI").value = '';
    document.querySelector("#alturaI").value = '';
    document.querySelector("#result").value = '';
    document.querySelector("#pesoI").focus();
 });




 