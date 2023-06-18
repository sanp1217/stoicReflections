import { getQuote } from "./api.js";

async function processQuote() {
    try {
        const quoteData = await getQuote();
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