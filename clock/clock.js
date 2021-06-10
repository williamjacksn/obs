const url_params = new URLSearchParams(window.location.search);

let tz = 'America/Los_Angeles';
if (url_params.has('tz')) {
    tz = url_params.get('tz');
}

let loc = 'Los Angeles, California';
if (url_params.has('loc')) {
    loc = url_params.get('loc');
}

const locEl = document.getElementById('location');
locEl.textContent = loc;

function updateClock() {
    const now = new Date();
    const div = document.getElementById('clock');
    div.textContent = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: tz
    });
}

setInterval(updateClock, 1000);
