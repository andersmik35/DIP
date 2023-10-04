function fetchRandomNumber() {
  return fetch(
    "https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      return parseInt(data.trim());
    });
}

const promises = [
  fetchRandomNumber(),
  fetchRandomNumber(),
  fetchRandomNumber(),
  fetchRandomNumber(),
];

// Brug Promise.all
Promise.all(promises)
  .then((results) => {
    console.log("Promise.all Result:", results);
  })
  .catch((error) => {
    console.error("Promise.all Error:", error);
  });

// Brug Promise.any
Promise.any(promises)
  .then((result) => {
    console.log("Promise.any Result:", result);
  })
  .catch((error) => {
    console.error("Promise.any Error:", error);
  });

// Brug Promise.allSettled
Promise.allSettled(promises).then((results) => {
  console.log("Promise.allSettled Result:", results);
});
