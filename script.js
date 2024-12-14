function generateQuote() {
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
        "Experience is the name everyone gives to their mistakes. - Oscar Wilde"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
