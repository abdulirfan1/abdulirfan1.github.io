function displayDate() {
    const date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
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

function showIbexWisdom() {
    const ibexSayings = [
        "Climb high, but always keep your footing steady.",
        "Balance is not just a skill, but a way of life.",
        "When the path gets steep, take it one step at a time.",
        "Adapt to your surroundings, and no peak will be unreachable.",
        "Stand tall and proud, even in the face of the highest cliffs."
    ];

    const randomIndex = Math.floor(Math.random() * ibexSayings.length);
    const randomSaying = ibexSayings[randomIndex];

    alert(randomSaying);
}

function showIbexFunFact() {
    const ibexFunFacts = [
        "Ibexes are incredible climbers, often scaling steep mountain faces with ease.",
        "Ibexes can jump over 6 feet in a single bound!",
        "The Ibex's horns can grow up to 3 feet long and are used to establish dominance.",
        "Ibexes are social animals and often live in herds of up to 20 members.",
        "Ibexes are herbivores and enjoy a diet of grasses, herbs, and shrubs."
    ];

    const randomIndex = Math.floor(Math.random() * ibexFunFacts.length);
    const randomFact = ibexFunFacts[randomIndex];

    alert(randomFact);
}

function showIbexPicture() {
    const ibexImage = document.getElementById("ibex-image");

    if (ibexImage.style.display === "none" || ibexImage.style.display === "") {
        ibexImage.src = "images/ibex.jpg"; 
        ibexImage.style.display = "block";
    } else {
        ibexImage.style.display = "none";
    }

}

window.onload = function() {
    displayDate();
    document.getElementById("submit-user-form-btn").addEventListener("click", submitUserInfo);
    document.getElementById("show-polygon-btn").addEventListener("click", showPolygon);
    document.getElementById("ibex-sound-btn").addEventListener("click", playIbexSound);
    document.getElementById("ibex-wisdom-btn").addEventListener("click", showIbexWisdom);
    document.getElementById("ibex-fun-fact-btn").addEventListener("click", showIbexFunFact);
    document.getElementById("ibex-picture-btn").addEventListener("click", showIbexPicture);
};
