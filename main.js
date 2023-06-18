import { getQuote } from "./api.js";

async function processQuote() {
    try {
        const quoteData = await getQuote();
        addQuote(quoteData);
    } catch (e) {
        console.log(e);
    }
}

function addQuote(quote) {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.textContent = quote.text;
}

processQuote();