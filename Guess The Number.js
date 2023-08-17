let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(typeof(randomNumber))

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high! Try again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low! Try again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! you got it right!";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide a valid user input.";
        gameResult.style.backgroundColor = "#1e217c";

    }


}