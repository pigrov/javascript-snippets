// This code snippet contains three functions related to handling cookies in JavaScript:
// setCookie(name, value, days): This function is used to set a cookie with the specified name, value, and expiration days. It first checks if the days parameter is provided. If it is, it calculates the expiration date based on the current date and the number of days provided. Then it sets the cookie with the name, value, expiration date, and path.
// getCookie(name): This function is used to retrieve the value of a cookie by its name. It splits the document.cookie string into individual cookies, then iterates through them to find the one with the matching name. Once found, it returns the value of that cookie.
// eraseCookie(name): This function is used to erase (delete) a cookie by setting its expiration date to a past date. It sets the cookie with the specified name to have a Max-Age of -99999999, effectively removing it from the browser.
// These functions provide basic cookie handling functionality in JavaScript for storing, retrieving, and deleting cookies.

function setCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}
