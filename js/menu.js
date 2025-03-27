function mostrarFormulario(tipo) {
    if (tipo === 'email') {
        window.location.href = "/geradorEmail.html"; // Redireciona para a página do email
    } else if (tipo === 'manutencao') {
        window.location.href = "/formularioManutencao.html"; // Redireciona para a página do formulário de manutenção
    }
}
