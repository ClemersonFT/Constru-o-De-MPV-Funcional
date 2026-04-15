const abrir = document.getElementById("abrirFormulario");
const formulario = document.getElementById("formulario");
const fechar = document.getElementById("fecharFormulario");
const salvar = document.getElementById("salvarTarefa");

const containerTarefas = document.getElementById("containerTarefas");

const tituloInput = document.getElementById("tituloTarefa");
const descricaoInput = document.getElementById("descricaoTarefa");

abrir.addEventListener("click", () => {
    formulario.classList.remove("oculto");
});


fechar.addEventListener("click", () => {
    formulario.classList.add("oculto");
});

salvar.addEventListener("click", () => {
    const titulo = tituloInput.value;
    const descricao = descricaoInput.value;

    if (!titulo) return;

    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    tarefa.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    `;

    containerTarefas.appendChild(tarefa);

    tituloInput.value = "";
    descricaoInput.value = "";

    formulario.classList.add("oculto");
});