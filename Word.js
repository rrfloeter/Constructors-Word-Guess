//requires letter file 
var Letter = require("./letter.js");

//word constructor build answer using an object array
function Word(response) {
    this.LetterArray = [];

    //create a for loop per the letter constructor and push it to the letterarray
    for (var i = 0; i < response.length; i++) {
        var letter = new Letter(word[i]);
        this.LetterArray.push(letter);
    }

    //display the data to the terminal
    this.log = function () {
        var answer = "";
        //loop through the object array
        for(var i = 0; i < this.LetterArray.length; i++) {
            answer += this.LetterArray[i] + " ";
        }

        console.log(answer + "\n=====================\n");
    };

    //function that will use the input parameter(users guess)
    this.user = function(input) {
        //loop through the object array
        for(var i = 0; i < this.LetterArray.length; i++) {
            this.LetterArray[i].guess(input);
        }
    };
}

module.exports = Word;