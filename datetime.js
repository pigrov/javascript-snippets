// This snippet of code defines three functions: `datetime`, `time`, and `date`. 
// 1. The `datetime` function takes an optional parameter `x`, which represents a date. If `x` is provided, it uses that date; otherwise, it generates the current date. It then formats the date in the format `DD/MM/YY HH:MM`.
// 2. The `time` function also takes an optional parameter `x`, processes it similarly to `datetime`, and returns only the time part in the format `HH:MM`.
// 3. The `date` function, like the others, takes an optional parameter `x`, processes it, and returns only the date part in the format `DD/MM/YY`. 
// These functions are designed to handle date and time formatting in JavaScript.

const datetime = (x) => {
	const date =
		x ||
		new Date(
			new Date().getTime() - new Date().getTimezoneOffset() * 60000
		).toISOString();

	return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(
		2,
		4
	)} ${date.slice(11, 16)}`;
};

const time = (x) => {
	const date =
		x ||
		new Date(
			new Date().getTime() - new Date().getTimezoneOffset() * 60000
		).toISOString();

	return date.slice(11, 16);
};

const date = (x) => {
	const date =
		x ||
		new Date(
			new Date().getTime() - new Date().getTimezoneOffset() * 60000
		).toISOString();

	return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(2, 4)}`;
};
