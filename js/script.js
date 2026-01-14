// Função para abrir/fechar os campos de troca e mudar a cor do botão
function toggleTroca(id) {
    const section = document.getElementById(`troca-${id}`);
    const btn = event.target;
    
    if (section.style.display === "block") {
        section.style.display = "none";
        btn.innerText = "+ Troca";
        btn.classList.remove("ativo");
    } else {
        section.style.display = "block";
        btn.innerText = "Remover Troca";
        btn.classList.add("ativo");
    }
}

function formatarDados() {
    // Função auxiliar para evitar repetição de document.getElementById
    const getV = (id) => document.getElementById(id).value.trim() || "---";
    const isVisible = (id) => document.getElementById(`troca-${id}`).style.display === "block";

    // Dados principais
    let tombamento = getV("tombamento");
    let setor = getV("setor");
    let sede = getV("sede");
    let defeito = getV("defeito");
    let diagnostico = getV("diagnostico");
    let reparo = getV("reparo");
    let total = getV("total");

    // Definição dos componentes para o loop
    const componentes = [
        { label: "Placa mãe", id: "placaMae" },
        { label: "Processador", id: "cpu" },
        { label: "Memória 1", id: "ram1" },
        { label: "Memória 2", id: "ram2" },
        { label: "Armazenamento", id: "disco" }
    ];

    let configAtualTexto = "";
    let configSugeridaTexto = "";
    let houveTroca = false;

    // Loop para construir as duas configurações simultaneamente
    componentes.forEach(comp => {
        let modAtu = getV(`${comp.id}Model`);
        let numAtu = getV(`${comp.id}Num`);
        
        // Adiciona à Configuração Atual
        configAtualTexto += `${comp.label}: ${modAtu} - (${numAtu})\n`;

        // Verifica se há troca para este componente
        if (isVisible(comp.id)) {
            houveTroca = true;
            let modNovo = getV(`${comp.id}ModelNovo`);
            let numNovo = getV(`${comp.id}NumNovo`);
            configSugeridaTexto += `${comp.label}: ${modNovo} - (${numNovo}) *NOVO*\n`;
        } else {
            // Se não há troca, a sugerida repete a atual
            configSugeridaTexto += `${comp.label}: ${modAtu} - (${numAtu})\n`;
        }
    });

    // Montagem do E-mail
    let textoFormatado = `Darkson,

Segue o diagnóstico da máquina enviada para a manutenção:

${tombamento} - ${setor} - ${sede}

Defeito: ${defeito}
Diagnóstico: ${diagnostico}
Reparo: ${reparo}
Status: Aguardando Autorização de Conclusão.

Configuração atual: 
${configAtualTexto.trim()}`;

    // Se houve troca, adiciona a seção sugerida
    if (houveTroca) {
        textoFormatado += `\n\nConfiguração sugerida (com troca de componentes):
${configSugeridaTexto.trim()}`;
    }

    textoFormatado += `

Taxa de serviço: R$50,00  
Total: R$${total}

Att,`;

    // Saída dos dados
    document.getElementById("resultado").innerText = textoFormatado;
    document.getElementById("resultado-container").style.display = "block";

    // Copiar para área de transferência
    navigator.clipboard.writeText(textoFormatado).then(() => {
        mostrarToast("Texto copiado para a área de transferência!");
    });
}

// Função para exibir toast
function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.style.display = "block"; // Garante visibilidade

    // Se estiver usando classes CSS para animação:
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
        if (!toast.classList.contains("show")) toast.style.display = "none";
    }, 3000);
}
