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
    year: 'cica 4th century B.C.E.',
    profession: 'Philosopher',
    birthYear: '601 B.C.E.',
    born: 'China',
    deathYear: '531 B.C.E.',
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
  {
    quote: 'Imagination will often carry us to worlds that never were. But without it we go nowhere',
    source: 'Carl Sagan',
    citation: 'Cosmos',
    year: 1980,
    profession: 'Scientist',
    birthYear: 1934,
    born: 'United States',
    deathYear: 1996,
    category: 'Imagination'
  },
  {
    quote: 'Nonsense wakes up the brain cells. And it helps develop a sense of humor, which is awfully important in this day and age. Humor has a tremendous place in this sordid world. It\'s more than just a matter of laughing.',
    source: 'Dr. Seuss',
    citation: 'Author Isn\'t Just a Cat in the Hat: The Los Angeles Times',
    year: 1983,
    profession: 'Author',
    birthYear: 1904,
    born: 'United States',
    deathYear: 1991,
    category: 'Imagination'
   },
   {
    quote: 'They who dream by day are cognizant of many things which escape those who dream only by night.',
    source: 'Edgar Allen Poe',
    citation: 'Eleonora',
    year: 1841,
    profession: 'Poet',
    birthYear: 1809,
    born: 'United States',
    deathYear: 1849,
    category: 'Imagination'
  },
  {
    quote: 'No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man.',
    source: 'Heraclitus',
    citation: 'as quoted by Plato in Cratylus',
    year: 'circa 360 B.C.E.',
    profession: 'Philosopher',
    birthYear: '544 B.C.E.',
    born: 'Greece',
    deathYear: '483 B.C.E.',
    category: 'Experience'
  },
  {
    quote: 'Be brave. Take risks. Nothing can substitute experience.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: 1988,
    profession: 'Novelist',
    birthYear: 1947,
    born: 'Brazil',
    deathYear: '',
    category: 'Experience'
  },
  {
    quote: 'We shall not grow wiser before we learn that much that we have done was very foolish.',
    source: 'Friedrich August von Hayek',
    citation: 'The Road to Serfdom',
    year: 1944,
    profession: 'Economist',
    birthYear: 1899,
    born: 'Austria',
    deathYear: 1992,
    category: 'Experience'
  }
];

// set empty array to store used quotes
var usedQuotes = [];

// SET UP FUNCTION TO RAMDONLY SELECT QUOTES
function getRandomQuote() {

  // get index number by mulitplying the random number by quote length
    // keeping it flexible and easily updatable by using the quote.length property
  var quoteIndex = Math.floor(Math.random() * quotes.length)

  // set a variable to hold the random quote
  var randomQuote = quotes[quoteIndex];

  // remove quote from main varialbe to used variable.

  quotes.splice(quoteIndex, 1);

  usedQuotes.push(randomQuote);

  // check to see if quotes array is empty... if so make it equal to used quotes and make that empty
  if (quotes == '') {
    quotes = usedQuotes;
    usedQuotes = [];
  }

  console.log('used quote array length: ' + usedQuotes.length);
  console.log('quote array length: ' + quotes.length);


  // return the random quote
  return randomQuote;
}

// SET UP FUNCTION TO RANDOMLY GENERATE BACKGROUND-COLOR
function randomColor() {
  // set Math.random to generate colors dark enough not to mess with white font of quote
  // I chose 176 to keep the potential for bright colors from randomly being generated
  // keeps consistency of white font without hapening readability
  var rgbValue = Math.floor((Math.random() * 176))
  return rgbValue;
}


// SET UP printQuote FUNCTION FOR EVENT LISTENER
function printQuote() {
  // save reference to quote element in a variable
  var quoteSpace = document.getElementById('quote-box');
  // set random quote in variable
  var newQuote = getRandomQuote();
  // start writing the html for quote based on avilable properties of array values
  var quoteHTML = '<p class="quote">' + newQuote.quote + '</p>';
  quoteHTML += '<p class="source">' + newQuote.source + '</p>';
  // set truthy statement to set citaion if available
  if (newQuote.citation) {
    quoteHTML += '<span class="citation">' + newQuote.citation + '</span>';
  }
  // set truthy statement for year if available
  if (newQuote.year) {
    quoteHTML += '<span class="year">' + newQuote.year + '</span>';
  }
  // set truthy statement for category if available
  if (newQuote.category) {
    quoteHTML += '<span class="category">' + newQuote.category + '</span>';
  }
  // set truthy statement for professionif available creating a new author box to control css
  if (newQuote.profession) {
    quoteHTML += '<div class="author-box"><p class="profession">' + newQuote.profession + '</p>';
  }
  // set truthy statement for birth year and country if available included together intentionally
  if (newQuote.birthYear && newQuote.born) {
    quoteHTML += '<p class="born">' + newQuote.birthYear + ' in ' + newQuote.born + '<p>';
  }
  // set truthy statement for year of death.. kept separate from birth due to authors still living
  if (newQuote.deathYear) {
    quoteHTML += '<p class="death">' + newQuote.deathYear + '</p>';
  }
  // end <div> for my athor box
 quoteHTML += '</div>'
  // write completed html to page via innerHTML
  document.getElementById('quote-box').innerHTML = quoteHTML;
  // setting random background-color
  // seting r value
  var rValue = randomColor();
  // setting g value
  var gValue = randomColor();
  // setting b value
  var bValue = randomColor();
  // compile the color into a new rgbaValue
  var newColor = 'rgba(' + rValue + ',' + gValue + ',' + bValue + ', 1)';
  // set the background to  new color
  $('#body').css('background-color', newColor);
  // set the loadQuote button to the same color for consistency
  $('#loadQuote').css('background-color', newColor);
}

// setInterval(printQuote, 15000);
