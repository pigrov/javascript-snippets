// This snippet contains two functions: `countdown` and `countup`. 
// The `countdown` function takes in parameters `start` (initial value), `difference` (amount to count down by), `duration` (total duration of the countdown in seconds), `element` (HTML element to update with the countdown value), and `callback` (optional function to call when the countdown is complete). 
// Inside the `countdown` function, it initializes a `count` variable with the `start` value, calculates the `end` value by subtracting the `difference` from `start`, and determines the `interval` for updating the countdown value. It then sets up a timer using `setInterval` to decrement the `count` value, update the `element` with the new value, and check if the countdown has reached the `end` value to clear the timer and call the `callback` function if provided.
// Similarly, the `countup` function works in a similar way but counts up from the `start` value to an `end` value calculated by adding the `difference`. It increments the `count` value, updates the `element`, and clears the timer and calls the `callback` function when the count reaches the `end` value.

const countdown = (start, difference, duration, element, callback) => {
	let count = start;
	const end = start - difference;
	const interval = duration / difference;

	const timer = setInterval(() => {
		element.text(count);
		count--;
		count < end && (clearInterval(timer), callback && callback());
	}, interval * 1000);
};

const countup = (start, difference, duration, element, callback) => {
	let count = start;
	const end = +start + difference;
	const interval = duration / difference;

	const timer = setInterval(() => {
		element.text(count);
		count++;
		count > end && (clearInterval(timer), callback && callback());
	}, interval * 1000);
};
