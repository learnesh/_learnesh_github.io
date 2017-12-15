// Available letters to guess
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for my scoreboard
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var lettersGuessed = [];
var userGuess = null;


// Create an onkeyup event for the user guess.
document.onkeyup = function(event) {

  // Record the users guess to the userGuess variable. toLowerCase is incase the user has cap locks on.
  var userGuess = event.key;

  // Randomly choose a letter from the "options" array. This is the Computer's guess.
  var computerGuess = options[Math.floor(Math.random() * options.length)];

  lettersGuessed.push(userGuess); 
    
    // If user guesses correctly, record that as a win and alert the user. Then reset remainingGuesses to 9, lettersGuessed to empty, and a new computerGuess so they can play again.
    if (userGuess = computerGuess) {
        wins++;
        alert("Congrats, you guessed correct!");
        remainingGuesses = 9;
        lettersGuessed = [];
        computerGuess = options[Math.floor(Math.random() * options.length)]; 
    }
    // If user guesses 9 times incorrectly, record that as a loss and alert the user. Then reset remainingGuesses to 9, lettersGuessed to empty, and a new computerGuess so they can play again.
    else if (remainingGuesses == 0) {
        losses++;
        alert("Nope! Try Again");
        remainingGuesses = 9;
        lettersGuessed = [];
        computerGuess = options[Math.floor(Math.random() * options.length)]; 
    }
    // If user guess does not equal computer guess decrease reaminingGuesses by 1.
    else if (userGuess !== computerGuess){
            remainingGuesses--;
    }  


    // Creating a variable to hold the new HTML. This will allow the HTML to keep track of the user and computer guesses, and the wins/losses.
    var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + remainingGuesses + "</p>" +
          "<p>Your Guesses so far: " + lettersGuessed + "</p>" +;

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    }
};
