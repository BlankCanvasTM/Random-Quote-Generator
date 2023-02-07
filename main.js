
const url = ('https://api.quotable.io');
const quote = document.getElementById('quote');
const authorText = document.getElementById('author');

function generateRandomQ(){
    fetch('https://api.quotable.io/random').then(response => response.json()).then(data => {
        quote.innerHTML = (data.content);
        authorText.innerHTML = (data.author);
    })
}