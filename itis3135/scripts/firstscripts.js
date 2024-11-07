function displayDate() {
    const date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    document.getElementById("date-display").textContent = `Today is ${date.toLocaleDateString('en-US', options)}`;
}

window.onload = displayDate;

function submitUserInfo() {
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;
    const companyName = "Artificial Ibex";

    document.getElementById("greeting").innerHTML = `
        <h3>The ${companyName} welcomes you, ${userName}!</h3>
        <p>We're glad you're feeling ${userMood} today.</p>
    `;
}

function showPolygon() {
    let favoriteNumber = Math.abs(Math.floor(document.getElementById("favorite-number").value));
    let polygonName = "";

    switch (favoriteNumber) {
        case 1: polygonName = "Monogon"; break;
        case 2: polygonName = "Bigon"; break;
        case 3: polygonName = "Trigon (Triangle)"; break;
        case 4: polygonName = "Tetragon (Quadrilateral)"; break;
        case 5: polygonName = "Pentagon"; break;
        case 6: polygonName = "Hexagon"; break;
        case 7: polygonName = "Heptagon"; break;
        case 8: polygonName = "Octagon"; break;
        case 9: polygonName = "Nonagon"; break;
        case 10: polygonName = "Decagon"; break;
        default: polygonName = "Polygon with more than 10 sides";
    }

    alert(`Your favorite number corresponds to a ${polygonName}.`);
}

function scriptTest() {
    alert("The script is running!");
}

function playIbexSound() {
    const audio = document.getElementById("ibex-audio");
    audio.play();
}
