function ver() {
  var nome = window.document.querySelector("#nome").value;
  var sobrenome = window.document.querySelector("#sobrenome").value;
  var nascimento = window.document.querySelector("#data").value;
  var res = window.document.querySelector("#res");
  var resultado = Number(data.value);
  res.innerHTML = `<p style="font-family:arial">Senhor(a) <strong  style="color:yellow">${nome.toUpperCase()} ${sobrenome.toUpperCase()}</strong> sua idade é ${resultado} anos.</p>`;
  if (resultado >= 16) {
    res.innerHTML += `<p style="font-family:arial"> Cidadão <strong  style="color:yellow">pode</strong> votar.</p>`;
  } else if (resultado <= 15) {
    res.innerHTML += `<p style="font-family:arial">Cidadão <strong style="color:yellow">não</strong> tem idade para votar.</p>`;
  }
}
