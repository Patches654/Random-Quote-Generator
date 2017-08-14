// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Global Variables
var randomQuote
var Num
var quoteList

// Array & Objects
quotes = [
  {
    quote: "We all go a little mad sometimes",
    source: "Anthony Perkins",
    citation: "Pshyco",
    year: 1960
  },
  {
    quote: "Shaken - Not stirred",
    source: "Sean Connery",
    citation: "James Bond",
    year: 1964
  },
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore",
    source: "Judy Garland",
    citation: "The Wizard of Oz",
    year: 1939
  },
  {
    quote: "Wax On, Wax Off",
    source: "",
    citation: "The Karate Kid",
    year: 1984
  },
  {
    quote: "What we think, we become",
    source:"Buddah",
    citation: "",
    year: 0
  }
];


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

function printQuote(quoteList){
  var quoteObj = getRandomQuote(randomQuote);
  return quoteObj;
}

// Entry Point
printQuote(quoteList);
