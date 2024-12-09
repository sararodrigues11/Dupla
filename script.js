console.log("Hello, World!")

// Select the Hint button and the lines
const hintButton = document.querySelector('.button-container .btn:nth-child(2)');
const line2 = document.querySelector('.box-line-2'); // Line 2
const line3 = document.querySelector('.box-line-3'); // Line 3

// Counter to track the number of clicks
let hintClicks = 0;

// Add event listener to the Hint button
hintButton.addEventListener('click', function() {
    hintClicks++; // Increment the counter

    // If it's the first click, show Line 2
    if (hintClicks === 1) {
        line2.style.display = 'block';  // Show Line 2
        console.log("First click: Line 2 is now visible!");
    }
    // If it's the second click, show Line 3
    else if (hintClicks === 2) {
        line3.style.display = 'block';  // Show Line 3
        console.log("Second click: Line 3 is now visible!");
    }
    // After two clicks, do nothing
    else {
        console.log("Hint button clicked, but lines are already visible.");
    }
});
