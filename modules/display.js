
let modalContainer = document.querySelector('#modal-container');

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
begin.textContent='OK,LET\'S START!'}

function hideModal() {
    modalContainer.style.display='none';
    modal.textContent='';
}


export {displayRules,hideModal}