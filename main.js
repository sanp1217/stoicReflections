import { getQuote } from "./api.js";

let quotes = [];
let storedDate = localStorage.getItem("quoteDate");
let today = new Date();

document.addEventListener("DOMContentLoaded", () => {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
});

async function processQuote() {
    try {
        if (dayPassed()) {
            const quoteData = await getQuote();

            let quote = {
                quote: quoteData.text,
                author: quoteData.author
            };
            quotes.push(quote);

            localStorage.setItem("quotes", JSON.stringify(quotes));
            localStorage.setItem("quoteData", JSON.stringify(quoteData));
            localStorage.setItem("quoteDate", today);

            addQuote(quoteData);
        } else {
            const quoteData = JSON.parse(localStorage.getItem("quoteData"));
            addQuote(quoteData);
        }
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

function dayPassed() {
    if (storedDate === null || new Date(storedDate).getDate() !== today.getDate()) {
        return true;
    } else {
        return false;
    }
}

processQuote();