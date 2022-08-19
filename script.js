'use strict';

console.log(document.querySelector('.guess-message').textContent)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bestResult = 0;

const displayGuessMessage = function(message) {
    document.querySelector('.guess-message').textContent = message;
}


// ПРИ НАЖАТИИ НА КОПКУ ``СНАЧАЛА`` --- КНОПКА СНАЧАЛА --- КНОПКА СНАЧАЛА
document.querySelector(`.again`).addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayGuessMessage('Начни угадывать!');
    document.querySelector('.question').textContent = `???`;
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';
    
})
 

// ПРИ НАЖАТИИ НА КОПКУ ``ПРОВЕРИТЬ`` --- КНОПКА ПРОВЕРИТЬ --- КНОПКА ПРОВЕРИТЬ
document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber)

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 
        'Введите число!'

        // ИГРОК ПОБЕДИЛ --- ИГРОК ПОБЕДИЛ
    } else if (guessingNumber === secretNumber)
        { displayGuessMessage('Поздравляем!');
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').style.width = '50rem';
        if (score > bestResult) {
            bestResult = score;
            document.querySelector('.highscore').textContent = bestResult;
        }
    }
        // НЕВЕРНОЕ ЧИСЛО
    else if (guessingNumber !== secretNumber) {
         if (score > 1) {
            displayGuessMessage(guessingNumber < secretNumber
        ?'Нужно больше' :'Нужно меньше');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            displayGuessMessage('Game over!');
        document.querySelector('.score').textContent = 0}
        }
    })
