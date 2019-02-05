//required connections
var Word = require("./Word.js");
var inquirer = require("inquirer");

//array of possible letters to be used
var letterarray = "abcdefghijklmnopqrstuvwxyz";

//array of possible word options
var Crypto = [
    "Bitcoin",
    "Litecoin",
    "Ripple",
    "Ethereum",
    "ZCash",
    "EOS",
    "Tether",
    "Cardano",
    "Monero",
    "TRON",
    "Stellar"
];

//random loop
var RandomWord = Math.floor(Math.random() * Crypto.length);

//pulling the random word and storing it in a variable
var RandomCrypto = Crypto[RandomWord];

//create random generated word adn store it in new word from Word.js file
var ComputerGeneratedWord = new Word(RandomWord);

var require = false;
var incorrect = [];
var correct = [];

var numofguesses = 10;

function game() {
    if (require) {
        RandomWord = Math.floor(Math.random() * Crypto.length);
        RandomCrypto = Crypto[RandomWord];
        RandomCrypto = Crypto[RandomWord];
        require = false;
    }

    var complete = [];

    if (complete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select a letter [A-Z].",
                name: "userguess"
            }
        ]).then(function (input) {
            //check whether or not a users input is apart of the input array
            if (!letterarray.includes(input.userguess) || input.userguess.length > 1) {
                console.log("\n Try again");
                game();
            } else {
                //check to see if the letter has already been guessed
                if (
                    incorrect.includes(input.userguess) || correct.includes(input.userguess) || input.userguess === ""
                ) {
                    console.log("\nAlready guessed, try again");
                    game();
                } else {
                    ComputerGeneratedWord.guess(input.userguess);
                    ComputerGeneratedWord.letterarray.forEach(wordCheck);
                    if(letterarray.join("") === complete.join("")) {
                        console.log("\nIncorrect|n");

                        incorrect.push(input.userguess);
                    }
                    ComputerGeneratedWord();

                    console.log("Guesses left: " + numofguesses + "\n");

                    console.log("Letters Guessed: " + incorrect.join(" ") + "\n");

                     
                }
            }
        });
    } else {
        console.log("Winner Winner Chicken Dinner\n");
    }
    function complete(key) {
        complete.push(key.guess);
    }
}
