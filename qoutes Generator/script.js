async function getQuote() {
    const quote = document.getElementById('quote-element-id'); // Replace 'quote-element-id' with the actual ID of your quote element
    const author = document.getElementById('author-element-id'); // Replace 'author-element-id' with the actual ID of your author element

    try {
        const response = await fetch("quotes.json"); // ambil file json lokal
        const data = await response.json();

        // pilih quote random
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedQuote = data[randomIndex];

        quote.innerHTML = selectedQuote.q;
        author.innerHTML = selectedQuote.a;
    } catch (error) {
        console.error("Error loading quotes:", error);
    }
}

getQuote();
