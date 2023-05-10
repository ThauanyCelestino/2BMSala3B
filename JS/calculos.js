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


const btnSomar = document.querySelector("#btnSomar");

btnSomar.addEventListener("click", () =>{
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    var soma = n1+n2;
    document.querySelector("#resultado").value = soma;
});

// function somar (p1, p2) {
//     var soma = p1 + p2;
//     document.querySelector("#resultado").value = soma;

// }

document.querySelector("#btnImc").addEventListener("click", function
 (){
     var n1 = parseFloat(document.querySelector("#pesoI").value);
     var n2 = parseFloat(document.querySelector("#alturaI").value);
     var calcular = n1/(n2*n2);
     document.querySelector("#result").value = calcular;
 });