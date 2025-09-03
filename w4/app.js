// 
console.log('JS is connected and running');

const coolTimeform = document.getElementById(`coolTime`);
const coolTimeNameinput = document.getElementById(`coolTimeName`);
const coolStatementoutput = document.getElementById(`coolStatement`);



const coolSubmit = function(event){
    event.preventDefault();
    console.log(event);
    const name = coolTimeNameinput.value;
    let message = `${name} Alright, alright, alright, alright, alright`;
    coolStatementoutput.textContent = message;
}

const init = function () {
    console.log('App Initialized: DOM is ready! Re-submit');
    coolTimeform.addEventListener(`submit`, coolSubmit);
}

document.addEventListener('DOMContentLoaded', init);
