
var hangman = new HangMan();

function HangMan() {
	this.addWord = addWord;

	var currentChallenge = 0;
	var currentWord;

	var citiesArray = ["Wellington", "Auckland", "Christchurch"];
	var bandsArray = ["Jesus Lizard", "Death Cab for Cutie", "Yes"]
	var iceCreamArray = ["Butter Brickle", "Mint Chocolate Chip", "Rum Raisin"];

	var solvedIndices = [];
	var numTries = 3;

	var input = document.getElementsByClassName("input-field")[0];
	var submit = document.getElementsByClassName("submit")[0];
	var ncb = document.getElementsByClassName("new-challenge-button-nz-cities")[0];
	var bcb = document.getElementsByClassName("new-challenge-button-bands")[0];
	var icb = document.getElementsByClassName("new-challenge-button-ice-cream")[0];

	var tileCont = document.getElementsByClassName("tile-container")[0];

	ncb.addEventListener("click", startNzChallenge)
	bcb.addEventListener("click", startBdChallenge)
	icb.addEventListener("click", startIcChallenge)

	submit.addEventListener("click", function() {
		checkField(input.value);
		input.value = "";
	});


	function startNzChallenge() {	
		currentWord = citiesArray[currentChallenge];
		solvedIndices = [];
		currentChallenge += 1;
		if (currentChallenge === citiesArray.length) {
			currentChallenge = 0;
		}
		displayWord();
	}


	function startBdChallenge() {	
		currentWord = bandsArray[currentChallenge];
		solvedIndices = [];
		currentChallenge += 1;
		if (currentChallenge === citiesArray.length) {
			currentChallenge = 0;
		}
		displayWord();
	}

	function startIcChallenge() {	
		currentWord = iceCreamArray[currentChallenge];
		solvedIndices = [];
		currentChallenge += 1;
		if (currentChallenge === iceCreamArray.length) {
			currentChallenge = 0;
		}
		displayWord();
	}
	

	function addWord(word) {
		citiesArray.push(word);
	}

	function checkField(letter) {
		
		var gotMatch = false;

		for (var i = 0; i < currentWord.length; i++) {
			console.log(currentWord[i],letter);
			if (currentWord[i].toUpperCase() === letter.toUpperCase()) {
				solvedIndices.push(i);
				gotMatch = true;
			}
		};

		if (gotMatch === true) {
			displayWord();
			alert('Way to go! Keep it up smartypants!!')		
		} else {
			numTries -= 1;
			alert('Nope! You have ' + numTries + ' lives left. :O');
		}
	}

	function displayWord() {
		tileCont.innerHTML = "";
		for (var i = 0; i < currentWord.length; i++) {			
			var newDiv = document.createElement("div");
			newDiv.classList.add("tile");

			if (solvedIndices.indexOf(i) > -1) {
				newDiv.innerHTML = currentWord[i];

			}

			if (solvedIndices.indexOf(i) === -1) {
				console.log([i]);
				newDiv.innerHTML = " - ";
			}	

			tileCont.appendChild(newDiv);

		};
			
			// else if (solvedIndices.indexOf(i) === -1) {
			// 	newDiv.classList.add("black-tile");
			// }	
	}

}