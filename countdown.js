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
