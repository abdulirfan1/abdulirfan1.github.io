function showSection(id) {
    document.querySelectorAll('.section').forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
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

