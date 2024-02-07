// Define a function called logkey that takes an event as a parameter
function logkey(event){
    // Use console.log to output the pressed key to the console
    console.log(event.key);
}

// Add an event listener to the document that listens for the "keydown" event
// When a key is pressed, the logkey function will be called
document.addEventListener("keydown", logkey);
