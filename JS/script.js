function consultaEndereco() {
  let cep = document.querySelector('#cep').value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(mostrarEndereco);
  });
}

function mostrarEndereco(data) {
  if (data.erro) {
    resultado.innerHTML = 'CEP inexistente';
  } else {
    let resultado = document.querySelector(`#resultado`);
    resultado.innerHTML = `Logradouro: ${data.logradouro}
  Complemento: ${data.complemento}
  Bairro: ${data.bairro}
  Localidade: ${data.localidade} - UF: ${data.uf}`;
  }
}
