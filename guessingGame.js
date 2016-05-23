
	/* **** Global Variables **** */
	// try to elminate these global variables in your project, these are here just to start.
	// Look into using an IIFE (Immediately Invoked Function Expression) to reduce the amount of global variables.
	// Here is a great link to get started: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
	var playersGuess,
	    winningNumber,
	    guessArray = [];
	$("#input-here").focus();
	winningNumber = generateWinningNumber();
	console.log("win number " + winningNumber);
	playersGuessSubmission();
	provideHint();
	playAgain();

	/* **** Guessing Game Functions **** */

	// Generate the Winning Number

	function generateWinningNumber(){
		// add code here
		return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	};

	// Fetch the Players Guess

	function playersGuessSubmission(){
		// add code here
		$("#input-here").keydown(function(event){
	    if(event.keyCode == 13){
	      $("#submit-button").click();
	    }
  	}); 
		$("#submit-button").on("click", function(){
			playersGuess = parseInt($("#input-here").val());
			$("#input-here").val("");
			console.log("playersGuess " + playersGuess);
		
		
			checkGuess();
			endGame();
		})
	}

	// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
		// add code here
		if(playersGuess > winningNumber){
			return "Your guess is higher ";
		}else if(playersGuess < winningNumber){
			return "Your guess is lower "; 
		}else{
			return "";
		}
	}

	// Check if the Player's Guess is the winning number 

	function checkGuess(){
		// add code here
		
		if(playersGuess === winningNumber){
			$("#status").html("You Win!");

		}else{
			if(guessArray.indexOf(playersGuess) !== -1){
				$("#status").html("You already entered the number!");
			}else{
				guessArray.push(playersGuess);
				console.log(guessArray);
				var guessLeft = parseInt($("#guess-left").html());
				console.log(guessLeft + " guess left");
				guessLeft -= 1;
				console.log(guessLeft);
				$("#guess-left").html(guessLeft);
				$("#status").html("Try Again!");
				$("#message").html(guessMessage());
			}
		}

	}
	function guessMessage(){
		var message = "";
		var distance = Math.abs(playersGuess - winningNumber);
		if(distance < 10){
			message = "and within 10 digits of the winning number";
		}else if(distance >= 10 && distance < 20){
			message = "and within 20 digits of the winning number"
		}
		return lowerOrHigher()+ message; 
	}
	// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
		// add code here
		$("#hint").on("click", function(){
			var hintArr = [];
			hintArr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
			hintArr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
			hintArr.push(winningNumber);
			console.log(hintArr);
			$("#hintContent").html("Hint "+ hintArr);
		})
	}

	// Allow the "Player" to Play Again

	function playAgain(){
		// add code here
		$("#startAgain").on("click", function(){
      location.reload();
    })
	}

	function endGame(){
		var guessLeft = parseInt($("#guess-left").html());
		if(guessLeft == 0){
			$("#status").html("Please Play Again");
			$("#message").hide();
			$("hintContent").hide();
		}
	}

	/* **** Event Listeners/Handlers ****  */


