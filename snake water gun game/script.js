    function play(user) {
  const choices = {
    s: "Snake",
    w: "Water",
    g: "Gun"
  };

  const computerOptions = ["s", "w", "g"];
  const computer = computerOptions[Math.floor(Math.random() * 3)];

  document.getElementById("userChoice").innerText =
    "You chose: " + choices[user];

  document.getElementById("computerChoice").innerText =
    "Computer chose: " + choices[computer];

  let result = "";

  if (user === computer) {
    result = "It's a Draw 🤝";
  } 
  else if (
    (computer === "s" && user === "w") ||
    (computer === "w" && user === "g") ||
    (computer === "g" && user === "s")
  ) {
    result = "You Lose ❌";
  } 
  else {
    result = "You Win 🎉";
  }

  document.getElementById("output").innerText = result;
}