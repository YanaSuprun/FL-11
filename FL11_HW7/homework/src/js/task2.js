let playStart = confirm('Do you want to play a game?');
const min = 0;
let max = 8;
let currentPrize = 0;
let possiblePrize = 100;
let rangeIncreaser = 4;
let prizeIncreaser = 2;
let prizeDivider = 2;


while (playStart === true) {
  let attempts = 3;
  let randomNumber = Math.floor(Math.random() * (max + 1 - min));
  console.log(randomNumber);

  if (playStart === false) {
    alert('You did not become a billionaire, but can.');
  } else {
    let i = 0;
    while (i < attempts) {
      let userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}\n
                                Attempts left: ${attempts}\n
                                Total prize: ${currentPrize}$\n
                                Possible prize on current attempt: ${possiblePrize}$`);
      attempts --;

      if (userNumber === randomNumber) {
        currentPrize += possiblePrize;
        alert(`Your prize is ${possiblePrize}$`);
        break;
      } else {
        possiblePrize = possiblePrize/prizeDivider;
      }
    }

    if (attempts === 0) {
      alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
      playStart = confirm('Do you want to play again?');

      if (playStart === false) {
        alert(`You did not become a billionaire, but can.`);
        break;
      } else {
        possiblePrize = 100;
        continue;
      }

    } else {
      let startAgain = confirm(`Congratulation, you won! Your prize is: ${currentPrize}$. Do you want to continue?`);
      if (startAgain === false) {
        alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
        break;
      } else {
        max += rangeIncreaser;
        possiblePrize *= prizeIncreaser;
        continue;
      }
    }
  }
}
