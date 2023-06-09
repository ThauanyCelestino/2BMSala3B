const formulario = document.querySelector("#meuForm");
const convidados = document.querySelector("#lista-convidados");
const alunos= JSON.parse(localStorage.getItem("alunos")) || [];

alunos.forEach((elemento)=>{
novoElemento(elemento)
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const aluno = evento.target.elements['aluno'];
    const qtde = evento.target.elements['qtde'];
    const convidado = alunos.find(elemento => elemento.aluno === aluno.value)
    const alunoStorage = {
        "aluno":aluno.value,
        "qtde":qtde.value
    }
    if (convidado) {
        alunoStorage.id = convidado.id;
        mudaElemento(alunoStorage);
        alunos[alunos.find.Index(elemento => elemento.id === convidado.id)] = 
        alunoStorage;

    } else{
        alunoStorage.id = alunos[alunos.length - 1] ? (aluno[alunos.length - 1]).id+1
        :0;

        novoElemento(alunoStorage);
        alunos.push(alunoStorage);
    }

    localStorage.setItem("alunos",JSON.stringify(alunos))
    aluno.value = "";
    qtde.value = "";  

});

function mudaElemento(alunoUpdate) {
    console.log(document.querySelector("[data-id='"+alunoUpdate.id+"']").
    innerHTML = alunoUpdate.qtde);
}

function novoElemento (alunoAdd){
    const novoItem = document.createElement('li');
    novoItem.classList.add ("item");
    novoItem.innerHTML =  alunoAdd.aluno;

    const numeroItem = document.createElement('span');
    numeroItem.innerHTML =  alunoAdd.qtde;
    numeroItem.dataset.id = alunoAdd.id;
    novoItem.appendChild(numeroItem);
    convidados.appendChild(novoItem);
  
}
