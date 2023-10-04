// index.js
const quoteContainer = document.getElementById("result");

async function fetchQuotes() {
  try {
    const quotes = await Promise.all([
      getQuote(),
      getQuote(),
      getQuote()
    ]);

    quoteContainer.innerHTML = ""; // Fjern tidligere citater

    quotes.forEach(quote => {
      const quoteElement = document.createElement("div");
      quoteElement.innerHTML = `<strong>Value:</strong> ${quote.value}<br><strong>Tag:</strong> ${quote.tags.join(", ")}`;
      quoteContainer.appendChild(quoteElement);
    });
  } catch (error) {
    quoteContainer.innerHTML = `<p>Fejl: ${error.message}</p>`;
  }
}

async function getQuote() {
  const url = "https://www.tronalddump.io/random/quote";
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error(`Fejl ved at hente citat. Statuskode: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

const fetchButton = document.createElement("button");
fetchButton.textContent = "Hent tre nye citater";
fetchButton.addEventListener("click", fetchQuotes);

document.body.appendChild(fetchButton);
