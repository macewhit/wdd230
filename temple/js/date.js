//declare variables and get date information
const d = new Date();
const year = d.getFullYear();

// using getElementById
document.querySelector("#currentyear").textContent = year;

// element to output to
const datefieldUK = document.querySelector(".date");