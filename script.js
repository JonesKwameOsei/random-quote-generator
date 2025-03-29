// Get reference to DOM elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Initalise and assign quotes data to empty array
let apiQuotes = [];


/**
 * Displays the loader and hides the quote container
 */

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

/**
 * Hides the loader and shows the quote container
 */
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

/**
 * Selects a random quote from the apiQuotes array and logs it to the console
 */
function newQuote() {
  showLoadingSpinner();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if Author: Firstname Lastname is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // Set quote, hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Get Quotes from API
async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    let attempts = 0;
    while (attempts < 10) {
      attempts++;
      getQuotes();
    }
    if (attempts >= 10) {
      alert('Error occurred. Please try again later.');
    }
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank'); // Open in new tab
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();
// loading();