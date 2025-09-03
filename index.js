function getcep() {
    let cepC = document.getElementById("cep").value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cepC + '/json/');
    ajax.send();
    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        var logradouro = obj.logradouro;
        var bairro = obj.bairro;
        var cidade = obj.localidade;
        var estado = obj.uf
        document.getElementById("resultado").innerHTML = "Logradouro: " + logradouro + "<br>" + "bairro: " + bairro + "<br>" + "Cidade: " + cidade + ", " + estado;
        document.getElementById("resultado").innerHTML = `
    Logradouro: ${logradouro} <br>
    Bairro: ${bairro} <br>
    Cidade: ${cidade}, ${estado}
    <svg id="copiar" xmlns="http://www.w3.org/2000/svg" 
         width="20" height="20" fill="currentColor" viewBox="0 0 16 16" 
         style="cursor:pointer; margin-left:10px; vertical-align:middle;">
      <path d="M10 1.5A1.5 1.5 0 0 1 11.5 3v1h-1V3a.5.5 0 0 0-.5-.5H5A1.5 1.5 0 0 0 3.5 4v8A1.5 1.5 0 0 0 5 13.5h5.5a.5.5 0 0 0 .5-.5v-1h1v1a1.5 1.5 0 0 1-1.5 1.5H5A2.5 2.5 0 0 1 2.5 12V4A2.5 2.5 0 0 1 5 1.5h5z"/>
      <path d="M12 5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5zm0-1H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
    </svg>
`;

        const enderecoCompleto = `${logradouro}, ${bairro}, ${cidade} - ${estado}, CEP: ${cepC}`;

        document.getElementById("copiar").addEventListener("click", () => {
            navigator.clipboard.writeText(enderecoCompleto).then(() => {
                alert("Endereço copiado para a área de transferência!");
            }).catch(err => {
                alert("Erro ao copiar: " + err);
            });
        });

    }
}