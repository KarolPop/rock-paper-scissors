var newGameBtn = document.getElementById('js-newGameButton'); 
 newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'), 
    pickPaper = document.getElementById('js-playerPick_paper'), 
    pickScissors = document.getElementById('js-playerPick_scissors');
    roundResult = document.getElementById('roundResult');
      

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') }); 
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted', //started // ended 
    player = { 
      name: '', 
      score: 0 
    }, 
    computer = { 
       score: 0 
    };

var newGameBtn = document.getElementById('js-newGameButton'), 
    newGameElem = document.getElementById('js-newGameElement'), 
    pickElem = document.getElementById('js-playerPickElement'), 
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() { 
  switch(gameState) { 
    case 'started': 
      newGameElem.style.display = 'none'; 
      pickElem.style.display = 'block'; 
      resultsElem.style.display = 'block'; 
      break; 
    case 'ended': 
      newGameBtn.innerText = 'Jeszcze raz'; 
    case 'notStarted': 
    default: 
      newGameElem.style.display = 'block'; 
      pickElem.style.display = 'none'; 
      resultsElem.style.display = 'none'; 
  } 
}

var playerPointsElem = document.getElementById('js-playerPoints'), 
    playerNameElem = document.getElementById('js-playerName'), 
    computerPointsElem = document.getElementById('js-computerPoints');

//Start new game
function newGame() { 
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza'); 
  if (player.name) { 
    player.score = computer.score = 0; 
    gameState = 'started'; 
    setGameElements(); 
    
    playerNameElem.innerHTML = player.name;  
      setGamePoints();  
  } 
}

function playerPick(playerPick) { 
  console.log(playerPick); 
}

function getComputerPick() { 
  var possiblePicks = ['rock', 'paper', 'scissors']; 
  return possiblePicks[Math.floor(Math.random()*3)]; 
}

var playerPickElem = document.getElementById('js-playerPick'), 
    computerPickElem = document.getElementById('js-computerPick'), 
    playerResultElem = document.getElementById('js-playerResult'), 
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) { 
  var computerPick = getComputerPick(); 
  playerPickElem.innerHTML = playerPick; 
  computerPickElem.innerHTML = computerPick; 
  
   checkRoundWinner(playerPick, computerPick);
}

//checking round winner
function checkRoundWinner(playerPick, computerPick) { 
  playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 
  
  var winnerIs = 'player'; 
  
    if (playerPick == computerPick) { 
      winnerIs = 'noone'; // remis 
  } else if ( 
    (computerPick == 'rock' && playerPick == 'scissors') || 
    (computerPick == 'scissors' && playerPick == 'paper') || 
    (computerPick == 'paper' && playerPick == 'rock') ) { 

      winnerIs = 'computer'; 

  } if (winnerIs == 'player') {
      var playerPoints = player.score++; 
      playerResultElem.innerHTML = "Wygrana!"; 
      playerPointsElem.innerHTML =  playerPoints;
  } else if (winnerIs == 'computer') { 
      var computerPoints = computer.score++; 
      computerResultElem.innerHTML = "Wygrana!";
      computerPointsElem.innerHTML = computerPoints;
  } 
  
   if (player.score == 10) { 
      roundResult.innerHTML = "Gracz wygrywa rundę !";
      newGameBtn.innerText = 'Jeszcze raz'; 
      newGameElem.style.display = 'block';
   } else if (computer.score == 10) {
      roundResult.innerHTML = "Komputer wygrywa rundę !"; 
      newGameBtn.innerText = 'Jeszcze raz';
      newGameElem.style.display = 'block';
 }
}  
/* function setGamePoints() { 
    playerPointsElem.innerHTML = player.score; 
    computerPointsElem.innerHTML = computer.score; 
  } */

  
  var clicks = 0;
 
  function buttonClicked() {
      document.getElementById('roundResult').value = clicks++;
      roundResult.innerHTML = "Gra numer " + clicks;
  }
 
 

s