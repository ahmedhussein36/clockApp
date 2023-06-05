let days = ["sat", "sun", "mon", "tus", "wed", "thu", "fri"];
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

function digitClock() {
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

// run the clock
interval = setInterval(digitClock, 1000);
