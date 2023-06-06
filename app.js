let days = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let interval;
let anlgInterval;
// run the clock
interval = setInterval(digitClock, 1000);

//========== Digit clock function =========================
function digitClock() {
    document.querySelector(".con-analog").style.display = "none";
    document.querySelector(".con-time").style.display = "block";

    let currentDate = new Date();

    //Get Date
    let thisDate = currentDate.getDate();
    let thisMonth = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let today = currentDate.getDay();

    thisDate = thisDate < 10 ? "0" + thisDate : thisDate;

    //Get time
    let hrs = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let dn = hrs < 11 ? "AM" : "PM";

    // add time document
    document.querySelector(".hrs").innerHTML = hrs;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
    document.querySelector(".dn").innerHTML = dn;

    // add date document
    document.querySelector(".date .day").innerHTML = thisDate;
    document.querySelector(".date .month").innerHTML = months[thisMonth];
    document.querySelector(".date .year").innerHTML = year;

    // add days document
    document.getElementById(days[today]).classList.add("active");
}
digitClock();
//=========================================================================================

//=========== Analog Clock Function =========================

const hr = document.querySelector(".analog #hr");
const mn = document.querySelector(".analog #mn");
const sc = document.querySelector(" .analog #sc");

function analogClock() {
    document.querySelector(".con-time").style.display = "none";
    document.querySelector(".con-analog").style.display = "block";

    let currDate = new Date();

    let hh = currDate.getHours() * 30;
    let mm = currDate.getMinutes() * 6;
    let ss = currDate.getSeconds() * 6;

    // console.log(hh ,mm, ss)

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}

const analogBtn = document.querySelector(".controls #anlg");
const digitBtn = document.querySelector(".controls #dig");

analogBtn.onclick = () => {
    clearInterval(interval);
    anlgInterval = setInterval(analogClock, 1000);
};

digitBtn.onclick = () => {
    if (anlgInterval) {
        clearInterval(anlgInterval);
    }

    interval = setInterval(digitClock, 1000);
};
