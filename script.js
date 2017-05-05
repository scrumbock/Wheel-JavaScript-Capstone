
var hangman = new HangMan();




function HangMan() {
	this.addWord = addWord;

	var currentChallenge = 0;
	var currentWord;

	var wordsArray = ["Wellington", "Auckland", "Christchurch"];

	var solvedIndices = [];
	var numTries = 3;

	var input = document.getElementsByClassName("input-field")[0];
	var submit = document.getElementsByClassName("submit")[0];
	var ncb = document.getElementsByClassName("new-challenge-button")[0];
	var tileCont = document.getElementsByClassName("tile-container")[0];

	ncb.addEventListener("click", startChallenge)
	submit.addEventListener("click", function() {
		input.value = "";
		checkField(input.value);

	});



	function startChallenge() {	
		currentWord = wordsArray[currentChallenge];
		solvedIndices = [];
		currentChallenge += 1;
		if (currentChallenge === wordsArray.length) {
			currentChallenge = 0;
		}
		displayWord();
	}

	function addWord(word) {
		wordsArray.push(word);
	}

	function checkField(letter) {

		var gotMatch = false;

		for (var i = 0; i < currentWord.length; i++) {

			if (currentWord[i].toUpperCase() === letter.toUpperCase()) {
				solvedIndices.push(i);
				gotMatch = true;
			}
		};

		if (gotMatch === true) {
			console.log("gotMatch");
			displayWord();		
		} else {
			numTries -= 1;
			alert('nope! you have ' + numTries + ' lives left. :O');
		}
	}

	function displayWord() {
		console.log("displayWord before HTML");
		tileCont.innerHTML = "";
		console.log("displayWord after HTML");
		for (var i = 0; i < currentWord.length; i++) {			
			var newDiv = document.createElement("div");
			newDiv.classList.add("tile");
			console.log("inside loop before if");

			if (solvedIndices.indexOf(i) > -1) {
				// <
				console.log("inside if loop");
				newDiv.innerHTML = currentWord[i];
			}
			tileCont.appendChild(newDiv);

		};

	}


}