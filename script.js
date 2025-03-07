const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacters = /\D+/g;

  // Removendo os caracteres que não são números e substituindo por "".
  amount.value = amount.value.replace(hasCharacters, '');
})
