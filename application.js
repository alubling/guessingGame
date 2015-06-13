// generate a random number from 1 to 100
var randomNum = Math.floor((Math.random() * 100) + 1);
// user gets 3 guesses
var numGuesses = 3;
// guesses Array
var guessArray = [];

jQuery(document).ready(function() {

    $(".lead").css({"color": "blue"});



    // listen for an input event on the input field
    $("#appendedInputButton").on("change", function () {

      // since this code needs to be re-used, writing a function for checking if the input has been guessed already
      var guess = 0;
      var guessedAlready = function(guess) {
        // loop through guessArray
        for (var i=0; i < guessArray.length; i++) {
          // if the input
          if (guess == guessArray[i]) {

                // console.log(numGuesses);
                return true;

          }
        }
        //console.log(numGuesses);
        return false;
      }

      var guessLower = function() {

        $(".user-response").text("Not quite. You need to guess lower.");
        guessArray.push(input);
        numGuesses = numGuesses - 1;
        console.log(numGuesses);
        displayCurrentGuess(numGuesses);

      }

      var guessHigher = function() {

        $(".user-response").text("Not quite. You need to guess higher.");
        guessArray.push(input);
        numGuesses = numGuesses - 1;
        console.log(numGuesses);
        displayCurrentGuess(numGuesses);

      }

      var guessedAlreadyResponse = function() {

        $(".user-response").text("You guessed that number already!");
        guessArray.pop();
        numGuesses = numGuesses + 1;

      }

      var displayCurrentGuess = function(whichguess) {

        if (whichguess = 2) {
          // $(".guesses").find("li:first").text("Guess 1: " + input);
          $(".guesses").find("#1").text("Guess 1: " + input);

        } else if (whichguess = 1) {
          // $(".guesses").find("li:odd").text("Guess 2: " + input);
          $(".guesses").find("#2").text("Guess 2: " + input);

        } else if (whichguess = 0) {
          // $(".guesses").find("li:last").text("Guess 3: " + input);
          $(".guesses").find("#3").text("Guess 3: " + input);
        }
        return;

      }

      // Game over if the user uses 3 guesses
      if (numGuesses > 1) {

        // grab the value of the user's input and validate that it is a real number from 1-100
        if ((+$(this).val() >= 1) && (+$(this).val() <= 100) && (+$(this).val() % 1 == 0)) {

          var input = +$(this).val();
          console.log(input);

          // 1st attempt at if statement - WORKS
          // if (input == randomNum) {
          //
          //   $(".user-response").text("YOU WIN!!");
          //
          // } // else {
          //
          //   // for (var i=0; i < guessArray.length; i++) {
          //   //
          //   //   if (input == guessArray[i])
          //   //
          //   //   $(".user-response").text("You guessed that number already!");
          //
          // else if (input > randomNum) {
          //
          //       $(".user-response").text("Not quite. You need to guess lower.");
          //       guessArray.push(input);
          //       numGuesses = numGuesses - 1;
          //
          // } else {
          //
          //       $(".user-response").text("Not quite. You need to guess higher.");
          //       guessArray.push(input);
          //       numGuesses = numGuesses - 1;
          //
          // }

          // 2nd attempt if statement - doesn't work yet
          if (input == randomNum) {

            $(".user-response").text("YOU WIN!!");

          } else {

            console.log(numGuesses);
            // if this is the first guess
            if (guessArray.length < 1) {

              // then just go through the higher/lower sequence
              if (input > randomNum) {

                      guessLower();
                      // $(".user-response").text("Not quite. You need to guess lower.");
                      // guessArray.push(input);
                      // numGuesses = numGuesses - 1;
                      // console.log(numGuesses);
              } else {

                      guessHigher();
                      // $(".user-response").text("Not quite. You need to guess higher.");
                      // guessArray.push(input);
                      // numGuesses = numGuesses - 1;
                      // console.log(numGuesses);
              }

            } else { // but if this is NOT the first guess

              if (input > randomNum) {

                    // check if the number has been guessed already
                    if (guessedAlready(input) == true) {

                      guessedAlreadyResponse();
                      // $(".user-response").text("You guessed that number already!");
                      // guessArray.pop();
                      // numGuesses = numGuesses + 1;

                    } else {

                      guessLower();
                      // $(".user-response").text("Not quite. You need to guess lower.");
                      // guessArray.push(input);
                      // numGuesses = numGuesses - 1;

                    }

              } else {

                    if (guessedAlready(input) == true) {

                      guessedAlreadyResponse();
                      // $(".user-response").text("You guessed that number already!");
                      // guessArray.pop();
                      // numGuesses = numGuesses + 1;

                    } else {

                      guessHigher();
                      // $(".user-response").text("Not quite. You need to guess higher.");
                      // guessArray.push(input);
                      // numGuesses = numGuesses - 1;

                    }

              }

            }


          }


        } else {

          $(".user-response").text("You entered an invalid Number. Guesses must be real numbers from 1-100");
        }

      } else {

        $(".gameover").text("That was your last guess. Game Over!");
        $(".user-response").text("The number was " + randomNum);
      }

    });

    // If the user presses "New Game" the game starts over

    $("#new-game").on("click", function () {

      location.reload();
      // randomNum = Math.floor((Math.random() * 100) + 1);
      // numGuesses = 3;

    });

    // If the user presses "Hint" we give them the answer

    $("#hint").on("click", function () {


      $(".hint").text("The number is: " + randomNum);


    });


});
