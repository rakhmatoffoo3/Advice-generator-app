const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      adviceId.textContent = data.slip.id;
      adviceText.textContent = `"${data.slip.advice}"`;
    })
    .catch(err => {
      adviceText.textContent = "Sorry bro!!!.";
      adviceId.textContent = "--";
    });
}


getAdvice();

diceButton.addEventListener("click", getAdvice);
