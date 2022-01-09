const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  document.querySelector('.desire-date').setAttribute('value', new Date().toDateString())

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today days">${i}</div>`;
    } else {
      days += `<div class = 'days'>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
document.querySelectorAll('.days').forEach((clcikedDaay) => {
  clcikedDaay.addEventListener('click', (day) => {
    let today = day.target.innerHTML;
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    const selctedDay = new Date(`${year}/${month}/${today}`);
    document.querySelector('.desire-date').setAttribute('value', selctedDay.toDateString())
  
    const bottomRail = document.querySelector('.bottom-container');
    bottomRail.classList.add('show');
  
    if(document.querySelector('.today'))
    document.querySelector('.today').classList.remove('today');
    day.target.classList.add('today')
  });
});
