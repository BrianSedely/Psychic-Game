var computerChoices = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var win = 0;
var lose = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = null;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// var userGuess = prompt("Guess what letter I'm thinking of")
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.key).toLowerCase();

    if (guessesMade.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        guessesMade[guessesMade.length] = userGuess;
        guessesLeft--;
    }

    if (computerGuess == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesMade = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    if (guessesLeft == 0) {
        lose++;
        guessesLeft = 9;
        guessesMade = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }


    var html =
        "<h1>The Pyschic Game</h1>"
    "<p>You chose: " + userGuess + "<p>" +
        "<p>Wins: " + win + "</p>" +
        "<p>Loses: " + lose + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>";

    document.querySelector("#game").innerHTML = html;
}