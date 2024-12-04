const nextShowDate = new Date("2024-12-09T10:00:00");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = nextShowDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown-timer").innerText = "The show has started!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
