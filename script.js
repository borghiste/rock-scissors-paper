import { displayRules,hideModal,MatchesChose } from "./modules/display.js";

// dichiarazioni variabili globali
let submit = document.querySelector('#begin');
let inputField = document.querySelector('input');
let btnContainer = document.getElementById('btn-container');
let matches=document.querySelector('matches');

submit.addEventListener('click',()=>{MatchesChose(inputField.value);console.log(inputField.value)})




let computerScore= 0;

let MatchesWonbyUser =0;
let MatchesWonbyComputer = 0;
let h2 = document.querySelector('h2')





let outcome =document.getElementById('outcome');
let modalContainer = document.querySelector('#modal-container');
let modal = document.querySelector('#modal')




displayRules()
modalContainer.addEventListener('click', ()=>{hideModal()})









// variabili







let MatchesDisplayer= document.querySelector('#matches-displayer');

let MatchesCounter = 1;

let MatchesCounterinHTML= document.querySelector('#matches-counter');


let MatchesChoice= 0;




 



  










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

function showMatchesDisplayer(){MatchesDisplayer.style.display='flex'}


























