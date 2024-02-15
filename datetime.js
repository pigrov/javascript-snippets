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
