const quoteDisplay = document.querySelector("#quoteDisplay");
const newQuote = document.querySelector("#newQuote");
const quotes = [
  {
    text: "Be not simply good - be good for something.",
    author: "Henry David Thoreau",
    category: "Good",
  },
  {
    text: "Every failure is a step to success.",
    author: "William Whewell",
    category: "Failure",
  },
  {
    text: "The difficulty in life is the choice.",
    author: "George A. Moore",
    category: "Life",
  },
  {
    text: "Remember we're all in this alone.",
    author: "Lily Tomlin",
    category: "Alone",
  },
];

function showRandomQuote() {
  index = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = `
    <blockquote><p>&ldquo;${quotes[index]["text"]}&rdquo;</p></blockquote>
    <p>${quotes[index]["author"]}</p>
    <p class="category">#${quotes[index]["category"]}</p>
  `;
}

function createAddQuoteForm() {
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
  document.createElement("sth").appendChild("sth");
}

newQuote.addEventListener("click", showRandomQuote);
