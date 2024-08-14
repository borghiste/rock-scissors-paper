
let userChoiceResult = document.querySelector('#user-choice');
let computerChoiceResult =   document.getElementById('computer-choice');
let gameResult = document.querySelector('#result');
let computerBoard = document.querySelector('#computer-score');
let userBoard = document.querySelector('#user-score');
let computerScore= 0;
let userScore = 0;
let numberMatches =0;
let MatchesPlayed= document.querySelector('#matches-played')





// possibili combinazioni di gioco
const choices ={
    'paper': {paper:'tie',
            scissors:'lose',
        rock:'win',
    },
    scissors: {paper:'win',
    scissors: 'tie',
    rock:'lose',
    },
    rock: {paper:'lose',
scissors:'win',
rock:'tie',},

}


// funzione per il confronto del gioco.all'inizio vengono rimosse tutte le classi dalla casella di resito gioco. alla fine del confronto il numero di match giocati viene aumentato di uno

function checker(input){

    const computerChoices = ['paper', 'scissors', 'rock'];
    
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
   
    
    
    userChoiceResult.textContent = input;
    
    computerChoiceResult.textContent = computerChoice;
    gameResult.classList.remove('win','lose','tie');
    gameResult.textContent='';
    
    
    switch (choices[input][computerChoice]){
      case('win'):
        gameResult.textContent = 'YOU WIN!';

      gameResult.classList.add('win');
       
        userScore++;
        userBoard.textContent = userScore;
      break;
      case('lose'):
        gameResult.textContent = 'you lose:(';
        gameResult.classList.add('lose');
        computerScore++;
        computerBoard.textContent = computerScore;
      break;
     case ('tie'): gameResult.textContent = 'tie';
     gameResult.classList.add('tie');
     break;
     computerScore++;
     computerBoard.textContent = computerScore;
     
     
        
  
    }
    numberMatches++;
    MatchesPlayed.textContent= numberMatches
  checkScore();
}

function checkScore(){
  if (userScore === 1 || computerScore === 1){setTimeout(() => { resetScore()
    
  }, 5000); 
   
    

  }}


// funzione per resettare i punteggi una volta raggiunto il numero massimo di punti da parte di uno dei due giocatori
  function resetScore(){
    userScore =0; computerScore = 0;userBoard.textContent = userScore; computerBoard.textContent = computerScore}
  



