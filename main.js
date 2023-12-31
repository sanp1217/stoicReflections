import { getQuote } from "./api.js";

let quotes = [];
let storedDate = localStorage.getItem("quoteDate");
let today = new Date();

function loadQuotes(){
    const storedQuotes = localStorage.getItem("quotes");
    if(storedQuotes){
        quotes = JSON.parse(storedQuotes);
    }
}

async function processQuote() {
    try {
        if (dayPassed()) {
            const quoteData = await getQuote();

            localStorage.setItem("quoteDate", today);

            storeQuote(quoteData);
            addQuote(quoteData);
        } else {
            const quoteData = JSON.parse(localStorage.getItem("quoteData"));
            addQuote(quoteData);
        }
    } catch (e) {
        console.log(e);
    }
}

function storeQuote(quoteData){
    let quote = {
                quote: quoteData.text,
                author: quoteData.author
            };

    if(isDuplicate(quote)){
        processQuote();
    }

    quotes.push(quote);

    localStorage.setItem("quotes", JSON.stringify(quotes));
    localStorage.setItem("quoteData", JSON.stringify(quoteData));
}

//Add quote and author to DOM.
function addQuote(quoteData) {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.textContent = quoteData.text;

    const authorDiv = document.getElementById('author');
    authorDiv.textContent = "-" + quoteData.author;
}

function dayPassed() {
    //If the date hasn't been recorded or stored date doesn't equal
    //updated date.
    if (storedDate === null || new Date(storedDate).getDate() !== today.getDate()) {
        return true;
    } else {
        return false;
    }
}

function isDuplicate(quoteToAdd){
    return quotes.some(quote => quote.quote === quoteToAdd); 
}

loadQuotes();
processQuote();
