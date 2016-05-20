
	/* **** Global Variables **** */
	// try to elminate these global variables in your project, these are here just to start.

	var playersGuess,
	    winningNumber;

	winningNumber = generateWinningNumber();
	console.log(winningNumber);
	playersGuessSubmission();
	
	
	/* **** Guessing Game Functions **** */

	// Generate the Winning Number

	function generateWinningNumber(){
		// add code here
		return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	};

	// Fetch the Players Guess

	function playersGuessSubmission(){
		// add code here
		$("#submit-button").on("click", function(){
			playersGuess = parseInt($("#input-here").val());
			$("#input-here").val("");
			console.log(playersGuess);
			checkGuess();
		})
	}

	// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
		// add code here
	}

	// Check if the Player's Guess is the winning number 

	function checkGuess(){
		// add code here
		if(playersGuess == winningNumber){
			$("#status").html("You Win!");
		}else{
			$("#status").html("Try Again!");
		}
	}

	// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
		// add code here
	}

	// Allow the "Player" to Play Again

	function playAgain(){
		// add code here
	}


	/* **** Event Listeners/Handlers ****  */


