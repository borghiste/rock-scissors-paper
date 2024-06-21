let userChoiceResult = document.querySelector('#user-choice');
let computerChoiceResult =   document.getElementById('computer-choice');
let gameResult = document.querySelector('#result');
let computerBoard = document.querySelector('#computer-score');
let userBoard = document.querySelector('#user-score');
let computerScore= 0;
let userScore = 0;



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
console.log(choices);



function checker(input){

    const computerChoices = ['paper', 'scissors', 'rock'];
    
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
   
    console.log('computer choice', computerChoice);
    
    userChoiceResult.textContent = input;
    
    computerChoiceResult.textContent = computerChoice;
    
    
    switch (choices[input][computerChoice]){
      case('win'):
        gameResult.textContent = 'YOU WIN!';
        userScore++;
        userBoard.textContent = userScore;
      break;
      case('lose'):
        gameResult.textContent = 'you lose:(';
        computerScore++;
        computerBoard.textContent = computerScore;
      break;
     default: console.log('pareggio');
        
  
    }
}

