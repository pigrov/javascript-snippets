### Collection of snippets

> [!NOTE]
> Welcome to my collection of snippets. I always keep this collection handy and regularly update it.

## [cookie.js](https://github.com/pigrov/javascript-snippets/blob/main/cookie.js)
This code snippet contains three functions related to handling cookies in JavaScript:

1. `setCookie(name, value, days)`: This function is used to set a cookie with the specified name, value, and expiration days. It first checks if the `days` parameter is provided. If it is, it calculates the expiration date based on the current date and the number of days provided. Then it sets the cookie with the name, value, expiration date, and path.
2. `getCookie(name)`: This function is used to retrieve the value of a cookie by its name. It splits the `document.cookie` string into individual cookies, then iterates through them to find the one with the matching name. Once found, it returns the value of that cookie.
3. `eraseCookie(name)`: This function is used to erase (delete) a cookie by setting its expiration date to a past date. It sets the cookie with the specified name to have a `Max-Age` of -99999999, effectively removing it from the browser.

These functions provide basic cookie handling functionality in JavaScript for storing, retrieving, and deleting cookies.


## [copyImage.js](https://github.com/pigrov/javascript-snippets/blob/main/copyImage.js)
This code snippet consists of two functions: `imageToBlob` and `copyImage`. 

1. The `imageToBlob` function takes an `imageURL` as a parameter, creates an image element, a canvas element, and a 2D drawing context. It sets the cross-origin attribute of the image to an empty string, assigns the image URL to the image element, and then creates a promise that resolves when the image is loaded. Once the image is loaded, it sets the canvas dimensions to match the image's natural dimensions, draws the image on the canvas, converts the canvas content to a Blob object, and resolves the promise with the resulting blob.
2. The `copyImage` function is an async function that takes an `imageURL` as a parameter. It awaits the result of calling `imageToBlob` with the `imageURL`, then creates a `ClipboardItem` object with the blob and a MIME type of 'image/png'. Finally, it writes the clipboard with the created `ClipboardItem` using `navigator.clipboard.write`.

Overall, these functions work together to convert an image from a URL to a Blob object and then copy that Blob to the clipboard.


## [countdown.js](https://github.com/pigrov/javascript-snippets/blob/main/countdown.js)
This snippet contains two functions: `countdown` and `countup`. 

The `countdown` function takes in parameters `start` (initial value), `difference` (amount to count down by), `duration` (total duration of the countdown in seconds), `element` (HTML element to update with the countdown value), and `callback` (optional function to call when the countdown is complete). 

Inside the `countdown` function, it initializes a `count` variable with the `start` value, calculates the `end` value by subtracting the `difference` from `start`, and determines the `interval` for updating the countdown value. It then sets up a timer using `setInterval` to decrement the `count` value, update the `element` with the new value, and check if the countdown has reached the `end` value to clear the timer and call the `callback` function if provided.

Similarly, the `countup` function works in a similar way but counts up from the `start` value to an `end` value calculated by adding the `difference`. It increments the `count` value, updates the `element`, and clears the timer and calls the `callback` function when the count reaches the `end` value.

## [datetime.js](https://github.com/pigrov/javascript-snippets/blob/main/datetime.js)
This snippet of code defines three functions: `datetime`, `time`, and `date`. 

1. The `datetime` function takes an optional parameter `x`, which represents a date. If `x` is provided, it uses that date; otherwise, it generates the current date. It then formats the date in the format `DD/MM/YY HH:MM`.
2. The `time` function also takes an optional parameter `x`, processes it similarly to `datetime`, and returns only the time part in the format `HH:MM`.
3. The `date` function, like the others, takes an optional parameter `x`, processes it, and returns only the date part in the format `DD/MM/YY`. 

These functions are designed to handle date and time formatting in JavaScript.


## [focusend.js](https://github.com/pigrov/javascript-snippets/blob/main/focusend.js)
This JavaScript snippet defines a function called `focusend` that takes an `element` as a parameter. Inside the function, there is a `setTimeout` function with a delay of 0 milliseconds, which means it will be executed asynchronously as soon as possible. 

Within the `setTimeout` function, the following actions are performed:
1. `element.focus()` - This focuses on the specified element.
2. `window.getSelection().selectAllChildren(element)` - This selects all the children of the specified element.
3. `window.getSelection().collapseToEnd()` - This collapses the selection to the end of the range.

Overall, this snippet is used to focus on an element, select all its children, and collapse the selection to the end. The use of `setTimeout` with a delay of 0 milliseconds allows these actions to be performed asynchronously.
