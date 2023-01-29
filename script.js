function calculate() {
    // Get the current date
    var today = new Date();

    // Get the given date
    var givenDate = new Date(document.getElementById("date").value);
    // Find the difference in milliseconds
    var diff = today.getTime() - givenDate.getTime();
    // Convert milliseconds to days
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // Convert milliseconds to seconds
    var seconds = Math.floor(diff / 1000);
    // Convert milliseconds to minutes
    var minutes = Math.floor(diff / (1000 * 60));
    // Convert milliseconds to hours
    var hours = Math.floor(diff / (1000 * 60 * 60));
    // Convert milliseconds to months
    var months = Math.floor(days / 30);
    // Convert milliseconds to years
    var years = Math.floor(months / 12);

    // Calculate the number of heartbeats
    var heartbeatsPerMinute = 75;
    var heartbeatsPerDay = heartbeatsPerMinute * 24 * 60;
    var totalHeartbeats = heartbeatsPerDay * days;

    var averageBreathPerMinute = 14;
    var breath = minutes * averageBreathPerMinute;
    document.getElementById("breath").innerHTML = breath + " breath";

    document.getElementById("days").innerHTML = days + " days";
    document.getElementById("seconds").innerHTML = seconds + " seconds";
    document.getElementById("minutes").innerHTML = minutes + " minutes";
    document.getElementById("hours").innerHTML = hours + " hours";
    document.getElementById("months").innerHTML = months + " months";
    document.getElementById("years").innerHTML = years + " years";
    document.getElementById("heartbeats").innerHTML = totalHeartbeats + " heartbeats";
}
