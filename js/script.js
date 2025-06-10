function formatarDados() {
    let tombamento = document.getElementById("tombamento").value;
    let setor = document.getElementById("setor").value;
    let sede = document.getElementById("sede").value;
    let defeito = document.getElementById("defeito").value;
    let diagnostico = document.getElementById("diagnostico").value;
    let reparo = document.getElementById("reparo").value;

    let placaMaeModel = document.getElementById("placaMaeModel").value;
    let placaMaeNum = document.getElementById("placaMaeNum").value;
    
    let processadorModel = document.getElementById("processadorModel").value;
    let processadorNum = document.getElementById("processadorNum").value;
    
    let memoria1Model = document.getElementById("memoria1Model").value;
    let memoria1Num = document.getElementById("memoria1Num").value;
    
    let memoria2Model = document.getElementById("memoria2Model").value;
    let memoria2Num = document.getElementById("memoria2Num").value;
    
    let armazenamentoModel = document.getElementById("armazenamentoModel").value;
    let armazenamentoNum = document.getElementById("armazenamentoNum").value;
    
    let total = document.getElementById("total").value;

    let textoFormatado = `
Darkson,

Segue o diagnóstico da máquina enviada para a manutenção:

${tombamento} - ${setor} - ${sede}

Defeito: ${defeito}
Diagnóstico: ${diagnostico}
Reparo: ${reparo}
Status: Aguardando Autorização de Conclusão.

Configuração atual: 
Placa mãe: ${placaMaeModel} - (${placaMaeNum})
Processador: ${processadorModel} - (${processadorNum})
Memória 1: ${memoria1Model} - (${memoria1Num})
Memória 2: ${memoria2Model} - (${memoria2Num})
Armazenamento: ${armazenamentoModel} - (${armazenamentoNum})

Taxa de serviço: R$50,00  
Total: R$${total}

Att,
`;

    document.getElementById("resultado").innerText = textoFormatado;

    navigator.clipboard.writeText(textoFormatado).then(() => {
        mostrarToast("Texto copiado para a área de transferência!");
    });
}

// Função para exibir toast
function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // some após 3 segundos
}
