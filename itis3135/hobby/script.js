function showSection(id) {
    document.querySelectorAll('.section').forEach((section) => {
        section.classList.remove('visible');
    });
    document.getElementById(id).classList.add('visible');
}


function highlightNextRace() {
    const rows = document.querySelectorAll("#race-calendar table tbody tr");
    const today = new Date();
    let nextRaceFound = false;

    // Clear previous highlights
    rows.forEach((row) => row.classList.remove("highlight"));

    for (let row of rows) {
        // Assuming the date is in the second cell (index 1)
        const dateCell = row.cells[1].innerText;
        const dateRange = dateCell.split(" - ");
        
        // Parse the start date of the race
        const [startMonth, startDay] = dateRange[0].split(" ");
        const startDate = new Date(`2024 ${startMonth} ${startDay}`);

        // Check if the race start date is after today
        if (startDate > today && !nextRaceFound) {
            row.classList.add("highlight");
            row.scrollIntoView({ behavior: "smooth", block: "center" });
            nextRaceFound = true;
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("about-link").addEventListener("click", () => showSection("about"));
    document.getElementById("f1-basics-link").addEventListener("click", () => showSection("f1-basics"));
    document.getElementById("race-calendar-link").addEventListener("click", () => showSection("race-calendar"));
    document.getElementById("iconic-circuits-link").addEventListener("click", () => showSection("iconic-circuits"));
    document.getElementById("driving-techniques-link").addEventListener("click", () => showSection("driving-techniques"));
    document.getElementById("why-link").addEventListener("click", () => showSection("why"));
    document.getElementById("ai-prompts-link").addEventListener("click", () => showSection("ai-prompts"));
    document.getElementById("highlight-next-race-button").addEventListener("click", highlightNextRace);
});

