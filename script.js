/**
 * Guess The Number Game
 * Done:  TODO: Get user value from input and save it to variable numberGuess
 * Done:  TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done:  TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done:./TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done:  TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done:  TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done:  TODO: Save the guess history in a variable called guesses
 * Done:  TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses=[];
// Variable for store the correct random number 
let correctNumber =getRandomNumber();
//console.log(correctNumber);

window.onload = function() {    //window.onload use to perform some task as soon as page finishes  loading
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame) ;  //addEventListener tell js to call playGame
    //getRandomNumber();
    //showYouWon();
  }

/**
 * Functionality for playing the whole game
 */
function playGame(){    //main logic
  // *CODE GOES BELOW HERE *
  //numberGuess is user input number
  let numberGuess=document.getElementById('number-guess').value;
  
  ResetResult=displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
 
}


/**
 * Show the result for if the guess it too high, too low, or correct 
 */

function displayResult(numberGuess){            //numberGuess is a local veriable of function playGame                                         
  if(numberGuess>correctNumber){                //to access it we are going to pass as paramers
    //console.log("Your guess is too high");
    showNumberAbove();
  }else if(numberGuess<correctNumber){
    //console.log("Your guess is too low")
    showNumberBelow();
  }
  else if(numberGuess==correctNumber)
  {
    //console.log("Your guess is correct");
    showYouWon();
  }

}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  //reset correctNumber
  correctNumber =getRandomNumber();
  //reset the result
  document.getElementById("result").innerHTML="";
  //reset the guesses array
  guesses=[];
  //reset the guess histoy diplay
  //displayHistory();
  document.getElementById("history").innerHTML ="";
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *

  let  randomNumber=Math.random();//math.random is exclusive(1) it retun till 0.999=99
  let  wholeNumber=Math.floor(randomNumber*100+1); //so to convert into total 100 add 1
  //console.log(randomNumber);
  //console.log(wholeNumber);
  return wholeNumber;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  
}

/**
 * Display guess history to user
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 */
function displayHistory() {
  let index=guesses.length-1; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  
 while(index>=0){
   list+="<li class='list-group-item'>"+ 
   "You guessed"+guesses[index]+"</li>";
   index-=1;
 }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      //alert alert-warning is a bootstrap alert type after using that it gave us alrt in green color

      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      //alert alert-success is a bootstrap alert type after using that it gave us alrt in green color
      
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){      //display dinamically you win in min page
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  // *CODE GOES BELOW HERE *
  let dialog=getDialog('won',text);
  //console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){   //display dinamically to hight in min page
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog 
   */
  
  let dialog=getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){   //display dinamically to low in min page
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */

  let dialog=getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}
