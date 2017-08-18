// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global Variables
var randomQuote
var Num
var colourPicker = [];
var autoTimer
var theArray = [];

// Functions

// returns a random quote from the quotes array
function getRandomQuote(randomQuote){
theArray=[];
    // Fill the Array with 5 random numbers
  for (y=0; y < 5; y++){
  var randomNumber = getRandomNumber(Num);
  theArray.push(randomNumber);
}
// iterate throught the array and look for duplicates
console.log(theArray);
for (x = 0; x < theArray.length; x++){
  for (i = 1; i < theArray.length - 1; i++){
      if (theArray[0] === theArray[i]){
        console.log("found Duplicate " + theArray[i]);
        theArray.splice(i,1);
        var randomNumber = getRandomNumber(Num);
        theArray.push(randomNumber);
        console.log("Duplicate removed, new array is " + theArray)
      }

      // If no duplicates found TODO

    }
     var popped = theArray.pop(5);
     theArray.unshift(popped);
    }
    var theQuote = quotes[randomNumber];
    return theQuote;
}

// returns a random number
function getRandomNumber(Num){
  var RNDNumber = Math.floor((Math.random() * 4) + 1);
  return RNDNumber;
}

// gets 3 numbers for RGB and stores them in an array
function getRandomColourNumber(){
  colourPicker.length = 0;
  for (i = 0; i < 3; i++){
    var randomNumber = Math.floor((Math.random() * 254) + 1);
    colourPicker.push(randomNumber);
    }
return;
}

// change the backgound colour
function backgroundColour(){
  getRandomColourNumber();
  var myElement = document.querySelector("body");
  myElement.style.backgroundColor = "rgb(" + colourPicker + ")";
  return;
}

// prints the random quote to the index.hmtl
function printQuote(){

  var quoteObj = getRandomQuote(randomQuote);

  console.log(quoteObj);

  var quoteString = '<p class="quote">' + quoteObj.quote + '</p>';
  quoteString += '<p class="source">' + quoteObj.source;

  if (quoteObj.citation !== undefined) {
  quoteString +=  '<span class="citation">' + quoteObj.citation + '</span>';
}
  if (quoteObj.year !== undefined) {
  quoteString +=  '<span class="year">' + quoteObj.year + '</span></p>'
}
  document.getElementById("quote-box").innerHTML = quoteString;

  backgroundColour();

  return;
}

// automatically runs random quote every 30seconds...
autoTimer = setInterval(printQuote, 30000);
