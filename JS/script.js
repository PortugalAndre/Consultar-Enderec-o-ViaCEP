//Função que busca o endereço a partir do CEP
function consultaEndereco() {
  let cep = document.querySelector('#cep').value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(mostrarEndereco);
  });
}

function mostrarEndereco(data) {
  if (data.erro) {
    resultadoEndereco.innerHTML = 'CEP inexistente';
  } else {
    let resultadoEndereco = document.querySelector(`#resultado`);
    resultadoEndereco.innerHTML = `${data.logradouro}
  ${data.complemento}
  ${data.bairro}
  ${data.localidade} - ${data.uf}`;
  }
}

//Função que busca o CEP a partir do endereço
function consultaCep() {
  alert('ERRO! Código em construção');

  /*let uf = document.querySelector('#uf').value;
  let rua = document.querySelector('#rua').value;
  let cidade = document.querySelector('#cidade').value;
  let url = `https://viacep.com.br/ws/${uf + '/' + cidade + '/' + rua}/json/`;
  console.log(url);

  fetch(url).then(function (response) {
    response.json().then(mostrarCep);
  });
  */
}
/*
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
}*/
