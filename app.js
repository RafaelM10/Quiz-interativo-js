const form = document.querySelector(".quiz-form");
const tituloDaQuestao = document.querySelector("#title-question");

const respostasCorretas = ["A", "B", "B", "A"];

const pontuacaoUsuario = (event) => {
  event.preventDefault();

  let score = 0;

  const respostaDoUsuario = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  respostaDoUsuario.forEach((resposta, index) => {
    if (resposta === respostasCorretas[index]) {
      return (score += 25);
    }
  });
  tituloDaQuestao.textContent = `Você acertou um total de ${score}%`;
  form.textContent = "";
};

form.addEventListener("submit", pontuacaoUsuario);
