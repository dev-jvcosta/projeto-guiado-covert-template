// Obtendo os elementos do Formulario.
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  // Removendo os caracteres que não são números e substituindo por "".
  amount.value = amount.value.replace(hasCharactersRegex, '');
})

// Captando o evento do submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value); // retorna o valor do select currency.
}