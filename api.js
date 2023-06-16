const apiUrl = 'https://stoic-quotes.com/api/quote';

export const getQuote = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}