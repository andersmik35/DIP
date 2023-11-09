function vent(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

function gaetTalISyttenTabel() {
  return new Promise((resolve) => {
    const tilfældigVarighed = Math.floor(Math.random() * 3000) + 1000;
    vent(tilfældigVarighed, resolve, reject)
      .then(() => {
        const tilfældigtTal = Math.floor(Math.random() * 2001);
        if (tilfældigtTal % 17 === 0) {
          resolve(tilfældigtTal);
        } else {
          reject("Tallet er ikke deleligt med 17.");
        }
      })
  });
}
function proevNogleGange(antalGange) {
  const promises = [];

  for (let i = 0; i < antalGange; i++) {
    promises.push(gaetTalISyttenTabel());
  }

  return Promise.race(promises)
    .then((result) => {
      return result;
    })
    .catch(() => {
      throw new Error("Ingen af forsøgene lykkedes.");
    });
}

proevNogleGange(3)
  .then((result) => {
    console.log("Et tal blev fundet: " + result);
  })
  .catch((error) => {
    console.error("Ingen tal blev fundet: " + error);
  });


  



