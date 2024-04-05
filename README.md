1. pasteCleanText.js - when copying, the text inserts the formatted text into the edited div.
2. debounce.js - function is designed to set the delay for the execution of another function.
3. cookie.js -  function is designed to work with cookies




## [cookie.js](https://github.com/pigrov/javascript-snippets/blob/main/cookie.js)
This code snippet contains three functions related to handling cookies in JavaScript:

1. `setCookie(name, value, days)`: This function is used to set a cookie with the specified name, value, and expiration days. It first checks if the `days` parameter is provided. If it is, it calculates the expiration date based on the current date and the number of days provided. Then it sets the cookie with the name, value, expiration date, and path.
2. `getCookie(name)`: This function is used to retrieve the value of a cookie by its name. It splits the `document.cookie` string into individual cookies, then iterates through them to find the one with the matching name. Once found, it returns the value of that cookie.
3. `eraseCookie(name)`: This function is used to erase (delete) a cookie by setting its expiration date to a past date. It sets the cookie with the specified name to have a `Max-Age` of -99999999, effectively removing it from the browser.

These functions provide basic cookie handling functionality in JavaScript for storing, retrieving, and deleting cookies.



## [focusend.js](https://github.com/pigrov/javascript-snippets/blob/main/focusend.js)
This JavaScript snippet defines a function called `focusend` that takes an `element` as a parameter. Inside the function, there is a `setTimeout` function with a delay of 0 milliseconds, which means it will be executed asynchronously as soon as possible. 

Within the `setTimeout` function, the following actions are performed:
1. `element.focus()` - This focuses on the specified element.
2. `window.getSelection().selectAllChildren(element)` - This selects all the children of the specified element.
3. `window.getSelection().collapseToEnd()` - This collapses the selection to the end of the range.

Overall, this snippet is used to focus on an element, select all its children, and collapse the selection to the end. The use of `setTimeout` with a delay of 0 milliseconds allows these actions to be performed asynchronously.
