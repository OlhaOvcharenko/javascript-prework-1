
function playGame(playerInput){

  clearMessages(); 
  
  function getmoveName(moveId){
    console.log('Wybrany ruch to:'+ moveId)
    if (moveId == 1){
      return 'kamień';
    }
    else if (moveId == 2) {
      return 'papier';
    } 
    else if (moveId == 3) {
      return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + moveId + '.');
      return 'nieznany ruch';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getmoveName(randomNumber);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  /*console.log('Gracz wpisał: ' + playerInput);*/

  let playerMove = getmoveName(playerInput);


  function displayResult(argcomputerMove, argplayerMove) {

    console.log('moves:', argcomputerMove, argcomputerMove);

    printMessage(`Zagrałem ${argcomputerMove}, a Ty ${argplayerMove}`);

    if(argplayerMove == 'nieznany ruch'){
      printMessage('Proszę wpisz 1,2 lub 3.');
    }
    else if(argcomputerMove == argplayerMove) {
      printMessage('Remis!Gramy ponownie!');
    }
    else if(
      (argcomputerMove == 'kamień' && argplayerMove == 'papier') ||
      (argcomputerMove == 'nożyce' && argplayerMove == 'kamień') ||
      (argcomputerMove == 'papier' && argplayerMove == 'nożyce') 
    ) {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Przegraleś! Spróbuj ponownie!');
      }
  }
  
  displayResult(computerMove, playerMove);

}

function buttonClicked(playerInput) {
  printMessage('Zrobiłeś swój wybór!');
  playGame(playerInput);
}

let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function() {
  playGame(1);
});

let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function() {
  playGame(2);
});

let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function() {
  playGame(3);
});

