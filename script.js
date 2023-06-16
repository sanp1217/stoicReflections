let quote;
let author;
const apiUrl = 'https://stoic-quotes.com/api/quote';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Handle the API response data here
        quote = data.text;
        author = data.author;
    })

    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    });