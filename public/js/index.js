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
	"octubre",
	"Noviembre",
	"Diciembre",
];

const d = new Date();
let currentDay = d.getDate();
let currentMonth = d.getMonth();
let currentYear = d.getFullYear();

let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

let nextMonthButton = document.getElementById("next-month");
let prevMonthButton = document.getElementById("prev-month");

month.textContent = monthNames[currentMonth];
year.textContent = currentYear.toString();

nextMonthButton.addEventListener("click", () => nextMonth());
prevMonthButton.addEventListener("click", () => lastMonth());

let dayMonth = [];
writeMonth(currentMonth);

function writeMonth(month) {
	for (let i = startDay(); i > 0; i--) {
		dates.innerHTML += `<div class='month_before'>
	${getTotalDay(currentMonth - 1) - (i - 1)}
	</div>`;
	}

	for (i = 1; i <= getTotalDay(month); i++) {
		dayMonth.push([i]);
		if (i == currentDay) {
			dates.innerHTML += `<div class='calendar_today'>${i}</div>`;
		} else if (i % 2 == 0) {
			dates.innerHTML += `<div class='break'>${i}</div>`;
		} else {
			dates.innerHTML += `<div class='work'>${i}</div>`;
		}
	}
}

function getTotalDay(month) {
	if (month === -1) month = 11;

	if (
		month == 0 ||
		month == 2 ||
		month == 4 ||
		month == 6 ||
		month == 7 ||
		month == 9 ||
		month == 11
	) {
		return 31;
	} else if (month == 3 || month == 5 || month == 8 || month == 10) {
		return 30;
	} else {
		return isLeap() ? 29 : 28;
	}
}

function startDay() {
	// devuelve el primer dia del mes
	const start = new Date(currentYear, currentMonth, 1);
	// si es -1 queire de decir que no exite,en ese caso devolvemos 6 que es domingo.
	return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
}

function lastMonth() {
	if (currentMonth !== 0) {
		currentMonth--;
	} else {
		currentMonth = 11;
		currentYear--;
	}

	setNewDate();
}

function nextMonth() {
	if (currentMonth !== 11) {
		currentMonth++;
	} else {
		currentMonth = 0;
		currentYear++;
	}
	setNewDate();
}

function setNewDate() {
	d.setFullYear(currentYear, currentMonth, currentDay);
	month.textContent = monthNames[currentMonth];
	year.textContent = currentYear.toString();

	dates.textContent = "";
	writeMonth(currentMonth);
}

function isLeap() {
	return (
		(currentYear % 100 !== 0 && currentYear % 4 === 0) ||
		currentYear % 400 === 0
	);
}
