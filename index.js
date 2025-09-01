function getcep() {
    let cepC = document.getElementById("cep").value;
    var cepCliente = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cepC + '/json/');
    ajax.send();
    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        var logradouro = obj.logradouro;
        var bairro = obj.bairro;
        var cidade = obj.localidade;
        var estado = obj.uf
        document.getElementById("resultado").innerHTML = "Logradouro: " + logradouro + "<br>" + "bairro: " + bairro + "<br>" + "Cidade: " + cidade +", " +estado
    }
}