//declare variables and get date information
const d = new Date();
const year = d.getFullYear();


// using getElementById
document.querySelector("#currentyear").textContent = year;
document.getElementById("lastupdated").textContent = `Last Updated: ${document.lastModified}`;

// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}

//Get date and time
var datetime = "Last Sync: " + d.getDate() + "/"
	+ (d.getMonth()+1)  + "/"
	+ d.getFullYear() + " || "
	+ d.getHours() + ":"
	+ d.getMinutes() + ":"
	+ d.getSeconds();
console.log(datetime)
document.getElementById("submitdate").value = datetime
