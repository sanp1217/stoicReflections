import { getQuote } from "./api.js";

async function fetchQuote() {
    try {
        const quoteData = await getQuote();
        console.log(quoteData);
    } catch (e) {
        console.log(e);
    }
}

fetchQuote();