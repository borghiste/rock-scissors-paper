import { displayRules } from "./modules/display.js";

// dichiarazioni variabili globali
let submit = document.querySelector('#begin');
 
let btnContainer = document.querySelector('#btn-container');
let matches=document.querySelector('matches');


let computerScore= 0;
let userScore = 0;
let MatchesWonbyUser =0;
let MatchesWonbyComputer = 0;
let h2 = document.querySelector('h2')


let userChoiceResult = document.getElementById('user-choice');
let computerChoiceResult =   document.getElementById('computer-choice');
let gameResult = document.getElementById('result');
let outcome =document.getElementById('outcome');
let modalContainer = document.querySelector('#modal-container');
let modal = document.querySelector('#modal')


const choices = {
    rock: {
      rock: 'tie',
      scissors: 'win',
      paper: 'lose'
    },
    scissors: {
      rock: 'lose',
      scissors: 'tie',
      paper: 'win',
    },
    paper: {
      rock: 'win',
      scissors: 'lose',
      paper: 'tie',
    }
}


displayRules()











// variabili



let inputField = document.querySelector('input');



let MatchesDisplayer= document.querySelector('#matches-displayer');

let MatchesCounter = 1;

let MatchesCounterinHTML= document.querySelector('#matches-counter');


let MatchesChoice= 0;
// click sul button container
// TODO
// sistemare id btn-container
btnContainer.addEventListener('click', (e)=>{Checker(e.target.id)})


  
function Checker(input){

    const computerChoices=['paper','scissors','rock']
    let computerChoice = computerChoices[Math.floor(Math.random())*3];
    computerChoiceResult.textContent = computerChoice;
    userChoiceResult.textContent = input;
    }



function hideModal() {
    modalContainer.style.display='none';
    modal.textContent='';
}
function checkMatches() {if (MatchesChoice === 0){ modal.innerText='';let paragraph = document.createElement('p')
                                        paragraph.innerText='end of matches';
                                        console.log('fine dei match')
                                        modal.append(paragraph);
                                        modalContainer.style.display='flex';
}
}

function hideinputandSubmitButton(){inputField.style.display='none';
                                        submit.style.display='none';
}

function showMMatchesDisplayer(){MatchesDisplayer.style.display='flex'}


























