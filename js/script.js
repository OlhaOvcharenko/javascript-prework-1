
{
  
  const playGame = function(playerInput) {

    clearMessages();

    const getMoveName = function(moveId) {
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber),
    playerMove = getMoveName(playerInput);

    
    const displayResult = function(argComputerMove, argPlayerMove) {

      console.log('moves:', argComputerMove, argPlayerMove);

      printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);

      if(argPlayerMove == 'nieznany ruch'){
        printMessage('Proszę wpisz 1,2 lub 3.');
      }
      else if(argComputerMove == argPlayerMove) {
        printMessage('Remis!Gramy ponownie!');
      }
      else if(
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') 
      ) {
          printMessage('Ty wygrywasz!');
      } else {
          printMessage('Przegraleś! Spróbuj ponownie!');
        }
    }
    
    displayResult(computerMove, playerMove);
  }

  const buttonClicked = function(playerInput) {
    printMessage('Zrobiłeś swój wybór!');
    playGame(playerInput);
  }

  const playRock = document.getElementById('play-rock');
  playRock.addEventListener('click', function() {
    playGame("1");
  });

  const playPaper = document.getElementById('play-paper');
  playPaper.addEventListener('click', function() {
    playGame("2");
  });

  const playScissors = document.getElementById('play-scissors');
  playScissors.addEventListener('click', function() {
    playGame("3");
  });


}




