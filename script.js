function getComputerChoice(array){
    return array[Math.floor(array.length * Math.random())];
};



//let playerSelection  = prompt ('Choose Rock Paper or Scissors');

function gameRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    let result = '';
    let playerScore = 0;
    let computerScore = 0;
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'rock'){
                result = "It's a tie";
            }
            
            
            else if(computerChoice == 'paper'){
                result = 'You Lose! Paper beats Rock';
                computerScore++;
            }
            

            else{
                result = 'You Win! Rock beats Scissors';
                playerScore++;
            }
            
        break;

        case 'paper':
            if (computerChoice == 'rock'){
                result = "You win! Paper beats Rock";
                playerScore++;
            }
           
            
            else if(computerChoice == 'paper')
            result = "It's a tie!";

            else{
                result = 'You Lose! Scissors beats Paper';
                computerScore++;
            }
            
        break;

        case 'scissors':
            if (computerChoice == 'rock'){
                result = "You Lose! Rock beats Scissors";
                computerScore++;
            }
            
            
            else if(computerChoice == 'paper'){
                result = 'You Win! Scissors beats Paper';
                playerScore++;
            }
            

            else
            result = "It's a tie!";
        break;
    }

    let finalScore = [result, playerScore, computerScore];
    return finalScore;

};

let playerScoreCount = 0;
let computerScoreCount = 0;
let finalRoundScore;


//console.log(gameRound(playerSelection, computerSelection));

function game(){
    //create buttons for the options
    const rockButton = document.createElement('button');
    rockButton.textContent = 'rock';
    const paperButton = document.createElement('button');
    paperButton.textContent = 'paper';
    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'scissors';

    


    //add event listeners that call gameRound and select button option
    rockButton.addEventListener('click', () =>
    {
        let playerSelection  = 'rock';
        let computerSelection = (getComputerChoice(['rock', 'paper', 'scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);

        //add result to DOM
        display.textContent = 'You chose '+playerSelection+ ' Computer chose '+computerSelection;
        

    });

    paperButton.addEventListener('click', () =>
    {
        let playerSelection  = 'paper';
        let computerSelection = (getComputerChoice(['rock', 'paper', 'scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);
        console.log(playerSelection);

    });

    scissorsButton.addEventListener('click', () =>
    {
        let playerSelection  = 'scissors';
        let computerSelection = (getComputerChoice(['rock', 'paper', 'scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);
        console.log(playerSelection);

    });

    //add buttons to DOM
    const buttonCollection = document.querySelector('#container');
    buttonCollection.appendChild(rockButton);
    buttonCollection.appendChild(paperButton);
    buttonCollection.appendChild(scissorsButton);

    //add div for displaying results
    const display = document.createElement('div');

    //add div to DOM
    const divSpace = document.querySelector('#container');
    divSpace.appendChild(display);




    
    
    
    playerScoreCount = playerScoreCount + finalRoundScore[1];
    computerScoreCount = computerScoreCount + finalRoundScore[2];
    console.log('You now have '+playerScoreCount+ ' points');
    console.log('Computer now has '+computerScoreCount+ ' points');
    //console.log(finalRoundScore[1]);
    
    if ( playerScoreCount > computerScoreCount ){
        return 'You won with ' +playerScoreCount+ ' points, computer had '+computerScoreCount+ ' points';
    }

    else if ( playerScoreCount == computerScoreCount ){
        return 'You tied with ' +playerScoreCount+ ' points, computer also had '+computerScoreCount+ ' points';
    }

    else{
        return 'You lost with ' +playerScoreCount+ ' points, computer had '+computerScoreCount+ ' points';
    }
}

//console.log(gameRound(playerSelection, computerSelection));

console.log(game());