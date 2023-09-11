
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the elements
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrackElement = document.querySelector('[data-testid="myTrack"]');

    // Update the elements with real-time data
    slackUserNameElement.textContent = "Olugbode Kawthar Adebimpe";
    currentDayOfTheWeekElement.textContent = getCurrentDayOfTheWeek();
    currentUTCTimeElement.textContent = getCurrentUTCTime();
    myTrackElement.textContent = " Track (Frontend)";
});

// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time in the specified format
function getCurrentUTCTime() {
    const currentTimeInMilliseconds = Date.now();
    const utcTime = new Date(currentTimeInMilliseconds).toISOString();
    return utcTime;
}
