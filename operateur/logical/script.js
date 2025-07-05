// Example 1: Logical AND (&&)
    let hasTicket = false;
    let isSober = true;

    if (hasTicket && isSober) {
      console.log("✅ You can enter the concert (AND example).");
    } else {
      console.log("❌ You cannot enter the concert.");
    }

    // Example 2: Logical OR (||)
    let hasUmbrella = false;
    let isWearingRaincoat = false;

    if (hasUmbrella || isWearingRaincoat) {
      console.log("✅ You are protected from the rain (OR example).");
    } else {
      console.log("❌ You will get wet!");
    }

    // Example 3: Logical NOT (!)
    let isTired = false;

    if (!isTired) {
      console.log("✅ You can keep studying .");
    } else {
      console.log("❌ Take a break!");
    }