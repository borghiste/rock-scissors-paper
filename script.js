

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


// click sul button container
btnContainer.addEventListener('click',(e)=>{console.log(e);if(e.target.srcElement='BUTTON#SCISSORS'){Checker('scissors');CheckerDisplay()}
                                                        else if (e.target.srcElement='BUTTON#PAPER'){checker('paper')}
                                                        else if (e.target.srcElement='BUTTON#ROCK'){Checker('rock')}})


// mostrare regole nella modale

displayModal()
displayRules()





// al click sulla finestra si nasconde la modale
 window.addEventListener('click',(e)=>{if (e.target == modalContainer ) {hideModal()}})
 



submit.addEventListener('click',()=>{MatchesChoiceonModal();hideinputandSubmitButton();showMMatchesDisplayer()})

countMatch()



// variabili



let inputField = document.querySelector('input');



let MatchesDisplayer= document.querySelector('#matches-displayer');

let MatchesCounter = 1;

let MatchesCounterinHTML= document.querySelector('#matches-counter');


let MatchesChoice= 0;



function displayRules(){let welcome = document.createElement('h3')
welcome.textContent='WELCOME';
modal.append(welcome);
let rules = document.createElement('ul');
modal.append(rules);
let rule1 = document.createElement('li');
rule1.textContent='select the number of matches you wanna play';
rules.append(rule1);
let rule2 = document.createElement('li');
rule2.textContent= 'A match ends when the player or the computer reaches 20 points';
rules.append(rule2);
let begin = document.createElement('button');
begin.textContent='OK,LET\'S START!'}

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

function countMatch(){MatchesCounterinHTML.textContent=MatchesCounter;}
























