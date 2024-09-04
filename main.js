
Number.prototype.pad = function(digits) {
    let n = this.toString();
    while (n.length < digits) {
        n = '0' + n;
    }
    return n;
};

function updateClock() {
    var now = new Date();
    console.log("now", now);
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    if (hou === 0) {
        hou = 12;
    } else if (hou > 12) {
        hou -= 12;
        pe = "PM";
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [day[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
    }
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000); // Correctly set interval to call updateClock every second
}

// Call initClock to start the clock
initClock();
