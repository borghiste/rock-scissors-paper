
let modalContainer = document.querySelector('#modal-container');






// all'inizio del gioco mostro le regole nella modale, la modale contiene una lista con elementi li e un bottone  che se premuto fa sparire la modale
function displayRules(){modalContainer.style.display= ('flex');
    let welcome = document.createElement('h3')
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

begin.textContent='OK,LET\'S START!';
modal.append(begin)


}


// funzione per nascondere la modale
function hideModal(){
    modalContainer.style.display='none';
    modal.textContent='';
}
// funzione per la scelta del numero di match da giocare e conseguente mostra  della scelta nella m0odale
function MatchesChose(input){modal.innerHTML='';let string = document.createElement('p');
string.textContent=`you'll play ${input} matches`;
modal.append(string);
modalContainer.style.display = 'flex';
let MatchesChoice = input;

}





export {displayRules,hideModal,MatchesChose}