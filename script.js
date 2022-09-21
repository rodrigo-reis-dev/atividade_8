function calcIMC() {
  let peso = document.querySelector('.pe').value;
  let altura = document.querySelector('.al').value;
  let resultado = peso / (altura * altura);
  document.querySelector('.resultado').innerHTML = Math.round(resultado);
}

document.querySelector('.btn').addEventListener('click', calcIMC);
