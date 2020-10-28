//Buttons
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

// Score
let pScore = 0;
let cScore = 0;

//Game
function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');

	function getMoveName(argMoveId){
		if(argMoveId == 1){
	 	 	return 'kamień';
		} else if(argMoveId == 2){
			return 'papier';
		} else if(argMoveId == 3){
			return 'nożyce';
		}else {
	  	printMessage('Nie znam takiego ruchu ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	  	return 'kamień';
		}
  	}
	//Player
	const playerMove = argButtonName;

	//Computer
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	let computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);

	// Score function
	let updateScore = function () {
		let playerScore = document.querySelector(".player-score p")
		let computerScore = document.querySelector(".computer-score p")
		playerScore.innerHTML = pScore;
		computerScore.innerHTML = cScore;
	}

	//Result game
	function displayResult(argPlayerMove, argComputerMove){
		if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
			 printMessage('Wygrywasz!');
			 pScore++;
			 updateScore();
		} else if(argPlayerMove == argComputerMove){
			printMessage('Remis');
		} else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
			printMessage('Wygrywasz!')
			pScore++;
			updateScore();
		} else if(argPlayerMove == 'kamień' && argComputerMove == "nożyce"){
			printMessage('Wygrywasz!')
			pScore++;
			updateScore();
		}else {
			printMessage('Przegrywasz :(');
			cScore++;
			updateScore();
		}
			printMessage('Gdyż ponieważ zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  	}
	displayResult(playerMove, computerMove);
  };