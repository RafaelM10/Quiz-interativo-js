const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

const answerCorrect = ["A", "D", "C", "B"];

let score = 0;

const showUserResponse = () =>
  answerCorrect.map((_, index) => form[`inputQuestion${index + 1}`].value);

const answerUser = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === answerCorrect[index];
    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const percentageAnimation = () => {
  let count = 0;

  const timer = setInterval(() => {
    if (count === score) {
      clearInterval(timer);
    }
    result.querySelector("span").textContent = `${count++}%`;
  }, 50);
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  result.classList.remove("d-none");
};

const resetUserScore = () => {
  score = 0;
};

const formSubmission = (event) => {
  event.preventDefault();

  const getUserAnswer = showUserResponse();

  resetUserScore();
  answerUser(getUserAnswer);
  showFinalScore();
  percentageAnimation();
};

form.addEventListener("submit", formSubmission);
