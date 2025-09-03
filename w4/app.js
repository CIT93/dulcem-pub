// prompt used for ChatGPT to help me connect the dots:
//Please explain to me in simple terms how do I make my JS connect to my HTML. Here is my code, am I missing any steps? 
// If I am, explain why and the reason why it's important

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
