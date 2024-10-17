function getComputerChoice(array){
    return array[Math.floor(array.length * Math.random())];
};



//let playerSelection  = prompt ('Choose Rock Paper or Scissors');

let playerScoreCount = 0;
let computerScoreCount = 0;
let finalRoundScore;


function gameRound(playerSelection, computerSelection){
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    let result = '';
    let playerScore = 0;
    let computerScore = 0;
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'rock'){
                result = "It's a tie";
                computerScoreCount++;
                playerScoreCount++;
            }
            
            
            else if(computerChoice == 'paper'){
                result = 'You Lose! Paper beats Rock';
                computerScoreCount++;
            }
            

            else{
                result = 'You Win! Rock beats Scissors';
                playerScoreCount++;
            }
            
        break;

        case 'paper':
            if (computerChoice == 'rock'){
                result = "You win! Paper beats Rock";
                playerScoreCount++;
            }
           
            
            else if(computerChoice == 'paper'){
                result = "It's a tie!";
                playerScoreCount++;
                computerScoreCount++;
            }
            

            else{
                result = 'You Lose! Scissors beats Paper';
                computerScoreCount++;
            }
            
        break;

        case 'scissors':
            if (computerChoice == 'rock'){
                result = "You Lose! Rock beats Scissors";
                computerScoreCount++;
            }
            
            
            else if(computerChoice == 'paper'){
                result = 'You Win! Scissors beats Paper';
                playerScoreCount++;
            }
            

            else{
                result = "It's a tie!";
                playerScoreCount++;
                computerScoreCount++;
            }
            
        break;
    }

    let finalScore = [result, playerScoreCount, computerScoreCount];
    return finalScore;

};



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
        let playerSelection  = 'rock'; //choose rock as the selection when the user clicks on the rock button
        let computerSelection = getComputerChoice(['rock', 'paper', 'scissors']);  //computer makes selection here
        finalRoundScore = gameRound(playerSelection, computerSelection);    //determine the score for the round

        //add result to DOM
        //display.textContent = 'You chose '+playerSelection+ ' Computer chose '+computerSelection;
        //console.log(finalRoundScore[0]);
        //playerScoreCount = playerScoreCount + finalRoundScore[1];
        //console.log(finalRoundScore[2]);
        //computerScoreCount = computerScoreCount + finalRoundScore[2];
       

        display.textContent = finalRoundScore[0] + ' you chose: '+playerSelection+' computer picked: '+computerSelection+ ' the score for you is now: ' +playerScoreCount+ " and computer's score is: "+computerScoreCount;
        

    });

    paperButton.addEventListener('click', () =>
    {
        let playerSelection  = 'paper';
        let computerSelection = (getComputerChoice(['rock', 'paper', 'scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);
        //add result to DOM
        //display.textContent = 'You chose '+playerSelection+ ' Computer chose '+computerSelection;
        //console.log(finalRoundScore[0]);
        //playerScoreCount = playerScoreCount + finalRoundScore[1];
        //console.log(finalRoundScore[2]);
        //computerScoreCount = computerScoreCount + finalRoundScore[2];
       

        display.textContent = finalRoundScore[0] + ' you chose: '+playerSelection+' computer picked: '+computerSelection+ ' the score for you is now: ' +playerScoreCount+ " and computer's score is: "+computerScoreCount;
        

    });

    scissorsButton.addEventListener('click', () =>
    {
        let playerSelection  = 'scissors';
        let computerSelection = (getComputerChoice(['rock', 'paper', 'scissors']));
        finalRoundScore = gameRound(playerSelection, computerSelection);
        //add result to DOM
        //display.textContent = 'You chose '+playerSelection+ ' Computer chose '+computerSelection;
        //console.log(finalRoundScore[0]);
        //playerScoreCount = playerScoreCount + finalRoundScore[1];
        //console.log(finalRoundScore[2]);
        //computerScoreCount = computerScoreCount + finalRoundScore[2];
        

        display.textContent = finalRoundScore[0] +' you chose: '+playerSelection+' computer picked: '+computerSelection+ ' the score for you is now: ' +playerScoreCount+ " and computer's score is: "+computerScoreCount;
        
    });

    //add buttons to DOM
    const buttonCollection = document.querySelector('#container');  //select where the buttons will be, use the id as reference
    buttonCollection.appendChild(rockButton);
    buttonCollection.appendChild(paperButton);
    buttonCollection.appendChild(scissorsButton);

    //add div for displaying results
    const display = document.createElement('div');

    //add div to DOM
    const divSpace = document.querySelector('#container');
    divSpace.appendChild(display);
    
    if (playerScoreCount ==5 || computerScoreCount == 5){
        return false;
    }
    
    

}


