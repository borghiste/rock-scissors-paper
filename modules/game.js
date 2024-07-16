
let userChoiceResult = document.querySelector('#user-choice');
let computerChoiceResult =   document.getElementById('computer-choice');
let gameResult = document.querySelector('#result');
let computerBoard = document.querySelector('#computer-score');
let userBoard = document.querySelector('#user-score');
let computerScore= 0;
let userScore = 0;
let MatchesPlayed =0;



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
    MatchesPlayed++;
  checkScore();
}

function checkScore(){
  if (userScore === 2 || computerScore === 2){setTimeout(() => { resetScore()
    
  }, 5000); 
   
    

  }}



  function resetScore(){
    userScore =0; computerScore = 0;userBoard.textContent = userScore; computerBoard.textContent = computerScore}
  



