// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global Variables
var randomQuote
var Num
var colourPicker = [];

// Functions

// returns a random quote from the quotes array
function getRandomQuote(randomQuote){
  var randomNumber = getRandomNumber(Num);
  var theQuote = quotes[randomNumber];
  return theQuote;
}

// returns a random number
function getRandomNumber(Num){
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  return randomNumber;
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
