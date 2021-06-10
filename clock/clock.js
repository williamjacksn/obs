const urlSearchParams = new URLSearchParams(window.location.search);

let opacity = 0;
if (urlSearchParams.has('opacity')) {
    opacity = urlSearchParams.get('opacity');
}

document.body.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`

let loc = 'Los Angeles, California';
if (urlSearchParams.has('loc')) {
    loc = urlSearchParams.get('loc');
}

document.getElementById('location').textContent = loc;

let tz = 'America/Los_Angeles';
if (urlSearchParams.has('tz')) {
    tz = urlSearchParams.get('tz');
}

const clockEl = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: tz
    });
}

updateClock();
setInterval(updateClock, 1000);
