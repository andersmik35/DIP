function generateRandomPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 11);
  
        if (randomNumber < 7) {
          resolve(randomNumber);
        } else if (randomNumber >= 7 && randomNumber < 10) {
          reject(`Rejected for number ${randomNumber}`);
        } else {
          throw new Error(`Exception for number ${randomNumber}`);
        }
      }, 1000); // Simulerer asynkront arbejde
    });
  }
  
  const promises = [
    generateRandomPromise(),
    generateRandomPromise(),
    generateRandomPromise(),
    generateRandomPromise(),
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
  Promise.allSettled(promises)
    .then((results) => {
      console.log("Promise.allSettled Result:", results);
    });
  