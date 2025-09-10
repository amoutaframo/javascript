const motherPromise = new Promise((resolve, reject) => {
  console.log("Mother: If you finish your homework, I’ll buy you a toy.");

  const homeworkDone = false; // Change this to false to test rejection

  setTimeout(() => {
    if (homeworkDone) {
      resolve("Here is your toy 🎁");
    } else {
      reject("No toy until you finish your homework 😡");
    }
  }, 10000); // Simulate time passing
});

motherPromise
  .then((message) => {
    console.log("mother:", message);
  })
  .catch((error) => {
    console.log("mom:", error);
  });
//Asynchronous need promises
