function motherPromise() {
  return new Promise((resolve, reject) => {
    console.log(" If you finish your homework, I’ll buy you a toy.");

    const homeworkDone = false; // Change to false to test rejection

    setTimeout(() => {
      if (homeworkDone) {
        resolve("Here is your toy 🎁");
      } else {
        reject("No toy until you finish your homework 😡");
      }
    }, 2000);
  });
}

async function sonReaction() {
  try {
    const message = await motherPromise(); // Wait for mother's promise
    console.log("mom:", message);
    console.log("Son: Yay! I’m so happy 😍");
  } catch (error) {
    console.log("mom:", error);
    console.log("Son: Okay… I’ll finish my homework next time 😔");
  }
}
sonReaction(); 

// simplifly prompe
 async function mothergivetoy() {
  console.log(" If you finish your homework, I’ll buy you a toy.");
}

async function askReaction( trur ) {
  let result = await mothergivetoy();
  console.log("Son:", result);
}
askReaction();