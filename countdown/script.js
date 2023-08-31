const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const dateStrig = document.querySelector('.gift-info');
const endDate = new Date(2023, 10, 11, 12);
dateStrig.textContent = `
    Giveaway Ends On ${weekDays[endDate.getDay()]}, ${endDate.getDate()} ${Months[endDate.getMonth()]}
    ${endDate.getFullYear()} ${endDate.getHours()}: ${endDate.getMinutes()}pm
`
console.log(endDate)

function updateDates() {
    const btnContainer = document.querySelectorAll('.dates')
    const currentDate = new Date();
    const remainingDate = endDate - currentDate;
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMin = 60 * 1000;
    let oneSec = 1000;

    let daysLeft = Math.floor(remainingDate / oneDay);
    let hourLeft = Math.floor((remainingDate % oneDay) / oneHour);
    let minsLeft = Math.floor(((remainingDate % oneDay) % oneHour) / oneMin);
    let secsLeft = Math.floor((((remainingDate % oneDay) % oneHour) % oneMin) / oneSec);

    const dateLeft = [daysLeft, hourLeft, minsLeft, secsLeft]

    btnContainer.forEach((e, index) => {
        e.innerHTML = `
        <h1>${lessThTen(dateLeft[index])}</h1>
`
    });
    function lessThTen(value) {
        if(value < 10) return value = '0' + value;
        else return value;
    }
}



setInterval(updateDates, 1000);

