// Select the button element
const clockButton = document.querySelector("#clockBtn");

// Function expression to refresh displayed time
const showCurrentTime = function () {
    try {
        const currentTime = new Date();
        clockButton.textContent = currentTime.toLocaleString();
        setTimeout(showCurrentTime, 1000); // refresh every 1 sec
    } catch (err) {
        console.error("Error while updating time:", err.message);
    }
};

// Initial call to start the clock
showCurrentTime();
