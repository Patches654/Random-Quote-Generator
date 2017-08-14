// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global Variables
var randomQuote
var Num

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
  return;
}
