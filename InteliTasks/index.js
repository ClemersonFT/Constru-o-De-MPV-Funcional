const abrir = document.getElementById("abrirFormulario");
const formulario = document.getElementById("formulario");
const fechar = document.getElementById("fecharFormulario");
const salvar = document.getElementById("salvarTarefa");

const containerTarefas = document.getElementById("containerTarefas");

const tituloInput = document.getElementById("tituloTarefa");
const prazoInput = document.getElementById("prazoTarefa");
const descricaoInput = document.getElementById("descricaoTarefa");

const dados = localStorage.getItem("tarefas");


let tarefas = [];

const dadosSalvos = localStorage.getItem("tarefas");

if (dadosSalvos) {
    tarefas = JSON.parse(dadosSalvos);
    renderTarefas();
}

abrir.addEventListener("click", () => {
    formulario.classList.remove("oculto");
});

fechar.addEventListener("click", () => {
    formulario.classList.add("oculto");
});

salvar.addEventListener("click", () => {
    const titulo = tituloInput.value.trim();
    const prazo = prazoInput.value;
    const descricao = descricaoInput.value.trim();
    

    if (!titulo || !prazo) return;

    tarefas.push({
        titulo,
        prazo,
        descricao
        
    });

    salvarNoStorage();

    renderTarefas();

    tituloInput.value = "";
    prazoInput.value = "";
    descricaoInput.value = "";
    

    formulario.classList.add("oculto");
});

function salvarNoStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderTarefas() {
    containerTarefas.innerHTML = "";

    tarefas.sort((a, b) => new Date(a.prazo) - new Date(b.prazo));

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div");
        div.classList.add("tarefa");
    
        const diasRestantes = calcularDias(tarefa.prazo);
    
        if (diasRestantes < 0 || diasRestantes <= 2) {
            div.classList.add("vermelho");
        } else if (diasRestantes <= 7) {
            div.classList.add("amarelo");
        } else {
            div.classList.add("verde");
        }
    
        div.innerHTML = `
            <button class="excluir">
            <img src="img/recycle-bin.png" alt="Excluir">
            </button>
    
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
    
            <small>Prazo: ${formatarData(tarefa.prazo)}</small>
            <small>Faltam ${diasRestantes} dias</small>
        `;
    
        const excluir = div.querySelector(".excluir");
    
        excluir.addEventListener("click", () => {
            tarefas.splice(index, 1);
            salvarNoStorage();
            renderTarefas();
        });
    
        containerTarefas.appendChild(div);
    });
}


function calcularDias(prazo) {
    const hoje = new Date();
    const dataPrazo = new Date(prazo + "T00:00:00");

    const diff = dataPrazo - hoje;

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatarData(data) {
    const d = new Date(data + "T00:00:00");

    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const ano = d.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

