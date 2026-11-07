
function toggleDieHold(id) {
    // Find the die that the user clicked.
    let die = document.getElementById(id);

    // Check whether the die is currently active.
    if (die.dataset.active === "true") {
        // Hold the die so it will not roll.
        die.dataset.active = "false";
        die.classList.add("held");
    } else {
        // Release the die so it can roll again.
        die.dataset.active = "true";
        die.classList.remove("held");
    }
}

function rollDice() {
    // Find all five dice.
    let dice = document.querySelectorAll(".die");

    // Go through each die.
    for (let die of dice) {
        // Only roll dice that are active.
        if (die.dataset.active === "true") {
            // Generate a random number from 1 to 6.
            let number = Math.floor(Math.random() * 6) + 1;

            // Update the die image and its description.
            die.src = "images/" + number + ".png";
            die.alt = "Die " + number;
        }
    }
}


