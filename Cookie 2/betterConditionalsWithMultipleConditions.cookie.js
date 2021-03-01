// Declaration spot.
let username = "Airscript";

// Long-hand conditional.
if (username === "Air" || username === "Airscript" || username === "Vinicius") {
  console.log("I'm an ugly conditional! 😒");
}

// Short-hand conditional.
if (["Air", "Airscript", "Vinicius"].includes(username)) {
  console.log("I'm a beautiful conditional! 😍");
}