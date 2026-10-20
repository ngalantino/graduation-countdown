const countdownDiv = document.getElementById('countdown');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function countdownTimer() {
    while (true) {

        let finish_date = new Date("December 13, 2026 00:00:00");

        let now = Date.now();

        const time_in_ms = finish_date.getTime() - now;

        const days = getDays(time_in_ms);
        const hours = getHours(time_in_ms);
        const minutes = getMinutes(time_in_ms);
        const seconds = getSeconds(time_in_ms);

        let counter = `${days} ${days === 1 ? 'day' : 'days'}, <br> ${hours} ${hours === 1 ? 'hour' : 'hours'}, <br> ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}, <br>${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;

        countdownDiv.innerHTML = counter;

        await sleep(1000);

    }
}


function getDays(time_in_ms) {
    const days = Math.trunc(time_in_ms / 86400000);

    return days;
}

function getHours(time_in_ms) {
    const hours_in_ms = time_in_ms % 86400000;
    const hours = Math.trunc(hours_in_ms / 3600000);

    return hours;
}

function getMinutes(time_in_ms) {
    const minutes_in_ms = time_in_ms % 3600000;
    const minutes = Math.trunc(minutes_in_ms / 60000);

    return minutes;
}

function getSeconds(time_in_ms) {
    const seconds_in_ms = time_in_ms % 60000;
    const seconds = Math.trunc(seconds_in_ms / 1000);

    return seconds;
}

countdownTimer();