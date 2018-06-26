var wins = 0;
var tries = 10;

var wordList = {
    word1: "titanic",
    word2: "friday",
    word3: "clueless",
    word4: "swingers",
    word5: "terminator",
    word6: "matrix",
    word7: "juice",
    word8: "scream",
    word9: "fargo",
    word10: "heat",
    word11: "goodfellas",
    word12: "seven"
};

var wordOptions = [wordList.word1, wordList.word2, wordList.word3, wordList.word4,
wordList.word5, wordList.word6, wordList.word7, wordList.word8, wordList.word9,
wordList.word10, wordList.word11, wordList.word12];

function setUpEvents() {

    //Variables
    var randomWord;
    var userGuess = "";
    var dash = "";
    var underscore = [];
    var answer = "";
    var keys = [];
    var final = "";
    var last = keys[keys.length - 1];
    var indexTwo = [];

    //For loop Variables
    var i;
    var k;
    var l;

    // Random Word Picker
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    //Underscore length
    for (k = 0; k < randomWord.length; k++) {
        dash = "_";
        underscore.push(dash);
    }

    //Underscore Output
    document.getElementById("game").innerHTML = underscore.join('  ');

    //Tries
    document.getElementById("tries").innerHTML = tries;

    // Wins
    document.getElementById("wins").innerHTML = wins;

    //on key up function
    document.onkeyup = function (event) {

        userGuess = event.key;

        //No duplicate letters
        function letterChecks(arr) {
            var keyArray = []
            for (l = 0; l < arr.length; l++) {
                if (keyArray.indexOf(arr[l]) == -1) {
                    keyArray.push(arr[l])
                }
            }
            return document.getElementById("letters").innerHTML = keyArray.join('  ');
        }

        keys.push(event.key);
        letterChecks(keys);

        for (i = 0; i < randomWord.length; i++) {
            document.getElementById("tries").innerHTML = tries;
            
            if (userGuess == randomWord.charAt(i)) {

                underscore[i] = userGuess;
                
                answer = underscore.join("  ");

                document.getElementById("game").innerHTML = answer;

                if (underscore.indexOf("_") >= 0) {

                } else {
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
                    tries = 10;
                    setUpEvents();

                }
            }
        }

        //Tries decremented
        if (userGuess !== underscore[randomWord.indexOf(userGuess)]) {
            
            if (underscore.indexOf(userGuess) === -1) {
                tries--;
                document.getElementById("tries").innerHTML = tries;

                if (tries === 0) {
                    tries = 10;
                    setUpEvents();
                }
            }
        }
    };
}

for (q = 0; q < (wordOptions.length + 10); q++) {
    window.onload = function () {
        setUpEvents();
    };
}