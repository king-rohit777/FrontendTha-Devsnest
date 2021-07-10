const quote = document.getElementById('quoteText');
const author2 = document.getElementById('authorText');
const button = document.getElementById('event');

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()

    quote.textContent = data.content;
    author2.textContent = `${data.author}`;
  };
  

  button.addEventListener('click',()=>{
    randomQuote();
  })

