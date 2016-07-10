// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// SET UP quotes ARRAY TO HOLD OBJECTS TO BE FILLED IN WITH QUOTES
//// This will make it easy to access a randomized [i].property to fill the page with a
//// consisten quote and use truthy values to only choose a property if it is ([i].propery != '') :)

var quotes = [
  {
    quote: 'Life is a series of natural and spontaneous changes. Don\'t resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'cica 4th century BC',
    profession: 'Philosopher',
    birthYear: '601 BC',
    born: 'China',
    deathYear: '531 Bc',
    category: 'Life'
  },
  {
    quote: 'The most important thing is to enjoy your life - to be happy - it\'s all that matters.',
    source: 'Audry Hepburn',
    citation: 'Audrey Hepburn\'s Enchanted Tales',
    year: 1992,
    profession: 'Actress',
    birthYear: 1929,
    born: 'Belgium',
    deathYear: 1993,
    category: 'Life'
  },
  {
    quote: 'We do not remember days, we remember moments',
    source: 'Cesare Pavase',
    citation: 'This Business of Living',
    year: 1940,
    profession: 'Poet',
    birthYear: 1908,
    born: 'Italy',
    deathYear: 1950,
    category: 'Life'
  },
];


// SET UP FUNCTION TO RAMDONLY SELECT QUOTES
function getRandomQuote() {
  // get index number by mulitplying the random number by quote length
    // keeping it flexible and easily updatable by using the quote.length property
  var quoteIndex = Math.floor(Math.random() * quotes.length)
  // set a variable to hold the random quote
  var randomQuote = quotes[quoteIndex];
  // return the random quote
  return randomQuote;
}


// SET UP printQuote FUNCTION FOR EVENT LISTENER
function printQuote() {
  var quoteSpace = document.getElementById('quote-box');
  var newQuote = getRandomQuote();
  var quoteHTML = '<p class="quote">' + newQuote.quote + '</p>';
  quoteHTML += '<p class="source">' + newQuote.source + '</p>';
  if (newQuote.citation !== '') {
    quoteHTML += '<span class="citation">' + newQuote.citation + '</span>';
  }
  if (newQuote.year !== '') {
    quoteHTML += '<span class="year">' + newQuote.year + '</span>';
  }
  if (newQuote.category !== '') {
    quoteHTML += '<span class="category">' + newQuote.category + '</span>';
  }
  if (newQuote.profession !== '') {
    quoteHTML += '<div class="author-box"><p class="profession">' + newQuote.profession + '</p>';
  }
  if (newQuote.birthYear !== '' && newQuote.born !== '') {
    quoteHTML += '<p class="born">' + newQuote.birthYear + ' in ' + newQuote.born + '<p>';
  }
  if (newQuote.deathYear !== '') {
    quoteHTML += '<p class="death">' + newQuote.deathYear + '</p>';
  }
quoteHTML += '</div>'
  document.getElementById('quote-box').innerHTML = quoteHTML;
}

// DON'T FORGET ABOUT THE EXTRA CREDIT
