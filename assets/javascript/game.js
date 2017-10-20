window.onload = function() {

	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var wins = 0;
	var losses = 0;
	var guesses = 10;
	var guessArray = [];
	var computerLetter = "";

	//need to store this letter and reuse it, currently it is making new letters every time this needs to be for loop 10 max
	
	function compLetter(){
		computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Computer letter is " + computerLetter);
	}
	compLetter();

	document.onkeyup = function (event){
		var usersGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guessArray.push(usersGuess);
		console.log("A users guess " + usersGuess);

		if (usersGuess===computerLetter) {
			wins++;
			resetWin();
		}

		if (usersGuess!=computerLetter) {
			guesses--;
		}

		if (guesses===0){
			losses++;
			resetLoose();
		} 

		var html = "<p>Press any letter key to try to guess what the cumputer is thinking!!</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses + "</p>" +
		"<p>Letters Player has Guessed: " + guessArray + "</p>";

		// This updates that HTML to the new standings and letter selection
		document.querySelector('#game').innerHTML = html;

		function resetLoose(){
			guesses = 10;
			guessArray = [];
			alert("You LOOOOOOOOSE my letter was, " + computerLetter + "\nPush OK to play again!")
			compLetter();
		}

		function resetWin(){
			guesses = 10;
			guessArray =[];
			alert("Amazing you guessed my letter was it was, " + computerLetter + "\nPush OK to play again!")
			compLetter();
		}
	}
};