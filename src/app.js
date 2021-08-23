function ageInDays() {
  let birthYear = prompt("What year were you born?");
  let numberOfDays = (2020 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(`You are ${numberOfDays} days old!`);
  h1.appendChild(textAnswer);
  h1.setAttribute("id", "ageInDays");
  document.getElementById("flex-box-result").appendChild(h1);
}
