const formulario = document.querySelector("#meuForm");
const convidados = document.querySelector("#lista-convidados");
const alunos= JSON.parse(localStorage.getItem("alunos")) || [];

alunos.forEach((elemento)=>{
console.log(elmento.aluno, elemento.qtde)
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const aluno = evento.target.elements['aluno'];
    const qtde = evento.target.elements['qtde'];
    novoElemento(aluno.value, qtde.value);
    aluno.value = "";
    qtde.value = "";  

});

function novoElemento (aluno, qtde){
    const novoItem = document.createElement('li');
    novoItem.classList.add ("item");
    novoItem.innerHTML =  aluno;

    const numeroItem = document.createElement('span');
    numeroItem.innerHTML =  qtde;

    novoItem.appendChild(numeroItem);
    convidados.appendChild(novoItem);

    const alunoStorage = {
        "aluno":aluno,
        "qtde":qtde
    }
    alunos.push(alunoStorage)
    localStorage.setItem("alunos",JSON.stringify(alunos))
}

