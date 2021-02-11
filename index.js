// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * In counter 1, the variable 'count' is contained in the scope of the function countMaker, and the second,
 * lesser function 'counter()' uses it to add 1 to the varibable 'count' each time the function is used. 
 * The value will build on itself by 1 each time the function runs.
 * 
 * In counter 2, the variable count is in the global scope of the function "counter2".
 * There is no inner function that does anything else to the variable 'count'. Count will reset to 0 after this function's been used. So basically, everytime 'counter2()' is used, the variable will reset to 0. This makes it so it always equlas one after the function is used.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Both of the functions have closure. counter1() and counter2() have access to the elements they need to perform. The first function's variables are inside the function's scope and the second has a global variable in it's scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter1 would be used if you needed to change a number multiple times to get the right outcome.
 * Counter2 would be best if you always wanted the number to start at 0.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let randomNum=Math.round(Math.random()*2);
};
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, inningNum){
  var scores ={};
  let homeTeamGameScore = cb * inningNum;
  let awayTeamGameScore = cb * inningNum;
  scores.Home = homeTeamGameScore;
  scores.Away = awayTeamGameScore;
  return scores;
};

finalScore(inning(), 2);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}

let inningArray=[1, 2, 3, 4, 5, 6, 7, 8, 9];

function scoreboard(cb, inningNum) {
  let scoreByInning = [];
  inningNum.forEach(
    (value, index)=>{
      console.log(`Value per loop: ${value}, Index per loop: ${index}`);
      let awayTeamScore = cb * value;
      let homeTeamScore = cb * inningNum[index];
      scoreByInning.push(` ${inningNum[index]} inning: ${homeTeamScore} - ${awayTeamScore}`)
    }
  )
  return scoreByInning;
}
console.log(scoreboard(inning(), inningArray));


