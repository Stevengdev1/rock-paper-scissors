  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); //toLowerCase() Is used make sure that the user only types in lowercase.  
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'fire' ) {
    return userInput;
  } else { 
    console.log('Error, please type one the following words: "rock", "paper", "scissors".')
  } 
};

const getComputerChoice = () => {
  const pickRandomNumber = Math.floor(Math.random()* 3);
  switch (pickRandomNumber) {
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
    return 'Game is tied!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, computer won!";
    } else {
      return "You Won!";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === 'fire') {
    return 'Congratulations, you won!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock'); //If we type the cheat code 'fire' here we will always win!
  const computerChoice = getComputerChoice();
  console.log(`You pulled: ${userChoice}`);
  console.log(`The computer pulled: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}


//This game is played by invoking the function playGame()
playGame()








