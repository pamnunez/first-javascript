
var myHeading = document.querySelector('h1');

var date = new Date();
//var dateLen = date.getMonth();

var test = 20;

myHeading.textContent = 'Hello world!' + date.getMonth();


document.getElementById("msgbox").addEventListener("submit", function(e) {
	e.preventDefault();
	var msg = e.currentTarget.getElementById("msg").value.trim();
	if (msg) {
		alert(msg);
	}
}, false);