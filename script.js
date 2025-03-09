//REFERÊNCIAS DA COTAÇÃO DE MOEDAS NO DIA
const USD = 5.79;
const EUR = 6.28;
const GBP = 7.48;

// Obtendo os elementos do Formulario.
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  // Removendo os caracteres que não são números e substituindo por "".
  amount.value = amount.value.replace(hasCharactersRegex, '');
})

// Captando o evento do submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
}

// FUNÇÃO PARA CONVERTER A MOEDA.
function convertCurrency(amount, price, symbol){
  // TRATAMENTO DE ERRORS
  try{

    // Exibe a cotacao da moeda selecionada.
    // Chama a funcáo FormatCurrencyBRL para formatar o valor da moeda.
    description.textContent = `${symbol} 1 = R$ ${formatCurrencyBRL(price)}`;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");

  } catch(error){
    
    // Remove a classe que exibe o footer, oculta o resultado.
    footer.classList.remove("show-result");

    console.log(error)
    alert("Não foi possível converter a moeda. Tente novamente mais tarde.");
  }  
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
  
  // Converte para numero para utilizar o toLocaleString para formatar no padráo bRL.
  return Number(value).toLocaleString("pt-BR", {
    // Cria a formatação de moeda para BRL com um Objeto
      style: "currency",
       currency: "BRL"
      });
}