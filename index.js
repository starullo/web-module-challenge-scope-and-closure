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
 * In counter1, the varible 'count' is declared within the function. In counter2, 'count' is declared outside of the function, meaning it has global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  counter1 uses a closure. You can tell because the private variable 'count' can still be accessed by counter1, even after counterMaker is done running.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable when you want to make the variable private so you don't accidentally change it's value in your code. 
 * counter2 might be preferable if you only plan on changing the value of 'count' one time.
 *
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

    return Math.floor(Math.random() * 3);

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, num){
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < num; i++) {
    homeScore += cb();
    awayScore += cb();

  }

  return {
    'Home': homeScore,
    'Away': awayScore
  }

}

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


function scoreboard(getInningScore, inning, num) {
  let homeScore = 0;
  let awayScore = 0;
  let i = 1;
  let x;
  while (i <= num) {
  let obj = finalScore(inning, 1);
  homeScore += obj.Home;
  awayScore += obj.Away;
    if (i === 1) {
     x = 'st'; 
     } else if (i === 2) {
     x = 'nd';
     } else if (i == 3) {
     x = 'rd';
     } else if (i === 9) {
  console.log(`9th inning: ${awayScore} - ${homeScore} \n
  Final Score: ${awayScore} - ${homeScore}`);
  break;
     }
console.log(`${i}${x} inning: ${awayScore} - ${homeScore}`);
i++;
}
}



scoreboard(finalScore, inning, 9)
