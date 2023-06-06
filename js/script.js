
function getMoveName(MoveId){

  console.log('Wybrany ruch to:'+ MoveId)

  if (MoveId == 1){
    return 'kamień';
  }
  else if (MoveId == 2) {
    return 'papier';
  } 
  else if (MoveId == 3) {
    return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu o id ' + MoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
    computerMove = 'kamień';
    printMessage('Mój ruch to: ' + computerMove);
} else if (randomNumber == 2) {
    computerMove = 'papier';
    printMessage('Mój ruch to: ' + computerMove);
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
    printMessage('Mój ruch to: ' + computerMove);
}*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
    printMessage('Twój ruch to: ' + playerMove);
} else if(playerInput == '2'){
    playerMove = 'papier';
    printMessage('Twój ruch to: ' + playerMove);
}else if(playerInput == '3'){
    playerMove = 'nożyce';
    printMessage('Twój ruch to: ' + playerMove);
}*/

function displayResult(argComputerMove, argPlayerMove) {

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

let argPlayerMove = playerMove

let argComputerMove = computerMove


displayResult(computerMove, playerMove);



/*if(computerMove == playerMove) {
  printMessage('Remis!Gramy ponownie!');
}
else if(playerMove == 'nieznany ruch'){
  printMessage('Proszę wpisz 1,2 lub 3.');
}
else if(
  (computerMove == 'kamień' && playerMove == 'papier') ||
  (computerMove == 'nożyce' && playerMove == 'kamień') ||
  (computerMove == 'papier' && playerMove == 'nożyce') 
) {
    printMessage('Ty wygrywasz!');
} else {
    printMessage('Przegraleś! Spróbuj ponownie!');
  }*/
