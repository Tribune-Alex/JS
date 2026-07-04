flatpickr("#date-picker", {
    dateFormat: "Y-m-d",
});

const dateform = document.getElementById("date-picker");
const result = document.getElementById("result");
const dateformtwo = document.getElementById("date-picker2");
const results = document.getElementById("results");
const resultday = document.getElementById("resultday");
const dateformthree = document.getElementById("date-picker3");
dateform.addEventListener("change", GetAge);
dateformtwo.addEventListener("change", countDown);
dateformthree.addEventListener("change", getDay)



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
        resultday.innerHTML += "<p>Sunday</p><p>Weekend day</p>";
    } else if(dayOfWeek === 6) {
        resultday.innerHTML += "<p>Saterday</p><p>Weekday</p>";
    }else if(dayOfWeek===1){
        resultday.innerHTML += "<p>Monday</p><p>Weekday</p>";
    }else if(dayOfWeek===2){
        resultday.innerHTML += "<p>Tuesday</p><p>Weekday</p>";
    }else if(dayOfWeek===3){
        resultday.innerHTML += "<p>Wednesday</p><p>Weekday</p>";
    }else if(dayOfWeek===4){
        resultday.innerHTML += "<p>Thursday</p><p>Weekday</p>";
    }else if(dayOfWeek===5){
        resultday.innerHTML += "<p>Friday</p><p>Weekday</p>";
    }
}