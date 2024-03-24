#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generate random numbers

// user input for guessing number

// compare user input with computer generated numbers

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess number between 1-10; ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congrualtions! you guessed right number.");

}else{
    console.log("You guessed wrong number");
}




