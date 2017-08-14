// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Global Variables
var randomQuote
var Num
var quoteList

// Functions
function getRandomQuote(randomQuote){
  var randomNumber = getRandomNumber(Num);
  var theQuote = quotes[randomNumber];
  return theQuote;
}

function getRandomNumber(Num){
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  return randomNumber;
}

function printQuote(){
  var quoteObj = getRandomQuote(randomQuote);
  console.log(quoteObj);

  var quoteString = '<p class="quote">' + quoteObj.quote + '</p>';
  quoteString += '<p class="source">' + quoteObj.source;
  quoteString +=  '<span class="citation">' + quoteObj.citation + '</span>';
  quoteString +=  '<span class="year">' + quoteObj.year + '</span></p>'

document.getElementById("quote-box").innerHTML = quoteString;
  return;
}
