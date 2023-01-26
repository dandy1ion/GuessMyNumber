'use strict';

/*
//Practicing DOM manipulation
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Secret Number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//starting score
let score = 20;
//highscore
let highscore = 0;
//function for displaying message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}; 

//function called when the event happens
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if(!guess) {
        //document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    //When player wins
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        //change background-color (inline change to html not the css)
        document.querySelector('body').style.backgroundColor = '#60b347';
        //change width of number container (inline change to html not the css)
        document.querySelector('.number').style.width = '30rem';
        //highscore check & set
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //When guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    //CODE BEFORE DRY
    //When guess is too high
    //} else if (guess > secretNumber) {
    //    if(score > 1) {
    //        document.querySelector('.message').textContent = 'Too high!';
    //        score--;
    //        document.querySelector('.score').textContent = score;
    //    } else {
    //        document.querySelector('.message').textContent = 'You lost the game!';
    //        document.querySelector('.score').textContent = 0;
    //    }
    //When guess is too low
    //} else if (guess < secretNumber) {
    //    if(score > 1) {
    //        document.querySelector('.message').textContent = 'Too low!';
    //        score--;
    //        document.querySelector('.score').textContent = score;
    //    } else {
    //        document.querySelector('.message').textContent = 'You lost the game!';
    //        document.querySelector('.score').textContent = 0;
    //    }
    //}
});

/////////////////////////CODING CHALLENGE #1//////////////////////////////////////
/*
Implement a game reset functionality, so that the player can make a new game! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color(#222) and number width (15rem)

GOOD LUCK!
*/

document.querySelector('.again').addEventListener('click', function(){
    //restore initial values of score and secretNumber variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //restore the initial conditions of message, number, score and guess
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    //restore original background-color and number width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})