const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText= document.getElementById('author')
const twitterBtn= document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')



let apiQuotes = [];
// show new quote
function newQuote(){
    // Pick a random quote from apiquote array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // check if author is null
    if (!quote.author){
        authorText.textContent = 'Unknown';

    } else{
        authorText.textContent=quote.author;
    }
    //check quote length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote')

    } else {
        quoteText.classList.remove('long-quote')
    }


    quoteText.textContent = quote.text
}

// Get quotes From Api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        
    } catch (error) {
        
    }
}


// tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)





getQuotes();