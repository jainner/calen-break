let monthNames = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Noviembre",
	"Diciembre",
];

const d = new Date();
const currentDay = d.getDate();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();

let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

const nextMonth = document.getElementById("next-month");
const prevMounth = document.getElementById("prev-month");

month.textContent = monthNames[currentMonth];
year.textContent = currentYear.toString();

function isLean() {
	return (
		(currentYear % 100 !== 0 && currentYear % 4 === 0) ||
		currentYear % 400 === 0
	);
}
