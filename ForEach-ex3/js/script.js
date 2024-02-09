//Escreva um código que usa o método forEach para transformar uma lista de nomes em uma lista de saudações personalizadas.
let arr = [];

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  setInformations();
});

const nomes = document.getElementById("nomes");
const mensagens = document.getElementById("mensagens");

const setInformations = () => {
  const valueName = document.getElementById("set-nome").value;
  const valueMensage = document.getElementById("set-mensagem").value;

  arr.push({ nome: valueName, mensagem: valueMensage });

  // Adiciona novas opções
  arr.forEach((item) => {
    const optionName = document.createElement("option");
    optionName.innerText = item.nome;
    nomes.appendChild(optionName);

    const optionMessage = document.createElement("option");
    optionMessage.innerText = item.mensagem;
    mensagens.appendChild(optionMessage);

    document.getElementById("set-nome").value = "";
    document.getElementById("set-mensagem").value = "";

    alert("Cadastro efetuado com sucesso!");
  });

  console.log(arr);
}

const exibeMensagem = document.getElementById("form-exibe-mensagem");

exibeMensagem.addEventListener("submit", (event) => {
  event.preventDefault();
  displayMensage();
});

const displayMensage = () => {
  const selectedNomeOption = document.getElementById("nomes").options[document.getElementById("nomes").selectedIndex];
  const selectedMensagemOption = document.getElementById("mensagens").options[document.getElementById("mensagens").selectedIndex];

  const mensagemExibida = document.querySelector(".container__mensagem-exibida > p");

  if (selectedNomeOption) {
    const selectedNome = selectedNomeOption.value;
    const selectedMensagem = selectedMensagemOption.value;
    mensagemExibida.innerText = `Mensagem exibida para: ${selectedNome} \n\n ${selectedMensagem}`;
  } else {
    mensagemExibida.innerText = "Selecione um nome para exibir a mensagem.";
  }
}