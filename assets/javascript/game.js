// When the user enters a key, it starts the game.

var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", 
"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var dashedOut = String.fromCharCode(puzzleSelection).toUnderscores;
	for (var i = 0; i < puzzleSelection.length; i++)

var userTypes = String.fromCharCode(event.keyCode).toUpperCase();

var wins = 0;
var losses = 0;
var guessesRemaining = 6;

document.onkeyup = function() { 
		var userTypes = String.fromCharCode(event.keyCode).toUpperCase();
}

var songList = artist1songs, artist2songs, artist3songs, artist4songs, artist5songs, 
artist6songs, artist7songs, artist8songs, artist9songs, artist10songs;


//					Make The Puzzle An Object
var puzzle = {
	artist1: "THE JACKSON 5",
 	artist1songs: "GOT TO BE THERE", "THE LOVE YOU SAVE", "ABC", "I WANNA BE WHERE YOU ARE", "DANCING MACHINE", "I WANT YOU BACK",
 	artist2: "MARTHA REEVES & THE VANDELLAS",
 	artist2songs: "DANCING IN THE STREETS",
 	artist3: "702",
 	artist3songs: "STEELO",
 	artist4: "COMMODORES",
 	artist4songs: "BRICK HOUSE",
 	artist5: "DEBARGE",
 	artist5songs: "RHYTHM OF THE NIGHT", "I LIKE IT",
 	artist6: "DENNIS EDWARDS",
 	artist6songs: "DON'T LOOK ANY FURTHER",
 	artist7: "DIANA ROSS",
 	artist7songs: "I'm Coming Out", "Upside Down", "Love Hangover",
 	artist8: "DIANA ROSS & THE SUPREMES",
 	artist8songs: "AIN'T NO MOUNTAIN HIGH ENOUGH", "STOP IN THE NAME OF LOVE", "WHERE DID OUR LOVE GO", "YOU CAN'T HURRY LOVE", "YOU KEEP ME HANGING ON",
 	artist9: "EDDIE KENDRICKS",
 	artist9songs: "INTIMATE FRIENDS",
 	artist10: "EDWIN STARR",
 	artist10songs: "WAR",
 	newGame: function() {
		var puzzleSelection = songList[Math.floor(Math.random()*songList.length)];
 		var dashedOut = puzzleSelection.replaceall(alphabets,"_")
 		document.querySelector('#gameBoard').innerHTML = dashedOut
		document.querySelector('#TheArtist').innerHTML = "?? NEED A HINT ??"

	},
	countwins: function() {
		wins = wins + 1;
	},

	countlosses: function() {
		losses = loses + 1;
	},

	guessCounter: function() {
		guessesRemaining = guessesRemaining - 1;
	},

	background: function() { 
		if (puzzleSelection === artist1songs || 
			puzzleSelection === artist4songs || 
			puzzleSelection === artist7songs || 
			puzzleSelection === artist8songs) {

		document.getElementbyId(style).innerhtml = "body { badkgroundimg = href:assets/images/motownLabel.jpg }"
                }
        else if (puzzleSelection === artist2songs) {
        	document.getElementbyId(style).innerhtml = "body { badkgroundimg = href:assets/images/gordyLabel.jpg }"
        }
        else if (puzzleSelection === artist3songs) {
        	document.getElementbyId(style).innerhtml = "body { badkgroundimg = href:assets/images/biv10Label.jpg }"
        }
        else if (puzzleSelection === artist5songs || 
			puzzleSelection === artist6songs || 
			puzzleSelection === artist10songs) {

		document.getElementbyId(style).innerhtml = "body { badkgroundimg = href:assets/images/gordy70sLabel.jpg }"
        }
        else if (puzzleSelection === artist9songs) {
        	document.getElementbyId(style).innerhtml = "body { badkgroundimg = href:assets/images/gordyLabel.jpg }"
        }
    },

    hinting: function() {
    	
    	document.querySelector('#hint').innerHTML funtction {
	
		if (PuzzleSelection = artist1songs) {
			document.getElementbyId(#HintHTML) = puzzle.artist1
		}
		if (PuzzleSelection = artist2songs) {
			document.getElementbyId(#HintHTML) = puzzle.artist2
		}
		if (PuzzleSelection = artist3songs) {
			document.getElementbyId(#HintHTML) = puzzle.artist3
		}
		if (PuzzleSelection = artist4songs) {
			document.getElementbyId(#HintHTML) = artist4
		}
		if (PuzzleSelection = artist5songs) {
			document.getElementbyId(#HintHTML) = artist5
		}
		if (PuzzleSelection = artist6songs) {
			document.getElementbyId(#HintHTML) = artist6
		}if (PuzzleSelection = artist7songs) {
			document.getElementbyId(#HintHTML) = artist7
		}
		if (PuzzleSelection = artist8songs) {
			document.getElementbyId(#HintHTML) = artist8
		}
		if (PuzzleSelection = artist9songs) {
			document.getElementbyId(#HintHTML) = artist8
		}
		if (PuzzleSelection = artist10songs) {
			document.getElementbyId(#HintHTML) = artist10
		}
	},
}

//I'm pretty sure I should code a loop here (below)


}



					  ### if (*userTypes* == (a letter in the puzzle) {

					  	    reveal it in the propper index (of the *puzzleSelection*)
					  	     document.getElementbyId;
					  		
						  }
/*(if within if statment)*/ if (gameboard == puzzleSelection) {
							alert(You Win!);
							play (the songfile, or youtube video of the song)
							userwins = +1
							*newGame*

						}
					### if (userTypes) == (LetterAlreadyGuessed) {
						do nothing 
					}
					  		  
					  #3 When the user types an incorrect letter. 
					  		- It puts it in the LetterAlreadyGuessed section
					  			.inUpperCase
					  		- decreases remaining Guesses by -1
					  		- add a body part to the hang Man
					  		- Let's user guess again, UNLESS (else, if), remaining guesses = 0
					  			Then, it displays "game over" 
					  #4 if Game Over - Create a function { 
					  		- reveal all the correct letters of the puzzle
					  		- play the song that corresponds with the puzzle
					  		- add a count to user losses
					  		- allow user to press any key to continue playing
					  			}

When gameboard = puzzle - - - - -User wins, song plays, press any key to play again.

// The user must choose a letter.





// For "LetterAlreadyGuessed" - I can use document.querySelector('#guessed')
//  to add the text of the letters guessed wrong.
		var guessedHTML = "<p>Letter's Already Guessed: " + wrong1 + wrong2 + wrong3 + wrong4 + wrong5 + wrong6;
		
		document.querySelector('guessed') = guessedHTML;
}


/* If (user presses correct letter) {
	(The letter is displayed in the puzzle)
	}

	else (incorrect) {
	(The letter appears in "Letter's Already Guessed" section)
	(The "Number of Guesses Remaining" losses a value (-1))
	} */

/*
Create a variable that corresponds with a user win:
If (wins) {
	Add "1" to wins score
	plays the music related to the puzzle
	New Game Occurs, when any key is pressed
}

If (loses) {
	adds 1 to losses score
	the remaining tiles are displayed
	song plays
	New Game May Occur, when any key is pressed}

*/

//Below is the variable for the computer to randomly pick from for the puzzle. 


 

