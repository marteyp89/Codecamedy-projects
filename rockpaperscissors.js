const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
return userInput;
  } else {
console.log('Error, please type: rock, paper or scissors.');
  }
}

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3)
 switch (randomNumber) {

case 0:
return 'rock';
case 1:
return 'paper';
case 2:
return 'scissors';

 }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'YOU win!';
    }

  }
if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } else {
      return 'YOU win!';
    }

    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'YOU win!';
    }
    }
}
}


const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

}

playGame();
