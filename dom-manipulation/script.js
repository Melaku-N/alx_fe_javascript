const quoteDisplay = document.querySelector("#quoteDisplay");
const newQuote = document.querySelector("#newQuote");
const quotes = [
  {
    quote: "Be not simply good - be good for something.",
    author: "Henry David Thoreau",
    category: "Good",
  },
  {
    quote: "Every failure is a step to success.",
    author: "William Whewell",
    category: "Failure",
  },
  {
    quote: "The difficulty in life is the choice.",
    author: "George A. Moore",
    category: "Life",
  },
  {
    quote: "Remember we're all in this alone.",
    author: "Lily Tomlin",
    category: "Alone",
  },
];

function showRandomQuote() {
  index = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = `
    <blockquote><p>&ldquo;${quotes[index]["quote"]}&rdquo;</p></blockquote>
    <p>${quotes[index]["author"]}</p>
    <p class="category">#${quotes[index]["category"]}</p>
  `;
}

function addQuote() {
  const newQuoteText = document.querySelector("#newQuoteText").value;
  const newQuoteCategory = document.querySelector("#newQuoteCategory").value;
  const newQuoteAuthor =
    document.querySelector("#newQuoteAuthor").value || "Anonymous";

  if (newQuoteText && newQuoteCategory) {
    quotes.push({
      quote: newQuoteText,
      author: newQuoteAuthor,
      category: newQuoteCategory,
    });
    quoteDisplay.innerHTML = `
      <blockquote><p>&ldquo;${newQuoteText}&rdquo;</p></blockquote>
      <p>${newQuoteAuthor}</p>
      <p class="category">#${newQuoteCategory}</p>
    `;
  } else {
    alert("Please ensure that you fill in both the quote and its category.");
  }
}

newQuote.addEventListener("click", showRandomQuote);
