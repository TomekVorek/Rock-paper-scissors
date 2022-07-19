const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    if (e.target.id === 'kamien') {
        e.target.id = 'Kamień';
        userChoice = e.target.id;
    }
    if (e.target.id === 'nozyce') {
        e.target.id = 'Nożyce';
        userChoice = e.target.id;
    }
    if (e.target.id === 'papier') {
        e.target.id = 'Papier';
        userChoice = e.target.id;
    }
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
        computerChoice = 'Kamień';
    }
    if (randomNumber === 2) {
        computerChoice = 'Nożyce';
    }

    if (randomNumber === 3) {
        computerChoice = 'Papier';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Remis!';
        resultDisplay.style.color = "blue";
        resultDisplay.innerHTML = result;

    }
    if (computerChoice === 'Kamień' && userChoice === 'Papier') {
        result = 'Wygrałeś!';
        resultDisplay.style.color = "green";
        resultDisplay.innerHTML = result;
    }
    if (computerChoice === 'Kamień' && userChoice === 'Nożyce') {
        result = 'Przegrałeś!';
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = result;
    }
    if (computerChoice === 'Papier' && userChoice === 'Nożyce') {
        result = 'Wygrałeś!'
        resultDisplay.style.color = "green";
        resultDisplay.innerHTML = result;
    }
    if (computerChoice === 'Papier' && userChoice === 'Kamień') {
        result = 'Przegrałeś!';
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = result;
    }
    if (computerChoice === 'Nożyce' && userChoice === 'Kamień') {
        result = 'Wygrałeś!';
        resultDisplay.style.color = "green";
        resultDisplay.innerHTML = result;
    }
    if (computerChoice === 'Nożyce' && userChoice === 'Papier') {
        result = 'Przegrałeś!';
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = result;
    }
};