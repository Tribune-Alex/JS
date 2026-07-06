const dateform = document.getElementById("date-picker");
const result = document.getElementById("result");
const dateformtwo = document.getElementById("date-picker2");
const results = document.getElementById("results");
const resultday = document.getElementById("resultday");
const dateformthree = document.getElementById("date-picker3");
const dateformfour = document.getElementById("date-picker4");
const dateformfive = document.getElementById("date-picker5");
const dateformsix = document.getElementById("date-picker6");
const resultcompare = document.getElementById("resultcompare");
const resultcalendar = document.getElementById("resultcalendar");
const display = document.getElementById("display");
const screen = document.getElementById("screen");
const button = document.getElementById("but");
const reset = document.getElementById("res");
const digitclock = document.getElementById("digitclock");
const generator = document.getElementById("generator");
const displayten = document.getElementById("displayten");
dateform.addEventListener("change", GetAge);
dateformtwo.addEventListener("change", countDown);
dateformthree.addEventListener("change", getDay);
dateformsix.addEventListener("change", getDays);



flatpickr("#date-picker", {
    dateFormat: "Y-m-d",
});


function GetAge() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(dateform.value);

    const choosen = dateform.value;

    const [birthYear, birthMonth, birthDay] = choosen.split("-").map(Number);

    let age = year - birthYear;
    if (month < birthMonth || (month === birthMonth && day < birthDay)) {
        age--;
    };
    let totalMonths = (year - birthYear) * 12 + (month - birthMonth);
    let days = day - birthDay;

    if (days < 0) {
        totalMonths--;

        const lastMonthDays = new Date(year, month - 1, 0).getDate();
        days += lastMonthDays;
    }



    const today = new Date();

    let nextBirthday = new Date(year, birthMonth - 1, birthDay);


    if (nextBirthday < today) {
        nextBirthday = new Date(year + 1, birthMonth - 1, birthDay);
    }


    const diff = nextBirthday - today;


    const daysUntilBirthday = Math.ceil(diff / (1000 * 60 * 60 * 24));


    result.innerHTML = `
    <p>AGE: ${age} years</p>
    <p>Time since birth: ${totalMonths} months and ${days} days</p>
    <p>Next birthday: in ${daysUntilBirthday} days</p>
`;
};


flatpickr("#date-picker2", {
    enableTime: true,
    enableSeconds: true,
    time_24hr: true,
    dateFormat: "Y-m-d H:i:S",
});

function countDown() {

    setInterval(() => {
        const currentdate = new Date();
        const chosenDate = new Date(dateformtwo.value);

        let diff = chosenDate - currentdate;

        if (diff <= 0) {
            alert("That date has already been");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff %= 1000 * 60 * 60 * 24;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff %= 1000 * 60 * 60;

        const minutes = Math.floor(diff / (1000 * 60));
        diff %= 1000 * 60;

        const seconds = Math.floor(diff / 1000);


        results.innerHTML = `
        <p>Left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</p>
        `;

    }, 1000);

};

let dayOfWeek = null;
flatpickr("#date-picker3", {
    dateFormat: "Y-m-d",
    onChange: function (selectedDates) {
        const date = selectedDates[0];
        dayOfWeek = date.getDay();
        console.log(dayOfWeek);
    }
});

function getDay() {
    const choosen = dateformthree.value;
    const [cYear, cMonth, cDay] = choosen.split("-").map(Number);
    if (dayOfWeek === 0) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Sunday</p><p>Weekend day</p>";
    } else if (dayOfWeek === 6) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Saterday</p><p>Weekday</p>";
    } else if (dayOfWeek === 1) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Monday</p><p>Weekday</p>";
    } else if (dayOfWeek === 2) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Tuesday</p><p>Weekday</p>";
    } else if (dayOfWeek === 3) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Wednesday</p><p>Weekday</p>";
    } else if (dayOfWeek === 4) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Thursday</p><p>Weekday</p>";
    } else if (dayOfWeek === 5) {
        resultday.innerHTML = "";
        resultday.innerHTML += "<p>Friday</p><p>Weekday</p>";
    }
};


flatpickr("#date-picker4", {
    enableTime: true,
    enableSeconds: true,
    time_24hr: true,
    dateFormat: "Y-m-d H:i:S",
    onChange: function (selectedDates) {
        const date = selectedDates[0];
        dayOfWeek1 = date.getDay();
        console.log(dayOfWeek);
    }
});


flatpickr("#date-picker5", {
    enableTime: true,
    enableSeconds: true,
    time_24hr: true,
    dateFormat: "Y-m-d H:i:S",
    onChange: function (selectedDates) {
        const date = selectedDates[0];
        dayOfWeek2 = date.getDay();
        console.log(dayOfWeek);
    }
});


function compareDate() {

    const date1 = new Date(dateformfour.value);
    const date2 = new Date(dateformfive.value);

    let diff = Math.abs(date2 - date1);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));

    resultcompare.innerHTML = `
        Difference between your dates is:
        ${days} days,
        ${hours} hours,
        ${minutes} minutes
    `;
};

let selectedMonth = null;
let selectedYear = null;

flatpickr("#date-picker6", {
    altInput: true,
    altFormat: "F Y",
    plugins: [
        new monthSelectPlugin({
            shorthand: true,
            dateFormat: "m/Y",
            altFormat: "F Y"
        })
    ],

    onChange(selectedDates) {
        const date = selectedDates[0];

        selectedMonth = date.getMonth() + 1;
        selectedYear = date.getFullYear();


        console.log(selectedMonth);
        console.log(selectedYear);
    }
});

function getDays() {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    resultcalendar.innerHTML = "";
    resultcalendar.innerHTML += `There are ${daysInMonth} days`;
};


const persons = [
    { name: "Ana", birthday: "2001-08-15" },
    { name: "Luka", birthday: "1999-06-30" },
    { name: "Nika", birthday: "2000-12-10" }
];

function closestBirthday() {
    const daily = new Date();
    const nowyear = daily.getFullYear();
    let res = [];
    for (let person of persons) {
        const [birYear, birMonth, birDay] = person.birthday.split("-").map(Number);
        const [name] = person.name.split("-");
        let nextBirthday1 = new Date(nowyear, birMonth - 1, birDay);


        if (nextBirthday1 < daily) {
            nextBirthday1 = new Date(nowyear + 1, birMonth - 1, birDay);
        }


        const diff1 = nextBirthday1 - daily;
        const daysUntilBirthday1 = Math.ceil(diff1 / (1000 * 60 * 60 * 24));
        res.push({
            name: person.name,
            days: daysUntilBirthday1
        });
    }
    const closest = res.reduce((min, person) =>
        person.days < min.days ? person : min
    );

    display.innerHTML += `${closest.name} closest birthday is in ${closest.days} days. `;


};


closestBirthday();


const now = new Date();
const choose111 = { month: 'long', day: 'numeric', year: 'numeric' };
const choose333 = { day: '2-digit', month: '2-digit', year: 'numeric' };
screen.innerHTML += `<p>${now}</p>`

let click = 0;
button.addEventListener("click", function () {
    click++;
    console.log(click);
    if (click % 2 !== 0) {
        screen.innerHTML = "";
        screen.innerHTML += `${now.toLocaleDateString('en-CA')} <p>${Intl.DateTimeFormat('ru-Ru', choose333).format(now)}`;
    } else if (click % 2 === 0) {
        screen.innerHTML = "";
        screen.innerHTML = `${now.toDateString()} <p>${now.toLocaleDateString(`en-US`, choose111)}</p>`;
    }

});

reset.addEventListener("click", function () {
    click = 0;
    screen.innerHTML = "";
    screen.innerHTML = `${now}`;
});

function getTime() {
    const rightnow = new Date();
    let hoursnow = rightnow.getHours();
    let minutesnow = rightnow.getMinutes();
    let secondsnow = rightnow.getSeconds();
    const datenow = rightnow.toLocaleDateString('en-CA');
    if (hoursnow < 10) {
        hoursnow = "0" + hoursnow;
    };
    if (minutesnow < 10) {
        minutesnow = "0" + minutesnow;
    };
    if (secondsnow < 10) {
        secondsnow = "0" + secondsnow;
    };
    const days11 = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const daynow = days11[rightnow.getDay()];

    digitclock.innerHTML = "";
    digitclock.innerHTML += `${hoursnow}:${minutesnow}:${secondsnow}, ${datenow} (${daynow})`;
};

setInterval(() => {
    getTime();
}, 1000);

const start = new Date("2000-01-01");
const end = new Date("2030-12-31");

function generateDate(start, end) {
    const randomdate = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const get = new Date(randomdate);
    const datewant = get.toLocaleDateString('en-Ca');
    const monthwant = get.getMonth();
    const daysall = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const daywant = daysall[get.getDay()];
    const seasonall = [
        "Winter",
        "Spring",
        "Summer",
        "Autumn"
    ];
    if (monthwant === 11 || monthwant === 0 || monthwant === 1) {
        generator.innerHTML = "";
        generator.innerHTML += `${datewant}, ${daywant} ${seasonall[0]}`;
    } else if (monthwant === 2 || monthwant === 3 || monthwant === 4) {
        generator.innerHTML = "";
        generator.innerHTML += `${datewant}, ${daywant} ${seasonall[1]}`;
    } else if (monthwant === 5 || monthwant === 6 || monthwant === 7) {
        generator.innerHTML = "";
        generator.innerHTML += `${datewant}, ${daywant} ${seasonall[2]}`;
    } else if (monthwant === 8 || monthwant === 9 || monthwant === 10) {
        generator.innerHTML = "";
        generator.innerHTML += `${datewant}, ${daywant} ${seasonall[3]}`;
    };

};


const events = [
    { title: "Exam", date: "2026-07-15" },
    { title: "Meeting", date: "2026-06-30" },
    { title: "Birthday", date: "2026-08-10" }
];

function eventPlanner() {
    const skynet = new Date();
    let resultarr = [];
    for (let event of events) {
        const eventDate = new Date(event.date);


        if (eventDate < skynet) {
            continue;
        }
        const diff55 = eventDate - skynet;

        const daysUntilEvent = Math.ceil(diff55 / (1000 * 60 * 60 * 24));

        resultarr.push({
            title: event.title,
            date: event.date,
            days: daysUntilEvent
        });
    }
    resultarr.sort((a, b) => a.days - b.days);
    const nearest = resultarr[0];

    displayten.innerHTML = "";
    
    displayten.innerHTML = `<h3>The nearest event is ${nearest.title} which begin in ${nearest.days} days</h3>`;

    for (let event of resultarr) {
        displayten.innerHTML += `<p>${event.title} -${event.date} - ${event.days} days left</p>`;
    }
};

eventPlanner();
