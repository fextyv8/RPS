document.getElementById('startGame').addEventListener('click', function() {
    // get the inputs
    const optionsGame = ['Rock', 'Paper', 'Scissors'];
    const playerInput = document.getElementById('playerChoice');
    const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
    const botChoiceDisplay = document.getElementById('botChoiceDisplay');
    const result = document.getElementById('result');

    // obtain random bot choice
    const bot = optionsGame[Math.floor(Math.random() * 3)];

    // obtain player choice
    const playerChoice = playerInput.value.trim().charAt(0).toUpperCase() + playerInput.value.trim().slice(1).toLowerCase();

    // validate the player choice
    if (!optionsGame.includes(playerChoice)) {
        result.textContent = 'Please choose Rock, Paper or Scissors';
        playerChoiceDisplay.textContent = '';
        botChoiceDisplay.textContent = '';
        return;
    }

    // calculate the logic
    playerChoiceDisplay.textContent = playerChoice;
    botChoiceDisplay.textContent = bot;
    if ((playerChoice == 'Rock' && bot == 'Paper') || (playerChoice == 'Paper' && bot == 'Scissors') || (playerChoice == 'Scissors' && bot == 'Rock')) {
        result.textContent = 'Computer Won!';
    }
    else if ((playerChoice == 'Rock' && bot == 'Scissors') || (playerChoice == 'Paper' && bot == 'Rock') || (playerChoice == 'Scissors' && bot == 'Paper')) {
        result.textContent = 'Player Won!';
    }
    else {
        result.textContent = 'Its a tie!';
    }
});