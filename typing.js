function typing(Gen, text, callback, speed = 10, i = 0) {
	const process = () => {
		if (i < text.length) {
			Gen.html(text.slice(0, i + 1));
			i++;
			setTimeout(process, Math.floor(Math.random() * 51) + speed);
		} else {
			callback && callback();
		}
	};

	process();
}
