
const limparFormulario = () => {
    document.getElementById('street').value = '';
    document.getElementById('neighbor').value = '';
    document.getElementById('town').value = '';
    document.getElementById('state').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('zip').value = '';
}

const preencherFormulario = (address) => {
    document.getElementById('street').value = address.logradouro;
    document.getElementById('neighbor').value = address.bairro;
    document.getElementById('town').value = address.localidade;
    document.getElementById('state').value = "estado";
    document.getElementById('uf').value = address.uf;
}

const cepValido = (zip) => {
    (zip.length === 8);
}

const pesquisarCep = async () => {
    const zipString = document.getElementById('zip').value;
    const zip = zipString.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${zip}/json/`;

    if ((zip.length === 8) && zip) {
        const dados = await fetch(url);
        const address = await dados.json();
        if (address.hasOwnProperty('erro')) {
            limparFormulario();
            document.getElementById('street').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(address);
        }
    } else {
        limparFormulario();
        document.getElementById('street').value = 'CEP incorreto!';
    }

}

document.getElementById('zip')
    .addEventListener('blur', pesquisarCep);