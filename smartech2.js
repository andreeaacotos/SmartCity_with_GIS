const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    //  setting the date & day
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    date = day.getDate();
    month = day.getMonth() + 1;
    year = day.getFullYear();

    let today = weekday[day.getDay()];
    if (month < 9) {
        month = "0" + month;
    }
    dateEl = document.querySelector(".date");
    dayEl = document.querySelector(".day");

    dateEl.innerHTML = date + "/" + month + "/" + year;
    dayEl.innerHTML = today;
});