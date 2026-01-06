// Function to simulate a dice roll returning a random number between 1 and 6
function rollDice(){
    // Math.random() generates a number between 0 and 1
    // Multiply by 6 to get a range of 0-6
    // Math.ceil() rounds up to ensure we get 1-6 (never 0)
    return Math.ceil(Math.random() * 6)
}

// Call the rollDice function and display the result
console.log(`Dice Rolled is : ${rollDice()}`); // Example output: 3