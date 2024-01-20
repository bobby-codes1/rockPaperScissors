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
    

    for(i=1; i<=5; i++){
        let playerSelection  = prompt ('Choose Rock Paper or Scissors');
        let computerSelection = (getComputerChoice(['Rock', 'Paper', 'Scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);
        //playerScoreCount = playerScoreCount + finalRoundScore[1];
        //computerScoreCount = computerScoreCount + finalRoundScore[2];
        playerScoreCount = playerScoreCount + finalRoundScore[1];
        computerScoreCount = computerScoreCount + finalRoundScore[2];
        console.log('You now have '+playerScoreCount+ ' points');
        console.log('Computer now has '+computerScoreCount+ ' points');
        //console.log(finalRoundScore[1]);
    }
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