function formatarDados() {
    let tombamento = document.getElementById("tombamento").value;
    let setor = document.getElementById("setor").value;
    let sede = document.getElementById("sede").value;
    let defeito = document.getElementById("defeito").value;
    let diagnostico = document.getElementById("diagnostico").value;
    let reparo = document.getElementById("reparo").value;

    let placaMae = document.getElementById("placaMae").value;
    let processador = document.getElementById("processador").value;
    let memoria1 = document.getElementById("memoria1").value;
    let memoria2 = document.getElementById("memoria2").value;
    let armazenamento = document.getElementById("armazenamento").value;
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
Placa mãe: ${placaMae}  
Processador: ${processador}  
Memória: ${memoria1}  
Memória: ${memoria2}  
Armazenamento: ${armazenamento}  

Taxa de serviço: R$50,00  
Total: R$${total}

Att,
`;

    // Exibir o texto formatado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerText = textoFormatado;

    // Copiar automaticamente para a área de transferência
    navigator.clipboard.writeText(textoFormatado).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}
