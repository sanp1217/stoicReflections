import { getQuote } from "./api.js";

let quotes = [];

document.addEventListener("DOMContentLoaded", () => {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
});

async function processQuote() {
    try {
        const quoteData = await getQuote();

        let quote = {
            quote: quoteData.text,
            author: quoteData.author
        };

        //quotes.push(quote);
        localStorage.setItem("quotes", JSON.stringify(quotes));

        addQuote(quoteData);
    } catch (e) {
        console.log(e);
    }
}

function addQuote(quoteData) {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.textContent = quoteData.text;

    const authorDiv = document.getElementById('author');
    authorDiv.textContent = quoteData.author;
}

processQuote();